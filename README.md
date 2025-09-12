<p align="center">
  <img src="./public/logo.png" alt="GroupVoyage Logo" width="150"/>
</p>

# 🌍 GroupVoyage

> GroupVoyage connects you with like-minded travelers from your city, making weekend getaways effortless and exciting. Explore a curated list of local and city-specific travel groups, compare trip prices, and find the perfect adventure that fits your budget.

---

## 🚀 Tech Stack

- **Frontend**: Next.js 15 + React 19 (latest concurrent features)
- **UI Components**: Tailwind CSS + shadcn/ui + Radix primitives
- **Backend**: Node.js (Bun runtime) + Prisma ORM
- **Database**: PostgreSQL
- **Hosting**: Vercel
- **Linting & Formatting**: ESLint, Prettier

---

## 📂 Project Structure

```bash
.
├── prisma/          # Prisma schema & generated client
├── public/          # Static assets
├── src/
│   ├── actions/     # Server actions
│   ├── app/         # Next.js app router pages
│   ├── components/  # Reusable UI + feature-specific components
│   ├── hooks/       # Custom React hooks
│   └── lib/         # Helpers, constants, db client, utils
└── ...

```

# Quick Start (local)

1. Clone

```bash
git clone https://github.com/harshmangalam/groupvoyage.git
cd groupvoyage
```

2. Install

```bash
pnpm install
```

3. Copy env

```bash
cp .env.example .env
```

4. Prisma generate , migrations and seed

```bash
pnpm prisma generate
pnpm prisma migrate dev
pnpm prisma db seed

```

5. Run dev server

```bash
pnpm dev

```

### 🤝 Contributing

We welcome contributions of all kinds! 🎉

- 📖 [Contributing Guide](/CONTRIBUTING.md)
- 🤝 [Code of Conduct](/CODE_OF_CONDUCT.md)
- 📜 [MIT License](/LICENSE)
