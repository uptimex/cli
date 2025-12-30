module github.com/adwiteeymauriya/uptimex-code/cli

go 1.23

require (
	github.com/adwiteeymauriya/uptimex-code/pkg v0.0.0
	github.com/spf13/cobra v1.8.1
	github.com/charmbracelet/bubbletea v1.2.4
	github.com/charmbracelet/lipgloss v1.0.0
)

replace github.com/adwiteeymauriya/uptimex-code/pkg => ../pkg
