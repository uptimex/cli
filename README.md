# UptimeX CLI

Open source CLI for UptimeX Code - AI coding agent for DevOps/SRE.

## Installation

```bash
# Using Go
go install github.com/uptimex/cli@latest

# Or download binary from releases
curl -fsSL https://code.uptimex.ai/install.sh | sh
```

## Usage

```bash
# Login
uptimex-code auth login

# Start interactive chat
uptimex-code chat

# Run a single prompt
uptimex-code run "write a terraform module for AWS VPC"

# Show config
uptimex-code config show
```

## Commands

| Command | Description |
|---------|-------------|
| `auth login` | Authenticate via browser |
| `auth logout` | Clear credentials |
| `chat` | Interactive TUI session |
| `run <prompt>` | Single prompt execution |
| `config show` | Show configuration |

## Development

```bash
go build -o uptimex-code ./cmd/uptimex-code
./uptimex-code --help
```

## License

MIT
