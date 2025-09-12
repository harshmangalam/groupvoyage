# Contributing Guide

🎉 Thanks for your interest in contributing!  
We welcome contributions of all kinds — bug fixes, new features, documentation, or design improvements.

---

## 📌 How to Contribute

### Fork & Clone

- Fork the repository to your GitHub account.
- Clone your fork locally:

  ```bash
  git clone https://github.com/harshmangalam/groupvoyage.git
  cd groupvoyage

  ```

### Install

```bash
pnpm install
```

### Copy .env

```bash
cp .env.example .env
```

### Prisma generate, migrations and seed

```bash
pnpm prisma generate
pnpm prisma migrate dev
pnpm prisma db seed

```

### Run dev server

```bash
pnpm dev

```

### Commit Your Changes

Use [conventional commits](https://www.conventionalcommits.org/)
for consistency:

```bash
git commit -m "feat: add new trip filtering by price"
```

### Push & Submit PR

```bash
git push origin feature/your-feature-name

```

Open a Pull Request to the main repo.

Clearly describe your changes, why they’re needed, and screenshots if applicable.

### ✅ Contribution Guidelines

- Keep PRs small and focused.
- Update documentation if your change impacts usage.
- Be respectful in discussions — this is a collaborative community.
- Ensure your code passes linting & builds successfully before PR.

### 💡 Need Help?

- If you’re unsure where to start:
- Look for issues labeled good first issue or help wanted.
- Open a discussion if you want feedback before coding.
- Reach out by creating an issue if you’re stuck.
