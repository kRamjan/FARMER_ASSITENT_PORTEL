AgriSens — Web app and ML projects

This repository contains the AgriSens web app and related ML projects (crop recommendation and plant disease identification).

Quick start (local development)

Requirements
- Node.js (14+ recommended)
- npm
- MongoDB (local or Atlas) running; default connection used by the app: mongodb://localhost:27017/agrisens

Install and run
```powershell
# from repository root
npm install
# start server
npm start
# development with auto-reload (requires nodemon)
npm run dev
```

App URLs (when server runs on http://localhost:3000)
- Landing page: http://localhost:3000/
- Login: http://localhost:3000/login
- Signup: http://localhost:3000/signup
- App entry (requires login): http://localhost:3000/index

Create a GitHub repo and push (two options)

Option A — using GitHub website
1. Create a new empty repository on GitHub (no README, no .gitignore, no license).
2. In your local repo root run:
```powershell
git init
git add .
git commit -m "Initial commit - AgriSens"
# add your GitHub remote (replace <YOUR_USERNAME> and <REPO_NAME>)
git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
git branch -M main
git push -u origin main
```

Option B — using GitHub CLI (gh)
```powershell
# login first if not already
gh auth login
# create repo (private by default, add --public to make public)
gh repo create <YOUR_USERNAME>/<REPO_NAME> --confirm --public
# push
git init
git add .
git commit -m "Initial commit - AgriSens"
git branch -M main
git push -u origin main
```

Notes for deployment
- If you want to host this app online, you'll need to provide a MongoDB instance (MongoDB Atlas or a VM) and an environment variable for the DB connection string. Currently the server connects to mongodb://localhost:27017/agrisens.
- For production logging and session persistence use a dedicated session store (e.g., connect-mongo) and set session secret via environment variables.

If you'd like, I can:
- Create the Git repository here (local only) and make the initial commit for you.
- Attempt to create a GitHub repository using the GitHub CLI (`gh`) if you want me to run the commands here (I'll prompt before any network action).
- Add a simple GitHub Actions workflow for Node.js tests or deployment.

Tell me which of the above you'd like me to do next (create repo locally, push via gh, or add CI).
