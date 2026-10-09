import { Component, type ReactNode } from "react";
import { RotateCcw } from "lucide-react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

export class PreviewErrorBoundary extends Component<Props, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) {
      return <div className="unavailable-preview" role="alert"><h3>This preview couldn't load.</h3><p>Your portfolio is still available. Close this preview and try again, or refresh the page if the problem continues.</p><button type="button" className="button button-secondary" onClick={this.props.onClose}><RotateCcw size={16} /> Close preview</button></div>;
    }
    return this.props.children;
  }
}