# 🎲 Tenzies Game

A fun and addictive dice game built **purely in React** using functional components and React Hooks.

Play it here 👉 [Tenzies Game Live Demo](https://sharmasagarr.github.io/tanziesGame/)

## 📌 What is Tenzies?

Tenzies is a simple game where the objective is to roll dice until all of them show the same number.  
You can hold (lock) dice to keep their values between rolls. The game ends when all dice are held and have the same number.

## 🚀 Features

- ✅ Built completely with **React Hooks**
- 🎯 Hold/unhold dice to lock in your strategy
- 🎲 New random values on unheld dice rolls
- 🏆 Win detection and celebration
- 🌐 Deployed using GitHub Pages

## ⚙️ Tech Stack

- **React** (with `useState`, `useEffect`, `useRef`)
- **Vite**
- **CSS** for styling
- **GitHub Pages** for deployment

## 📁 Folder Structure

```
tenziesGame/
├── src/
|   ├── assets/
|   |   ├── Screenshot 2025-04-06 124300.png
|   |   └── Screenshot 2025-04-06 124350.png
│   ├── components/
│   │   └── Die.jsx
│   ├── App.css
|   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

## 📸 Screenshots

![Game Screenshot](.src/assets/Screenshot 2025-04-06 124350.png)


## 🛠️ Installation & Setup

```bash
git clone https://github.com/sharmasagarr/tanziesGame.git/
cd tanziesGame
npm install
npm run dev      # or `npm start` if using Create React App
```

## 🚀 Deployment

This project is deployed via **GitHub Pages**.

```bash
npm run build
npm run deploy   # if using gh-pages package
```

Live at 👉 [https://sharmasagarr.github.io/tanziesGame](https://sharmasagarr.github.io/tanziesGame/)

## 🙌 Credits

Inspired by the game from the Scrimba React course.  
Developed by **[Sagar Sharma](https://github.com/sharmasagarr)**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

