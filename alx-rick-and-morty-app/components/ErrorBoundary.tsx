import React, { ReactNode } from 'react';

interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to console first
    console.log({ error, errorInfo });

    // Try to report to Sentry if available. This keeps the app safe if Sentry is not installed/configured.
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const Sentry = require('@sentry/react');
      if (Sentry && typeof Sentry.captureException === 'function') {
        Sentry.captureException(error, { extra: errorInfo });
      }
    } catch (e) {
      // Sentry not installed or failed to initialize — ignore silently
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-4">Oops, there is an error!</h2>
            <p className="mb-6">Something went wrong in this part of the application.</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-[#45B69C] text-white font-semibold py-2 px-4 rounded"
            >
              Try again?
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
