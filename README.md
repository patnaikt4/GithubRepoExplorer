# GitHub Repo Explorer

A simple React + Next.js web app that allows users to search for a GitHub username and view their public repositories. It was built to practice using external APIs, working with JSON data, and rendering it in a clean, responsive UI using Tailwind CSS.

## 🧠 Purpose

This project was created to:
- Practice calling public APIs using `fetch`
- Work with React state and event handling
- Learn how to map and display real-time data
- Explore GitHub's REST API
- Use Tailwind CSS for fast, utility-based styling

## 🌐 Live Demo

[https://github-repo-explorer-sigma.vercel.app/](https://github-repo-explorer-sigma.vercel.app/)

## 🛠️ Built With

- [Next.js 14 (App Router)](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GitHub REST API](https://docs.github.com/en/rest)
- Deployed on [Vercel](https://vercel.com/)

## 🚀 Features

- Enter a GitHub username and fetch public repositories
- Display name, description, star count, and fork count
- Clickable links to view the repositories on GitHub
- Responsive layout using Tailwind
- Clean error handling and simple form UX

## 📦 How to Run Locally

1. **Clone the repository**
```bash
git clone https://github.com/your-username/github-repo-explorer.git
cd github-repo-explorer
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. Open your browser and go to `http://localhost:3000`

## 🧪 API Reference

This project uses the following endpoint from GitHub’s REST API:

```
GET https://api.github.com/users/{username}/repos
```

Returns a list of public repositories for the specified GitHub user.

## 📸 Screenshots

_Add screenshots here if you'd like. Example:_

![App Screenshot](./screenshot.png)

## 📝 License

This project is for educational/demo use only. No affiliation with GitHub.

## 👤 Author

Built by [Your Name](https://github.com/your-username)

If you found this useful, feel free to ⭐ the repo or fork it!
