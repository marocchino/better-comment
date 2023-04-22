/* options */

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
chrome.storage.sync.get("options", ({ options }) => {
  keysWithDefault.forEach(([key, defaultValue]) => {
    document.getElementById(key).value = options ? options[key] : defaultValue;
  });
});

document.getElementById("save_button").addEventListener("click", () => {
  const options = {};
  keysWithDefault.forEach(([key, defaultValue]) => {
    options[key] = document.getElementById(key).value;
  });
  chrome.storage.sync.set({ options }, () => {
    alert("Saved, please refresh and try again.");
  });
});

document.getElementById("reset_button").addEventListener("click", () => {
  const options = {};
  keysWithDefault.forEach(([key, defaultValue]) => {
    options[key] = defaultValue;
    document.getElementById(key).value = defaultValue;
  });
  chrome.storage.sync.set({ options }, () => {
    alert("Reset.");
  });
});
