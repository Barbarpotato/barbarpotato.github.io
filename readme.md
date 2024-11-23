# Personal Website with React, Vite, and Chakra UI

This repository contains the source code for my personal website, built using React, Vite, and Chakra UI. The website showcases my portfolio, projects, and other relevant information about me.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast frontend build tool that significantly improves the frontend development experience.
- **Chakra UI**: A simple, modular, and accessible component library that provides building blocks for faster development.
- **GitHub Actions**: CI/CD workflow automation tool provided by GitHub.
- **GitHub Pages**: A feature provided by GitHub that allows hosting of static websites directly from a GitHub repository.

## CI/CD Workflow

This repository is set up with a CI/CD workflow using GitHub Actions. The workflow performs the following steps:

1. **Build**: Builds the React application using Vite.
3. **Deploy**: Deploys the built application to GitHub Pages.

The workflow is triggered on every push to the `main` branch, ensuring that any changes made to the website are automatically deployed.

## Deployment

The website is automatically deployed to GitHub Pages using the `gh-pages` branch. Once the CI/CD workflow completes successfully, the changes are pushed to the `gh-pages` branch, and GitHub Pages serves the updated content.