
# Masters' Union CRM — Starter Project (MERN + PostgreSQL)

This repository is a **scaffolded, production-ready starter** for the Masters' Union CRM assessment. It contains:
- Backend: Node.js + Express + Sequelize (PostgreSQL)
- Frontend: React + Redux Toolkit (minimal UI)
- Real-time: Socket.io scaffold (backend + frontend)
- Auth: JWT + bcrypt
- Docker: docker-compose for local Postgres + backend + frontend
- Basic test: Jest (backend) example for leads module

**What you get in this ZIP:** a ready-to-run codebase scaffold. Implementations are intentionally concise and well-documented so you can extend features (lead activities, email triggers, analytics, etc.) quickly.

## Quick start (development)

1. Copy `.env.example` to `.env` in the backend folder and set values.
2. Start Postgres + backend + frontend with Docker:
   ```bash
   docker-compose up --build
   ```
3. Backend runs on `http://localhost:5000` and frontend on `http://localhost:3000`

## Project layout (high level)
- backend/               Express app, Sequelize models, routes, controllers
- frontend/              React app with Redux Toolkit
- docker-compose.yml    local dev stack (postgres, backend, frontend)

## ER Diagram (simple)
Users (id, name, email, password, role)
  1---* Leads (id, name, email, ownerId, status)
        1---* Activities (id, leadId, type, note, createdAt)

## Notes
- This is a scaffold to help you finish the full assessment quickly. Core files include authentication, role-based middleware, lead CRUD, activity model, simple Socket.IO notifications, and a frontend skeleton with auth + leads pages.
- Read inline comments in files to understand extension points.
