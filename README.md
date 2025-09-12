# 🌍 Project Name

> A modern full-stack web application built with **Next.js 15 (React 19)**, **Prisma**, **Tailwind CSS**, **shadcn/ui**, and deployed on **Vercel**.
>
> The platform helps users **explore trips, destinations, groups, categories, and Instagram profiles** — with filtering, comparisons, and booking experiences.

---

## 🚀 Tech Stack

- **Frontend**: Next.js 14 + React 19 (latest concurrent features)
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

3. Create .env

```bash
cp .env.example .env
```

4. Prisma generate & migrations

```bash
pnpm prisma generate
pnpm prisma migrate dev

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
