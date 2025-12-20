// Basic Sentry client init. Set NEXT_PUBLIC_SENTRY_DSN in your environment to enable.
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Sentry = require('@sentry/react')
  // Only initialize if a DSN is provided
  const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN
  if (dsn) {
    Sentry.init({
      dsn,
      tracesSampleRate: 1.0,
    })
  }
} catch (e) {
  // Sentry not installed or failed to initialize
}
