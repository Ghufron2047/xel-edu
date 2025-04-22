// src/components/SourceCode.jsx
import React, { useState } from "react";

const sampleCode = `function greet(name) {
  return "Hello, " + name + "!";
}`;

const SourceCode = () => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="page-container">
      <h2>Sample Source Code</h2>
      <pre className="code-block">{sampleCode}</pre>
      <button onClick={copyCode}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
    </div>
  );
};

export default SourceCode;
