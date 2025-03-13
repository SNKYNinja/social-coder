# 🚀 Social Coder

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/SNKYNinja/social-coder?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/SNKYNinja/social-coder?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/SNKYNinja/social-coder?style=for-the-badge)
![GitHub license](https://img.shields.io/github/license/SNKYNinja/social-coder?style=for-the-badge)
![npm version](https://img.shields.io/npm/v/social-coder?style=for-the-badge)

A lightweight CLI tool for generating daily coding challenge posts

<img src="https://via.placeholder.com/800x450" alt="Social Coder Demo" />

_Showcase video goes here_

</div>

## 📋 Quick Links

- [Installation](#-installation)
- [Requirements](#-requirements)
- [Features](#-features)
- [Creating Templates](#-creating-templates)
- [Creating Posts](#-creating-posts)
- [Setting Starting Day](#-setting-starting-day)
- [Managing Templates](#-managing-templates)

## 📥 Installation

You can install Social Coder globally using npm:

```bash
npm install -g social-coder
```

Or using yarn:

```bash
yarn global add social-coder
```

## 🔧 Requirements

- Node.js (v14.0.0 or higher)
- npm or yarn package manager

## ✨ Features

- Generate consistent coding challenge posts with custom templates
- Track your daily coding challenge progress
- Easily manage multiple templates
- Automatic day counting from your start date
- Cross-platform support (Windows, macOS, Linux)

## 📝 Creating Templates

Templates are the backbone of Social Coder. They define how your posts will look and use placeholders that get replaced with your content.

### Templates Folder Location

Templates are stored in:

- **Windows**: `%APPDATA%\social-coder\templates`
- **macOS/Linux**: `~/.config/social-coder/templates`

### Template Format

Templates are simple `.txt` files with placeholders in curly braces `{placeholder}`:

<table>
<tr>
<th>Template File (example.txt)</th>
<th>Result After Filling</th>
</tr>
<tr>
<td>

```
Day {day} of #100DaysOfCode

🧩 Problem: {name}
📊 Platform: {platform}
💡 Insight: {insight}

#coding #programming #{platform}
```

</td>
<td>

```
Day 42 of #100DaysOfCode

🧩 Problem: Two Sum
📊 Platform: LeetCode
💡 Insight: Used a hashmap for O(n) time complexity!

#coding #programming #LeetCode
```

</td>
</tr>
</table>

### Creating a New Template

1. Navigate to the templates folder
2. Create a new `.txt` file (e.g., `my_template.txt`)
3. Add your template content with placeholders:
    - `{day}` - Current day (calculated automatically)
    - `{name}` - Problem title (entered by user)
    - `{platform}` - Platform name (selected by user)
    - `{insight}` - Your insights (entered by user)

## 📱 Creating Posts

Creating a post is simple with the interactive CLI:

1. Run `social-coder` in your terminal
2. Select "Create Post" from the menu
3. Choose a template
4. Enter the problem title
5. Select the platform from the available options
6. Add your insights
7. The formatted post will be copied to your clipboard!

<div align="center">
<img src="https://via.placeholder.com/700x400" alt="Creating Post Demo" />
</div>

## 📅 Setting Starting Day

You can customize which day you're on in your coding journey:

1. Run `social-coder`
2. Select "Set Starting Day"
3. Enter your starting day number
4. The tool will automatically calculate future days based on the current date

<div align="center">
<img src="https://via.placeholder.com/700x400" alt="Setting Day Demo" />
</div>

## 🗂️ Managing Templates

Social Coder provides tools to manage your templates:

1. Run `social-coder`
2. Select "Manage Templates"
3. Choose to:
    - Preview a template - See how a template looks before using it
    - Open templates folder - Directly access your templates for editing

<div align="center">
<img src="https://via.placeholder.com/700x400" alt="Managing Templates Demo" />
</div>

## 🧩 Command Line Options

| Option          | Description                                 |
| --------------- | ------------------------------------------- |
| `-v, --version` | Display the current version of Social Coder |

## 📚 Examples

### Example Template for Twitter

```
Day {day}/100 #100DaysOfCode

Today I solved the {name} problem on {platform}.

Key insight: {insight}

#coding #programming #{platform}
```

### Example Template for LinkedIn

```
#Day{day} of #100DaysOfCode

Today I tackled the "{name}" problem on {platform}.

💡 What I learned:
{insight}

#coding #techjobs #programming #{platform}
```

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Built with [Clack](https://github.com/natemoo-re/clack) for beautiful CLI interfaces
- Special thanks to all contributors and users of Social Coder
