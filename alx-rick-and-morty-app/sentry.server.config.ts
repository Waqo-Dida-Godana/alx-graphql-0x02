// Basic Sentry server init. Set SENTRY_DSN in your environment to enable.
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Sentry = require('@sentry/nextjs')
  const dsn = process.env.SENTRY_DSN
  if (dsn) {
    Sentry.init({
      dsn,
      tracesSampleRate: 1.0,
    })
  }
} catch (e) {
  // Sentry not installed or failed to initialize
}
