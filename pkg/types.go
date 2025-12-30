// Package pkg contains shared types and utilities for UptimeX Code.
package pkg

// User represents an authenticated user.
type User struct {
	ID        string `json:"id"`
	Email     string `json:"email"`
	Name      string `json:"name"`
	Plan      string `json:"plan"` // free, pro, enterprise
	CreatedAt int64  `json:"created_at"`
}

// APIKey represents a user's API key.
type APIKey struct {
	ID        string `json:"id"`
	Name      string `json:"name"`
	Prefix    string `json:"prefix"` // First 8 chars for display
	CreatedAt int64  `json:"created_at"`
	LastUsed  int64  `json:"last_used,omitempty"`
}

// Usage represents usage statistics.
type Usage struct {
	TotalTokens   int64 `json:"total_tokens"`
	PromptTokens  int64 `json:"prompt_tokens"`
	OutputTokens  int64 `json:"output_tokens"`
	RequestCount  int64 `json:"request_count"`
	PeriodStart   int64 `json:"period_start"`
	PeriodEnd     int64 `json:"period_end"`
}

// ChatRequest represents a chat completion request.
type ChatRequest struct {
	Model       string    `json:"model"`
	Messages    []Message `json:"messages"`
	MaxTokens   int       `json:"max_tokens,omitempty"`
	Temperature float64   `json:"temperature,omitempty"`
	Stream      bool      `json:"stream,omitempty"`
}

// Message represents a chat message.
type Message struct {
	Role    string `json:"role"` // system, user, assistant
	Content string `json:"content"`
}

// ChatResponse represents a chat completion response.
type ChatResponse struct {
	ID      string   `json:"id"`
	Model   string   `json:"model"`
	Choices []Choice `json:"choices"`
	Usage   struct {
		PromptTokens int `json:"prompt_tokens"`
		OutputTokens int `json:"output_tokens"`
		TotalTokens  int `json:"total_tokens"`
	} `json:"usage"`
}

// Choice represents a completion choice.
type Choice struct {
	Index        int     `json:"index"`
	Message      Message `json:"message"`
	FinishReason string  `json:"finish_reason"`
}
