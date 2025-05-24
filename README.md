# Arpan Nyati Portfolio

This is a personal portfolio website built with React and Tailwind CSS.<br>
[Link to Portfolio Website](https://arpan-ny.github.io/)

## 🚀 Getting Started

### 1. Clone the Repository

```
git clone https://github.com/arpan-ny/arpan-ny.github.io.git
cd <your-repo-name>
```
Make sure the repo name is `<your-username>.github.io`

---

### 2. Install Dependencies

```
npm install
```

### 3. Run Locally

```
npm start
```

The app will be available at `http://localhost:3000` (or the port shown in your terminal).

---

## 🚢 Deploying to GitHub Pages

This project is set up to deploy to GitHub Pages using the `gh-pages` branch.

### 1. Update `package.json`

- Set the `homepage` field to:
  
  ```json
  "homepage": "https://<your-username>.github.io"
  ```

### 2. Add Deployment Scripts

Add these scripts to your `package.json` if not already present:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### 3. Install `gh-pages`

```
npm install --save-dev gh-pages
```

### 4. Deploy

```
npm run deploy
```

This will build the app and push the production-ready files to the `gh-pages` branch. Your site will be live at the URL specified in the `homepage` field.

---

## 📝 Notes
- Make sure your repo is public for GitHub Pages to work.
- If you use custom domains, configure them in your repo settings and add a `CNAME` file to the `public/` directory.
- For routing to work correctly, use `HashRouter` or configure your server to redirect all requests to `index.html`.

---

## 📄 License
MIT
