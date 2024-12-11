# Social Coder CLI

Social Coder is a Command-Line Interface (CLI) tool that helps you create templates for coding challenges with ease. Whether you're sharing your progress on LinkedIn or Twitter, Social Coder provides customizable templates for your posts.

## Features

- **Set Challenge Day**: Update the current day of your coding challenge.
- **Add Questions**: Add details about the coding challenge questions, including title, platform, and key insights.
- **Generate Templates**: Create social media-friendly templates for LinkedIn and Twitter.
- **Copy to Clipboard**: Quickly copy the generated post to your clipboard for easy sharing.

## Installation

Ensure you have Node.js installed on your system, then install Social Coder globally:

```bash
npm install -g social-coder
```

## Usage

Run the CLI tool using the following command:

```bash
social-coder
```

### Follow the interactive prompts to:

- Set the current day of your coding challenge.

- Add questions with details about your challenge.

- Generate and copy a social media post template.

### Example Workflow
- Set the Challenge Day:
    - Enter the day number for your coding challenge.
- Add Questions:
    - Provide a title, platform (e.g. LeetCode, Codeforces), and key insights for your challenge question.
- Generate Post:
    - Select questions and choose a social media platform (LinkedIn or Twitter).
    - Preview or copy the generated post to your clipboard.
- Share Your Progress:
    - Paste the generated template into your preferred social media platform and share your journey!

## Example Usage

### LinkedIn Template:
```text
🚀 Day 1/100 – #DrGViswanathan Coding Challenge ✅

📚 Problem 1: Two Sum
🌐 Platform: LeetCode
🌟 Key Insight: Use a hash map for efficient lookups.

💻 #TeamSentinels #100DaysOfCode #DrGViswanathan #VITBhopal #VITBhopalLion #LeetCode
```

### Twitter Template:
```text
🚀 Day 1 – LeetCode Grind – Coding Challenge ✅

📚 Problem 1: Two Sum
🌐 Platform: LeetCode
🌟 Key Insight: Use a hash map for efficient lookups.

💻 #100DaysOfCode #LeetCode #JobHunt #CodingJourney #DevLife
```

## Development
### Prerequisites
- Node.js (v14 or higher)

### Clone the Repository
```bash
git clone https://github.com/your-username/social-coder.git
cd social-coder
```

### Install the Dependencies
```bash
npm install
```

### Run Locally
```bash
npm start
```

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE.md) file for details.

## Contributions
Contributions are welcome! If you have ideas or suggestions, feel free to submit a pull request or open an issue.

Check out the [Contributions](./CONTRIBUTING.md) page for more information.

## Acknowledgments
- Built using [@clack/prompts](https://github.com/bombshell-dev/clack), [picocolors](https://github.com/alexeyraspopov/picocolors), and [clipboardy](https://github.com/sindresorhus/clipboardy).