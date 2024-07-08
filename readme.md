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
2. **Test**: Runs any defined tests to ensure the application behaves as expected.
3. **Deploy**: Deploys the built application to GitHub Pages.

The workflow is triggered on every push to the `main` branch, ensuring that any changes made to the website are automatically deployed.

## Deployment

The website is automatically deployed to GitHub Pages using the `gh-pages` branch. Once the CI/CD workflow completes successfully, the changes are pushed to the `gh-pages` branch, and GitHub Pages serves the updated content.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the GNU General Public License v3.0 (GPLv3).

**Important:** Users are only allowed to use this software according to the terms outlined in the license. Modifications or derivatives of this software are not permitted.

For more information about the GNU General Public License v3.0 (GPLv3), please refer to the [full license text](https://www.gnu.org/licenses/gpl-3.0.html).