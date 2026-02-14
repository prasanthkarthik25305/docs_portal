"use client";

import { useState } from "react";

export default function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative bg-gray-900 text-white p-4 rounded">
      <button
        data-testid="code-block-copy"
        onClick={copyToClipboard}
        className="absolute top-2 right-2 text-sm bg-gray-700 px-2 py-1 rounded"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      <pre className="overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}
