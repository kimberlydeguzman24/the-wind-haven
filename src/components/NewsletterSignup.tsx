import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [subscribedEmail, setSubscribedEmail] = useState<string | null>(null);

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setError('Please enter your email address.');
      return;
    }

    if (!validateEmail(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError(null);
    setSubscribedEmail(trimmed);
    setEmail('');
  };

  const handleReset = () => {
    setSubscribedEmail(null);
    setError(null);
  };

  return (
    <div
      aria-labelledby="footer-newsletter-heading"
      className="pb-10 sm:pb-12 mb-10 sm:mb-12 border-b border-white/15 print:hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
        <div className="lg:col-span-6 space-y-1.5">
          <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#A8B5A0] block">
            Guest Dispatches
          </span>
          <h3
            id="footer-newsletter-heading"
            className="font-serif text-2xl sm:text-[26px] font-medium text-white tracking-tight text-balance"
          >
            Seasonal Notes &amp; Private Updates
          </h3>
          <p className="text-[13px] text-[#EEE9DE]/80 leading-relaxed max-w-md">
            Subscribe discreetly for occasional Tagaytay stay notes and owner updates.
          </p>
        </div>

        <div className="lg:col-span-6">
          {subscribedEmail ? (
            <div
              role="status"
              aria-live="polite"
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3 px-4 rounded-lg border border-[#A8B5A0]/40 bg-white/[0.04]"
            >
              <div className="flex items-start gap-2.5 min-w-0">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#A8B5A0]/20 text-[#EEE9DE] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] text-white font-medium truncate">
                    Subscribed ({subscribedEmail})
                  </p>
                  <p className="text-xs text-[#EEE9DE]/75 leading-relaxed">
                    Preview confirmation saved locally; mailing list sync awaits owner activation.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs font-medium text-[#EEE9DE] hover:text-white underline underline-offset-4 transition-colors cursor-pointer shrink-0 self-start sm:self-center min-h-[36px] px-1"
              >
                Use another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-2">
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Email address for stay updates
              </label>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <input
                  id="footer-newsletter-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Enter your email address"
                  aria-invalid={Boolean(error)}
                  aria-describedby={
                    error ? 'footer-newsletter-error' : 'footer-newsletter-note'
                  }
                  className={`flex-1 min-w-0 px-4 py-2.5 bg-white/[0.05] border rounded-md text-base sm:text-sm text-white placeholder:text-[#EEE9DE]/55 transition-colors focus:outline-none focus:bg-white/[0.08] focus:ring-1 min-h-[44px] ${
                    error
                      ? 'border-red-300/80 focus:border-red-300 focus:ring-red-300'
                      : 'border-white/20 focus:border-[#A8B5A0] focus:ring-[#A8B5A0]'
                  }`}
                />
                <button
                  type="submit"
                  className="group px-5 py-2.5 bg-[#F7F5EF] text-[#252824] hover:bg-white active:scale-[0.98] text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A8B5A0]"
                >
                  <span>Subscribe</span>
                  <ArrowRight
                    className="w-3.5 h-3.5 text-[#183D32] transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </button>
              </div>

              {error ? (
                <p
                  id="footer-newsletter-error"
                  role="alert"
                  className="text-xs text-red-200"
                >
                  {error}
                </p>
              ) : (
                <p
                  id="footer-newsletter-note"
                  className="text-xs text-[#EEE9DE]/70"
                >
                  Interactive preview · No spam, unsubscribe anytime once live.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
