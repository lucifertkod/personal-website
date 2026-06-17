"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label
          htmlFor="name"
          className="font-mono text-xs uppercase tracking-widest text-ink/60 mb-2 block"
        >
          Full Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full arch-border bg-white px-4 py-3 font-mono text-sm focus:outline-none focus:border-klein-blue transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="font-mono text-xs uppercase tracking-widest text-ink/60 mb-2 block"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full arch-border bg-white px-4 py-3 font-mono text-sm focus:outline-none focus:border-klein-blue transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-mono text-xs uppercase tracking-widest text-ink/60 mb-2 block"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us how we can help..."
          className="w-full arch-border bg-white px-4 py-3 font-mono text-sm focus:outline-none focus:border-klein-blue transition-colors min-h-[150px] resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-editorial w-full"
      >
        <span>{loading ? "Sending..." : "Submit Inquiry"}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>

      {success && (
        <div className="arch-border bg-white p-4">
          <p className="font-mono text-xs uppercase tracking-widest text-klein-blue">
            Message Received
          </p>
          <p className="font-mono text-sm text-ink/70 mt-2">
            Thank you for reaching out. We will get back to you soon.
          </p>
        </div>
      )}

      {error && (
        <div className="arch-border bg-white p-4">
          <p className="font-mono text-xs uppercase tracking-widest text-[#c44]">
            Submission Error
          </p>
          <p className="font-mono text-sm text-ink/70 mt-2">{error}</p>
        </div>
      )}
    </form>
  );
}
