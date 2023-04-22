# Better Comment

Better Comment is a Chrome extension that analyzes your comments as you write them on GitHub to make sure they're not offensive and won't hurt the recipient's feelings. It uses OpenAI's API to analyze your comments and suggest improved wording.

## How to install

1. clone this repository to your local computer.

    ```bash
   git clone https://github.com/paperspoon/better-comment.git
    ```

2. In the Chrome browser, navigate to `chrome://extensions/`.

3. Activate the "Developer Mode" toggle in the top right corner.

4. Click the top left "Load unpacked" button, and select the directory of the repository you cloned.

## How to use

1. Once the extension is installed, you'll see a new icon in the Chrome Extension Icons area.

2. on a GitHub page, type in the text area to make a comment and when the focus leaves the form (onBlur), the comment is analyzed and the improved wording is displayed.

## Setup

1. To use an OpenAI API key, obtain an API key from the address below.
   https://platform.openai.com/

2. click the extension icon, enter the API key in the pop-up window, and click the Save button.

3. You can change the prompt or modify other options as needed.

## TODO

- [ ] Provide the option to write prompts with code (Likely consume a lot of tokens?)

## Contribute

To contribute to the project, fork this repository, commit your changes, and create a pull request. After the pull request is reviewed, your contribution may be added to the project.

## License

This project is licensed under the [MIT License](LICENSE).
