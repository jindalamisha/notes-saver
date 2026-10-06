# Notes Saver App 📝

A sleek, responsive web application built with React, Redux Toolkit, and Tailwind CSS that allows users to create, view, edit, search, and manage their personal notes seamlessly.

---

## 🚀 Features

* **Create & Edit Notes:** Easily draft new notes or update existing ones with a title and rich content.
* **Global State Management:** Powered by Redux Toolkit for efficient and predictable state handling.
* **Search Functionality:** Filter through your saved notes instantly using a live search bar.
* **Copy & Share:** Quickly copy note content to your clipboard or share notes with a single click.
* **Persistent Storage:** Keeps your notes saved locally so you never lose your thoughts on page refresh.
* **Modern UI:** Clean, minimalist design styled with Tailwind CSS for optimal user experience across desktop and mobile devices.

---

## 🛠️ Tech Stack

* **Frontend Framework:** [React](https://react.dev/) (via [Vite](https://vitejs.dev/))
* **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) & `react-redux`
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
* **Icons / UI Utils:** `lucide-react` / `react-hot-toast` (or equivalent notification libraries)

---

## 📂 Project Structure

```text
saver-app/
├── public/
└── src/
    ├── assets/       # Static assets (images, icons)
    ├── components/   # Reusable UI components (Navbar, Home, Paste, ViewPaste, etc.)
    ├── redux/        # Redux store configuration and slices
    ├── App.css       # App-wide styles
    ├── App.jsx       # Main routing & application wrapper
    ├── index.css     # Tailwind directives & base styles
    ├── main.jsx      # React entry point
    └── store.js      # Redux store setup
