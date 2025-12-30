module github.com/adwiteeymauriya/uptimex-code/backend

go 1.23

require (
	github.com/adwiteeymauriya/uptimex-code/pkg v0.0.0
	github.com/go-chi/chi/v5 v5.1.0
	github.com/go-chi/cors v1.2.1
	github.com/golang-jwt/jwt/v5 v5.2.1
	github.com/rs/zerolog v1.33.0
)

replace github.com/adwiteeymauriya/uptimex-code/pkg => ../pkg
