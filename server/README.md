# server

Placeholder for backend services. Nothing is implemented yet.

The client (`../client`) is currently fully static: it makes no calls to a
first-party API. The only outbound request is the portfolio contact form
posting to EmailJS, and that falls back to a `mailto:` draft when
unconfigured.

When a backend lands here, keep the boundary explicit — the client should
reach it through a single configured base URL (a `VITE_API_BASE_URL`), not
hardcoded hosts.
