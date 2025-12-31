# CLAUDE.md - UptimeX CLI

## Project Overview

Open source CLI for UptimeX Code - AI coding agent for DevOps/SRE.

## Repository

- **Public repo**: github.com/uptimex/cli
- **Private backend**: github.com/uptimex/cloud (separate repo)

## Tech Stack

| Component | Technology |
|-----------|------------|
| Language | Go 1.23 |
| CLI Framework | Cobra |
| TUI | Bubbletea, Lipgloss |
| Config | ~/.uptimex-code/config.json |

## Structure

```
cli/
├── cmd/uptimex-code/   # Main entry point
└── internal/           # Private packages
```

## Git Workflow

### Branch Protection

- **`main` branch is protected** - Direct pushes are not allowed
- All changes must go through Pull Requests

### Making Changes

```bash
git checkout -b feat/your-feature
# make changes
git commit -m "feat: description"
git push -u origin feat/your-feature
gh pr create --base main
```

### Commit Convention

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `refactor:` - Code refactoring

## Commands

```bash
uptimex-code auth login      # OAuth via browser
uptimex-code auth logout     # Clear credentials
uptimex-code chat            # Interactive TUI
uptimex-code run "prompt"    # Single prompt
uptimex-code config show     # Show config
```

## Configuration

Stored in `~/.uptimex-code/config.json`:

```json
{
  "api_url": "https://api2.uptimex.cloud",
  "refresh_token": "...",
  "default_model": "claude-3-5-sonnet"
}
```

## API

CLI communicates with: `https://api2.uptimex.cloud`

## Building

```bash
# Development
go run ./cmd/uptimex-code

# Binary
go build -o uptimex-code ./cmd/uptimex-code

# Cross-compile
GOOS=linux GOARCH=amd64 go build -o uptimex-code-linux ./cmd/uptimex-code
GOOS=darwin GOARCH=arm64 go build -o uptimex-code-mac ./cmd/uptimex-code
GOOS=windows GOARCH=amd64 go build -o uptimex-code.exe ./cmd/uptimex-code
```

## Code Style

- Use `gofmt` and `goimports`
- Handle errors explicitly
- Keep packages small and focused
