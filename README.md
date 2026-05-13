<div align="center">

# Interview Khichuri API

**NestJS 11 + Drizzle ORM + Better-Auth starter template**

</div>

## Overview

Production-ready backend starter with PostgreSQL, Drizzle ORM, and Better-Auth for authentication. Built with NestJS 11, validated with Zod, and secured with rate limiting, Helmet, and strict CORS.

## Tech Stack

| Category | Choice |
|----------|--------|
| **Framework** | NestJS 11 (Express) |
| **Language** | TypeScript 5.7 (ES2023) |
| **Database** | PostgreSQL 16 via `postgres.js` |
| **ORM** | Drizzle ORM 0.45 + Drizzle Kit |
| **Auth** | Better-Auth 1.6 (email/password, Google, GitHub, GitLab OAuth) via `@thallesp/nestjs-better-auth` |
| **Validation** | Zod 4 + `nestjs-zod` (global validation pipe) |
| **Security** | Helmet, CORS (dynamic origin), rate limiting (60 req/min) |
| **Email** | Resend |
| **API Versioning** | URI-based (`/api/v1/...`) |
| **Code Quality** | Ultracite (ESLint 9 + Prettier + Stylelint) |
| **Testing** | Jest (unit) + Supertest (e2e) |

## Prerequisites

- Node.js >= 20
- Docker & Docker Compose (for PostgreSQL)
- npm

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env .env.local

# 3. Start PostgreSQL
docker compose -f docker-compose.dev.yml up -d

# 4. Push database schema
npm run db:push

# 5. Run migrations
npm run db:migrate

# 6. Start development server
npm run start:dev
```

Server starts at `http://localhost:3000`.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run start:dev` | Start in watch mode |
| `npm run build` | Compile to `dist/` |
| `npm run start:prod` | Start production build |
| `npm run db:generate` | Generate Drizzle migrations |
| `npm run db:migrate` | Apply migrations |
| `npm run db:push` | Push schema directly (dev) |
| `npm run db:studio` | Open Drizzle Studio |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run e2e tests |
| `npm run lint` | Lint with ESLint |
| `npm run check` | Ultracite check |

## Project Structure

```
src/
├── main.ts                          # App bootstrap (CORS, Helmet, versioning)
├── app.module.ts                    # Root module with global pipe/guard/interceptor
├── config/
│   ├── utils/
│   │   ├── cors.config.ts           # Dynamic CORS origin validation
│   │   └── env.schema.ts            # Zod env validation
│   ├── pipes/
│   │   └── zod.pipe.ts              # Custom Zod validation pipe
│   ├── guards/
│   │   └── application.guard.ts     # Base application guard
│   └── interceptors/
│       └── response.interceptor.ts  # Unified API response wrapper
├── database/
│   ├── database.module.ts           # Global Drizzle + Postgres module
│   ├── database.service.ts          # Database service (injectable)
│   ├── database.constants.ts        # DI token constants
│   └── postgres/
│       ├── schemas/
│       │   ├── index.ts             # Schema barrel export
│       │   └── auth.schema.ts       # User, session, account, verification tables
│       └── migrations/              # Auto-generated SQL migrations
├── better-auth/
│   └── better-auth.module.ts        # Better-Auth configuration
└── health/
    ├── health.module.ts
    ├── health.controller.ts         # GET /health, GET /health/public
    └── health.types.ts
```

## Database Schema

Better-Auth compatible tables (PostgreSQL):

- **`user`** — id, name, email, emailVerified, image, timestamps
- **`session`** — session management with token, expiry, IP, user agent
- **`account`** — OAuth providers & password accounts (supports Google, GitHub, GitLab)
- **`verification`** — email verification flow

## API Endpoints

| Endpoint | Auth | Description |
|----------|------|-------------|
| `GET /api/v1/health` | Required | Health check (incl. DB ping) |
| `GET /api/v1/health/public` | Public | Unauthenticated health check |

Better-Auth endpoints are auto-registered under Better-Auth's default routes.

## Environment Variables

Key variables (see `.env` for full list):

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `BETTER_AUTH_SECRET` | Better-Auth secret key |
| `BETTER_AUTH_URL` | Auth URL (e.g. `http://localhost:3000`) |
| `RESEND_API_KEY` | Resend email API key |
| `GOOGLE_CLIENT_*` | Google OAuth credentials |
| `GITHUB_CLIENT_*` | GitHub OAuth credentials |
| `GITLAB_CLIENT_*` | GitLab OAuth credentials |

## Code Quality

This project uses **Ultracite** (ESLint 9 + Prettier + Stylelint) with strict rules.

```bash
npm run check    # Check for issues
npm run fix      # Auto-fix issues
npm run lint     # ESLint with auto-fix
```

## License

MIT
