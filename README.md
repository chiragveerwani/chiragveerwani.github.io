# My GitHub Pages Site

A simple personal website with blog links, built with React, Vite, and Tailwind CSS.

## 🚀 Deploy to GitHub Pages

### Step 1: Push to Your Repository

1. Clone or initialize this repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Add your GitHub repository as remote:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. The site will automatically deploy when you push to the main branch

### Step 3: Customize Your Content

Edit `/src/app/App.tsx` to update:
- Your name in the header
- Your bio/description
- Blog post titles and links

## 🛠️ Local Development

To run this project locally:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

## 📝 Notes

- Your site will be available at `https://YOUR-USERNAME.github.io`
- Changes pushed to the main branch will automatically deploy
- The GitHub Action workflow is configured in `.github/workflows/deploy.yml`

## 🎨 Customization

The site features:
- Pastel light blue background (#D6E8F5)
- Animated typing effect on the header
- Simple, clean blog link list
- Fully responsive design
