# Web Drug Twinn - TB Therapy Monitoring App TODO

## Approved Plan Steps (Next.js + Neon + Vercel + AI Alerts)

### Phase 1: Project Setup (Next.js + Tailwind + Shadcn)
- [ ] Create package.json with deps (next, react, typescript, tailwind, drizzle-orm, neon, lucide-react, etc.)
- [ ] Create tsconfig.json, next.config.js, tailwind.config.js
- [ ] Create app/layout.tsx, app/page.tsx, styles/globals.css
- [ ] Create components/ui/ basic shadcn components (button, card, input, etc.)
- [ ] Run `npm install` and `npm run dev` to test

### Phase 2: Database Schema (Neon Postgres + Drizzle)
- [ ] Create lib/db.ts (Neon connection + Drizzle config)
- [ ] Create schema files: users, patients, treatments, medications, alerts, schedules
- [ ] Setup migrations with drizzle-kit

### Phase 3: Auth & Roles
- [ ] Setup Auth.js (app/api/auth/[...nextauth]/route.ts)
- [ ] Role-based middleware (patient/nurse/admin/doctor)

### Phase 4: Core Features
- [ ] Patient dashboard + TB clinical data forms
- [ ] Medication schedules + reminders (cron)
- [ ] AI alerts processing (OpenAI integration)
- [ ] Real-time alarms (WebSockets/Pusher)

### Phase 5: Deployment
- [ ] Setup .env.local + vercel env vars
- [ ] Deploy to Vercel
- [ ] Connect Neon DB
- [ ] Run migrations

**Current Progress: Phase 1 starting**

