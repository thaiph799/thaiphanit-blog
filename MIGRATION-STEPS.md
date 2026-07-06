# Migration Steps — Thai Phan IT Professional Structure

## 1. Create a safety branch

```bash
git checkout main
git pull origin main
git checkout -b feature/network-infrastructure-portfolio
```

## 2. Copy the files from this package into the repo root

Replace these files:

```text
docusaurus.config.ts
sidebars.ts
src/pages/index.tsx
src/pages/about.tsx
src/pages/resume.tsx
src/pages/contact.tsx
src/pages/recruiters.tsx
src/css/custom.css
blog/tags.yml
README.md
```

Add the new `docs/network`, `docs/career`, and placeholder portfolio files from this package.

## 3. Remove default Docusaurus tutorial content

If these exist, remove them:

```bash
git rm -r docs/tutorial-basics docs/tutorial-extras
git rm docs/intro.md
```

If the files do not exist, ignore the errors.

## 4. Remove duplicate blog copy files

Example:

```bash
git rm "blog/2026-07-05-starting-my-microsoft-365-portfolio - Copy.md"
```

## 5. Test locally

```bash
npm install
npm run build
npm run start
```

## 6. Commit and push

```bash
git add .
git commit -m "Restructure portfolio with network and infrastructure tracks"
git push origin feature/network-infrastructure-portfolio
```

Open a pull request or merge into `main` after local build succeeds.
