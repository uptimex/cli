# CLAUDE.md - UptimeX Code

## Project Overview

UptimeX Code is an AI coding agent designed for **DevOps and SRE workflows**. It provides a CLI-first experience for infrastructure code, automation scripts, and configuration management.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      UptimeX Code                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   CLI (Go)                    Web UI (React)                 │
│   ────────                    ──────────────                 │
│   • Runs locally              • Login/signup                 │
│   • Code editing              • User profile                 │
│   • Tool execution            • API key management           │
│   • Agentic loop              • Billing/subscription         │
│   • Context gathering         • Usage dashboard              │
│                                                              │
│                         ↓ HTTPS                              │
│                                                              │
│                    Backend (Go)                              │
│                    ────────────                              │
│                    • Auth (better-auth)                      │
│                    • LLM API proxy                           │
│                    • Usage tracking                          │
│                    • Billing (Stripe)                        │
│                                                              │
│                         ↓                                    │
│                                                              │
│                   LLM Providers                              │
│                   (Claude, GPT-4)                            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Repository Structure

```
uptimex-code/
├── cli/                    # Go CLI application
│   ├── cmd/uptimex-code/   # Main entry point
│   └── internal/           # Private packages
├── backend/                # Go API server
│   ├── cmd/server/         # Main entry point
│   └── internal/           # Private packages
├── web/                    # React frontend
│   └── src/
│       ├── routes/         # TanStack Router pages
│       ├── components/     # UI components (shadcn)
│       └── lib/            # Utilities, auth client
├── pkg/                    # Shared Go packages
└── api/                    # OpenAPI specs
```

## Tech Stack

| Component | Technology |
|-----------|------------|
| CLI | Go 1.23, Cobra, Bubbletea |
| Backend | Go 1.23, Chi router, zerolog |
| Web | React, Vite, TanStack Router, Tailwind, shadcn |
| Auth | better-auth |
| Database | PostgreSQL (planned) |
| LLM | Claude API, OpenAI API |

## URLs

| Environment | Web | API |
|-------------|-----|-----|
| Production | https://code.uptimex.cloud | https://api2.uptimex.cloud |
| Local | http://localhost:5173 | http://localhost:8080 |

## Development

### Prerequisites

- Go 1.23+
- Node.js 20+
- pnpm

### Running Locally

```bash
# CLI
cd cli
go run ./cmd/uptimex-code

# Backend
cd backend
go run ./cmd/server

# Web
cd web
pnpm install
pnpm dev
```

### Building

```bash
# CLI binary
cd cli
go build -o bin/uptimex-code ./cmd/uptimex-code

# Backend binary
cd backend
go build -o bin/server ./cmd/server

# Web static files
cd web
pnpm build
```

## CLI Commands

```bash
uptimex-code auth login      # Authenticate with browser OAuth
uptimex-code auth logout     # Clear credentials
uptimex-code chat            # Interactive chat session (TUI)
uptimex-code run "prompt"    # Single prompt execution
uptimex-code config show     # Show configuration
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | /api/v1/auth/login | Login |
| POST | /api/v1/auth/logout | Logout |
| GET | /api/v1/user/profile | Get user profile |
| GET | /api/v1/user/usage | Get usage stats |
| POST | /api/v1/chat/completions | LLM completion (proxy) |
| GET | /api/v1/keys | List API keys |
| POST | /api/v1/keys | Create API key |
| DELETE | /api/v1/keys/{id} | Delete API key |

## Code Style

### Go

- Use `gofmt` and `goimports`
- Follow standard Go project layout
- Private packages in `internal/`
- Shared packages in `pkg/`
- Use `zerolog` for logging
- Handle errors explicitly, don't panic

### TypeScript/React

- Use TypeScript strict mode
- Use TanStack Router for routing
- Use shadcn/ui components
- Use Tailwind for styling
- Keep components small and focused

## Key Concepts

### CLI Authentication Flow

1. User runs `uptimex-code auth login`
2. CLI opens browser to `code.uptimex.cloud/cli-auth`
3. User authenticates (GitHub/Google)
4. Backend generates short-lived code
5. CLI polls for code exchange
6. CLI stores refresh token locally (~/.uptimex-code/config.json)

### LLM Proxy

The backend proxies LLM requests to:
- Add authentication
- Track usage per user
- Apply rate limits based on plan
- Support streaming (SSE)

### Tiered Plans

| Plan | Tokens/month | Models | Price |
|------|--------------|--------|-------|
| Free | 10K | Basic | $0 |
| Pro | 100K | All | $20 |
| Enterprise | Unlimited | All + self-hosted | Custom |

## Related Projects

- `/home/qwe/platform/uptimex` - Main UptimeX AIOps platform
- `/home/qwe/platform/uptimex-outreach` - Landing page and marketing

## Environment Variables

### Backend

```bash
PORT=8080
DATABASE_URL=postgres://...
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...
STRIPE_SECRET_KEY=sk_...
BETTER_AUTH_SECRET=...
```

### Web

```bash
VITE_API_URL=https://api2.uptimex.cloud
```

### CLI

Config stored in `~/.uptimex-code/config.json`:
```json
{
  "api_url": "https://api2.uptimex.cloud",
  "refresh_token": "...",
  "default_model": "claude-3-5-sonnet"
}
```
