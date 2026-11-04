import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error caught by ErrorBoundary:", error, errorInfo);
  }

  private handleReset = () => {
    localStorage.removeItem('ipl_auction_state');
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          backgroundColor: '#07090e',
          color: '#ffffff',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          padding: '24px'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚠️</div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#fbbf24' }}>SOMETHING WENT WRONG</h2>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem', maxWidth: '400px', marginBottom: '24px', lineHeight: '1.5' }}>
            An unexpected rendering exception occurred. You can attempt to restore the app state or reset local storage.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '10px 20px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.85rem'
              }}
            >
              Try Reloading
            </button>
            <button
              onClick={this.handleReset}
              style={{
                backgroundColor: '#ef4444',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.85rem'
              }}
            >
              Clear Storage & Reset
            </button>
          </div>
          {this.state.error && (
            <pre style={{
              marginTop: '40px',
              padding: '16px',
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '6px',
              color: '#ef4444',
              fontSize: '0.75rem',
              textAlign: 'left',
              maxWidth: '600px',
              overflowX: 'auto',
              fontFamily: 'monospace'
            }}>
              {this.state.error.toString()}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
