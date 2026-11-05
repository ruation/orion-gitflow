# Git & Gitflow Workflow Demonstration

This repository contains a mock project created to demonstrate the practical application of the **Gitflow** branching strategy, semantic commit standardization, and code review processes via Pull Requests.

## 🌿 Branching Structure

The repository follows an extended Gitflow model incorporating a staging environment:

* **`main`**: Production-ready branch containing stable, live releases.
* **`stage`**: Pre-production (staging) branch used for final integration testing, QA validation, and release preparation before merging into `main`.
* **`develop`**: Integration branch for ongoing development and upcoming features.
* **`feature/*`**: Topic branches created from `develop` to implement isolated new functionalities (e.g., `feature/user-validation`).

## 📝 Commit Standards

All commits in this repository follow the [Conventional Commits](https://www.conventionalcommits.org/) specification to ensure a clean, readable, and semantic history:

* `feat:` A new feature implementation
* `fix:` A bug fix
* `docs:` Documentation updates
* `chore:` Project setup, configuration, or maintenance tasks

## 🔄 Pull Request & Release Workflow

1. Create a new `feature/*` branch off `develop`.
2. Implement changes using atomic, standardized commits.
3. Open a Pull Request targeting the `develop` branch and assign the mentor (daniela) as the code reviewer.
4. Once approved and merged into `develop`, changes are promoted to `stage` for pre-production validation before the final release to `main`.