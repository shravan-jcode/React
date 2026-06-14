import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h2>Something Went Wrong</h2>

          <button
            onClick={() =>
              window.location.reload()
            }
          >
            Retry
          </button>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;