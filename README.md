# Vikatakavi - Reliable Car Rentals 🚗

A fast, lightweight, and approachable car rental advertisement website tailored for the Tamil Nadu market. Showcasing popular Indian cars like the Maruti Suzuki Dzire, Toyota Etios, and Toyota Innova Crysta.

## 🌟 Features

- **Component-Based Architecture**: Built using pure Vanilla JavaScript template literals for easy maintainability without heavy frameworks.
- **Centralized Content**: All text, vehicle configurations, and contact information are isolated in a single data file (`src/data/content.js`). Updating the website's content requires zero HTML or CSS changes.
- **Responsive Design**: Flawlessly adapts to desktop and mobile screens.
- **Booking Modal**: Lightweight, custom-built modal form for capturing rental leads.
- **Automated Deployment**: One-command deployment to GitHub Pages.

## 🛠️ Technology Stack

- **HTML5 & CSS3**
- **Vanilla JavaScript (ES6 Modules)**
- **[Vite](https://vitejs.dev/)**: For lightning-fast local development and highly optimized production builds.

## 📁 Directory Structure

```text
vikatakavi/
├── src/
│   ├── assets/        # Auto-optimized images (Dzire, Etios, Innova)
│   ├── components/    # Reusable UI parts (Navbar, Hero, Fleet, Footer, etc.)
│   ├── css/           # Global stylesheets
│   ├── data/          # content.js - The single source of truth for site data
│   └── js/            # main.js - The application entry point
├── index.html         # Application shell structure
├── package.json       # Dependencies and run scripts
└── vite.config.js     # Build configurations (base paths)
```

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository and navigate to the directory:
   ```bash
   git clone https://github.com/GlitchBitster/vikatakavi-site.git
   cd vikatakavi-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

## 📝 How to Update Site Content

To change prices, text, or fleet details, you **do not** need to edit the HTML files. 

1. Open `src/data/content.js`.
2. Edit the corresponding JavaScript object (e.g., Update `contact.info` to change the phone number).
3. Save the file. The site will automatically update.

## 🌐 Deployment to GitHub Pages

The project is configured to easily deploy directly to the `gh-pages` branch.

To build the project and publish the changes live in one step:
```bash
npm run deploy
```
*Note: Make sure your `vite.config.js` base path matches your GitHub repository name.*
