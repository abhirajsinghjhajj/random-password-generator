# Password Generator

A **vanilla JavaScript** web application for generating secure, customizable passwords. Built with plain HTML, CSS, and JavaScript—no frameworks or build tools required.

---
## 🌐 Live Preview

🔗 **[Click here for preview](https://cozy-kashata-2f8bc9.netlify.app/)**

## Features

- Select password length via slider  
- Include lowercase letters, uppercase letters, numbers, and/or symbols  
- Generate a new password by clicking the button or pressing `Ctrl+Enter` / `⌘+Enter`  
- Copy the generated password to clipboard with visual feedback  
- Real-time error messages when no character types are selected or when there’s no password to copy  
- Responsive design for both mobile and desktop

## Table of Contents

1. [Demo](#demo)  
2. [Getting Started](#getting-started)  
   1. [Prerequisites](#prerequisites)  
   2. [Installation](#installation)  
3. [Usage](#usage)  
4. [Project Structure](#project-structure)  
5. [How It Works](#how-it-works)  
6. [Customization](#customization)  
7. [License](#license)

## Demo

*Add a live demo link or screenshot here.*

## Getting Started

### Prerequisites

- A modern web browser with JavaScript enabled

### Installation

1. Clone or download the repository.  
2. Open `index.html` in your browser.

## Usage

1. Move the **Length** slider to set the desired password length (minimum 4, maximum 64).  
2. Check one or more of the character-type checkboxes (lowercase, uppercase, numbers, symbols).  
3. Click **Generate Password** or press **Ctrl+Enter** (Windows/Linux) or **⌘+Enter** (Mac) to generate.  
4. Click **Copy** to copy the password to your clipboard.

## Project Structure
```
├── index.html # Main HTML template; loads CSS & JS
├── style.css # Styles: variables, layout, theming, responsiveness
└── index.js # Core logic: DOM handling, password generation, clipboard
```


- **index.html**  
  - Defines the page structure: header, slider input, checkboxes, buttons, and result display  
  - Includes links to `style.css` and `index.js`

- **style.css**  
  - CSS variables for primary colors, success, danger, typography, and layout  
  - Styles for header, container, form controls, buttons, error messages, and mobile responsiveness

- **index.js**  
  - Defines character sets (`lowercase`, `uppercase`, `numbers`, `symbols`)  
  - Attaches event listeners for slider input, button clicks, and keyboard shortcuts  
  - Implements `generatePassword()` to build a random password from selected sets  
  - Implements `copyToClipboard()` with feedback and fallback for older browsers  
  - Shows or hides error messages via `showError()` and `hideError()`

## How It Works

1. On DOMContentLoaded, event listeners are bound to controls.  
2. **generatePassword()**:  
   - Reads slider value for length  
   - Builds a combined character set based on checked options  
   - Validates at least one set is selected; shows an error otherwise  
   - Randomly selects characters to construct the password  
   - Displays the result in the password field  

3. **copyToClipboard()**:  
   - Uses the modern Clipboard API if available; otherwise uses `document.execCommand('copy')`  
   - Provides visual feedback (“✓ Copied!”) for 2 seconds  
   - Displays an error if there is no password to copy  

4. Real-time updates:  
   - Slider value is shown next to the slider  
   - Initial password is generated on load

## Customization

- **Character Sets**: Modify the `CHARACTER_SETS` object in `index.js` to add or remove symbols or other characters.  
- **Theme Colors**: Adjust CSS variables in `style.css` (e.g., `--primary`, `--danger`, `--success`) to change the look and feel.  
- **Password Length Range**: Change the `min` and `max` attributes on the `<input type="range">` in `index.html` to allow different lengths.  
- **Keyboard Shortcuts**: Edit or remove the `keydown` listener in `index.js` to customize shortcuts.

## Author
- Abhiraj Singh Jhajj
