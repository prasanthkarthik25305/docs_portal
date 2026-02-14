"use client";

import { useState } from "react";

export default function FeedbackWidget() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Feedback submitted!");
    setMessage("");
  };

  return (
    <form
      data-testid="feedback-widget"
      onSubmit={handleSubmit}
      className="mt-8 p-4 border rounded bg-gray-50"
    >
      <h3 className="font-semibold mb-2">Feedback</h3>
      <textarea
        className="w-full border p-2 rounded mb-2"
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your feedback..."
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-1 rounded"
      >
        Submit
      </button>
    </form>
  );
}
