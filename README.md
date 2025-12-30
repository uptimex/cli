# UptimeX Code

AI coding agent for DevOps/SRE.

## Structure

```
uptimex-code/
├── cli/           # Go CLI - terminal interface
├── backend/       # Go API server - auth, billing, LLM proxy
├── web/           # React - auth UI, billing, profile
├── pkg/           # Shared Go packages
└── api/           # OpenAPI specs
```

## Development

### Prerequisites

- Go 1.23+
- Node.js 20+ (for web UI)
- pnpm (for web UI)

### CLI

```bash
cd cli
go build -o uptimex-code ./cmd/uptimex-code
./uptimex-code --help
```

### Backend

```bash
cd backend
go run ./cmd/server
```

### Web UI

```bash
cd web
pnpm install
pnpm dev
```

## URLs

- Web: https://code.uptimex.cloud
- API: https://api2.uptimex.cloud
