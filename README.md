# ⚡ Project Demo - React Application

A clean, modular, and scalable React application structure built with [Vite](https://vitejs.dev/) and modern React best practices.

---

## 📁 Folder Structure Explained

```
Project-demo/
├── public/                 # Static assets directly served by the server
│   └── favicon.svg         # App favicon
├── src/
│   ├── assets/             # Images, SVGs, static design assets
│   ├── components/         # Reusable UI components
│   │   ├── common/         # Generic reusable widgets (Button, Modal, Card)
│   │   │   └── Button.jsx
│   │   └── layout/         # Layout modules (Navbar, Footer, Sidebar)
│   │       ├── Navbar.jsx
│   │       ├── Navbar.css
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   ├── pages/              # Main screen views / page routes
│   │   ├── Home.jsx        # Landing / Dashboard page
│   │   ├── Home.css
│   │   ├── About.jsx       # Folder structure reference page
│   │   └── About.css
│   ├── hooks/              # Custom reusable React hooks
│   │   └── useFetch.js     # Data fetching hook
│   ├── context/            # React Context API for global state
│   │   └── ThemeContext.jsx # Light/Dark theme state
│   ├── services/           # API clients & backend communication
│   │   └── api.js          # Fetch/Axios API helper
│   ├── utils/              # Helper & utility functions
│   │   └── helpers.js      # Date formatting, truncate, etc.
│   ├── styles/             # Global styles and design tokens
│   │   ├── variables.css   # CSS variables for themes and colors
│   │   └── global.css      # CSS resets and typography
│   ├── App.jsx             # Main App layout & view switcher
│   ├── App.css
│   └── main.jsx            # Application DOM mount point
├── index.html              # Root HTML template
├── vite.config.js          # Vite configuration
├── package.json            # Node.js dependencies and run scripts
├── .env.example            # Sample environment variables
├── .gitignore              # Files ignored by Git (node_modules, dist, etc.)
└── README.md               # Project documentation
```

---

## 🚀 How to Run the Project (Epdi Run Panradhu)

### 1. Install Dependencies
Make sure you have [Node.js](https://nodejs.org/) installed. In the terminal, run:
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

### 3. Build for Production
```bash
npm run build
```

---

## 💡 Key Highlights

- **⚡ Fast Development**: Powered by Vite for instant Hot Module Replacement (HMR).
- **🎨 Dark & Light Mode**: Built-in dynamic theme switcher using React Context and CSS variables.
- **🧱 Modular Structure**: Easy to add new components, pages, hooks, or backend API integrations without clutter.
