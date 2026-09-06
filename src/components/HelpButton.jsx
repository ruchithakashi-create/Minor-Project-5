import React from "react";
import { HelpCircle } from "lucide-react";

function HelpButton() {
  return (
    <button
      className="help-button"
      title="Help"
    >
      <HelpCircle size={24} />
    </button>
  );
}

export default HelpButton;