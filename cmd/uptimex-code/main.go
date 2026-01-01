package main

import (
	"fmt"
	"os"

	"github.com/spf13/cobra"
)

var version = "0.0.1-dev"

func main() {
	rootCmd := &cobra.Command{
		Use:   "uptimex-code",
		Short: "UptimeX Code - AI coding agent for DevOps/SRE",
		Long: `UptimeX Code is an AI-powered coding assistant designed for
DevOps and SRE workflows. It helps you write, debug, and maintain
infrastructure code, automation scripts, and configuration files.`,
		Version: version,
	}

	// Auth commands
	authCmd := &cobra.Command{
		Use:   "auth",
		Short: "Authentication commands",
	}

	loginCmd := &cobra.Command{
		Use:   "login",
		Short: "Login to UptimeX Code",
		Run: func(cmd *cobra.Command, args []string) {
			fmt.Println("Opening browser for authentication...")
			// TODO: Implement OAuth flow
		},
	}

	logoutCmd := &cobra.Command{
		Use:   "logout",
		Short: "Logout from UptimeX Code",
		Run: func(cmd *cobra.Command, args []string) {
			fmt.Println("Logged out successfully")
			// TODO: Clear stored credentials
		},
	}

	authCmd.AddCommand(loginCmd, logoutCmd)

	// Chat command (interactive mode)
	chatCmd := &cobra.Command{
		Use:   "chat",
		Short: "Start interactive chat session",
		Run: func(cmd *cobra.Command, args []string) {
			fmt.Println("Starting interactive session...")
			// TODO: Implement TUI with bubbletea
		},
	}

	// Run command (single prompt)
	runCmd := &cobra.Command{
		Use:   "run [prompt]",
		Short: "Run a single prompt",
		Args:  cobra.MinimumNArgs(1),
		Run: func(cmd *cobra.Command, args []string) {
			prompt := args[0]
			fmt.Printf("Processing: %s\n", prompt)
			// TODO: Implement single prompt execution
		},
	}

	// Config command
	configCmd := &cobra.Command{
		Use:   "config",
		Short: "Manage configuration",
	}

	configShowCmd := &cobra.Command{
		Use:   "show",
		Short: "Show current configuration",
		Run: func(cmd *cobra.Command, args []string) {
			fmt.Println("Configuration:")
			fmt.Println("  API URL: https://api.uptimex.ai")
			// TODO: Show actual config
		},
	}

	configCmd.AddCommand(configShowCmd)

	// Add all commands
	rootCmd.AddCommand(authCmd, chatCmd, runCmd, configCmd)

	if err := rootCmd.Execute(); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}
