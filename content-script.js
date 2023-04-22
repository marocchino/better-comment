let resultElement = null;
const keysWithDefault = [
  ["api_key", "your key"],
  ["model", "text-davinci-003"],
  ["temperature", "0.7"],
  ["max_tokens", "1000"],
  ["selector", 'textarea[name="comment[body]"]:focus'],
  [
    "prompt",
    "Improve this code review to make it more helpful to viewers and make you feel better. The improved version should use the same language I use in my reviews.",
  ],
];
let lastComment = null;
chrome.storage.sync.get("options", ({ options }) => {
  if (!options) {
    options = keysWithDefault.reduce((acc, [key, defaultValue]) => {
      acc[key] = defaultValue;
      return acc;
    });
    chrome.storage.sync.set({ options });
  }
  const analyzeComment = async (comment) => {
    resultElement.innerHTML = `<marquee>Analyzing... please be nice...</marquee>`;
    return new Promise((resolve) => {
      chrome.runtime.sendMessage(
        { type: "analyzeComment", comment, options },
        (improvedComment) => {
          resolve(improvedComment);
        }
      );
    });
  };

  const onInput = async (event) => {
    const comment = event.target.value;
    if (comment.trim().length === 0 || comment === lastComment) return;
    lastComment = comment;
    const improvedComment = await analyzeComment(comment);
    resultElement.innerHTML = `<p><strong>How about this?</strong> from better comment</p><p>${improvedComment}</p>`;
    observer.observe(document.body, { childList: true, subtree: true });
  };

  const observeCommentBox = () => {
    const commentBox = document.querySelector(options.selector);
    if (commentBox) {
      resultElement = document.createElement("div");
      commentBox.parentElement.appendChild(resultElement);
      commentBox.addEventListener("blur", onInput);
      return true;
    }
    return false;
  };

  const observer = new MutationObserver(() => {
    if (!observeCommentBox()) {
      setTimeout(observeCommentBox, 1000);
    } else {
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
});
