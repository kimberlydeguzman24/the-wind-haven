import React, { useState } from 'react';
import {
  MapPin,
  CalendarCheck,
  ArrowUpRight,
  Info,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import {
  BOOKING_URL,
  BRAND_CONFIG,
  GOOGLE_MAPS_URL,
} from '../data/windHavenConfig';
import { Reveal } from './Reveal';

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Stay Inquiry');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isDemoSubmitted, setIsDemoSubmitted] = useState(false);

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please complete all required inquiry fields.');
      return;
    }

    if (!validateEmail(email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsDemoSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-[#F7F5EF] py-12 sm:py-20 lg:py-28 border-b border-[#E3DDD0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="max-w-2xl mb-8 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#183D32] mb-2 block">
            RESERVATIONS &amp; CONTACT
          </span>
          <h2 className="font-serif heading-section font-medium text-[#252824] tracking-tight mb-4 text-balance">
            Plan Your Stay at The Wind Haven.
          </h2>
          <p className="text-sm sm:text-base text-[#252824]/85 leading-relaxed">
            Proceed directly to the official BookMyStay listing to verify room availability, current rates, and booking policies, or open the location pin in Google Maps.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left Column: Official Reservation & Property Card */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={80}>
              <div className="bg-white p-6 rounded-xl border border-[#E3DDD0] space-y-5">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#183D32] block mb-1">
                    Verified Property Details
                  </span>
                  <h3 className="font-serif text-xl font-medium text-[#252824]">
                    {BRAND_CONFIG.name}
                  </h3>
                </div>

                <div className="space-y-4 pt-3 border-t border-[#E3DDD0] text-[13px]">
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="w-4 h-4 text-[#183D32] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="font-semibold text-[#252824] block">
                        Property Address
                      </span>
                      <span className="text-[#252824]/80 block leading-relaxed">
                        {BRAND_CONFIG.addressLine1}
                        <br />
                        {BRAND_CONFIG.addressLine2}, {BRAND_CONFIG.addressLine3}
                      </span>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/mp inline-flex items-center gap-1 text-[#183D32] font-semibold hover:underline mt-1 min-h-[36px]"
                      >
                        <span>Open in Google Maps</span>
                        <ArrowUpRight
                          className="w-3.5 h-3.5 transition-transform duration-200 group-hover/mp:translate-x-0.5 group-hover/mp:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CalendarCheck
                      className="w-4 h-4 text-[#183D32] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="font-semibold text-[#252824] block">
                        Booking Platform
                      </span>
                      <span className="text-[#252824]/80 block">
                        BookMyStay Official Reservation Page
                      </span>
                      <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/bk inline-flex items-center gap-1 text-[#183D32] font-semibold hover:underline mt-1 min-h-[36px]"
                      >
                        <span>Visit BookMyStay Portal</span>
                        <ArrowUpRight
                          className="w-3.5 h-3.5 transition-transform duration-200 group-hover/bk:translate-x-0.5 group-hover/bk:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Direct BookMyStay Card */}
            <Reveal delay={160}>
              <div className="bg-[#183D32] text-white p-6 rounded-xl space-y-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#A8B5A0] block">
                  Direct Reservation Portal
                </span>
                <h3 className="font-serif text-2xl font-medium">
                  Ready to Check Dates &amp; Availability?
                </h3>
                <p className="text-[13px] text-[#F7F5EF]/90 leading-relaxed">
                  All reservations, live availability, and confirmation terms are handled exclusively on The Wind Haven&apos;s BookMyStay page.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full py-3.5 px-5 bg-[#F7F5EF] text-[#252824] hover:bg-white active:scale-[0.98] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 inline-flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <span>Book Your Stay</span>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#183D32] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Clearly Labeled Demo Inquiry Form */}
          <Reveal delay={120} className="lg:col-span-7">
            <div className="bg-white p-5 sm:p-8 rounded-xl border border-[#E3DDD0]">
              <div className="pb-4 mb-5 border-b border-[#E3DDD0] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#183D32] block">
                    Interactive Concept Preview
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#252824]">
                    Guest Inquiry Preview
                  </h3>
                </div>
                <span className="text-xs text-[#183D32] font-medium">
                  Demo Interface · Direct bookings via BookMyStay
                </span>
              </div>

              <div className="mb-5 p-3.5 bg-[#F7F5EF] rounded-lg border border-[#E3DDD0] flex items-start gap-2.5 text-[13px] text-[#252824]/85">
                <Info className="w-4 h-4 text-[#183D32] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="leading-relaxed">
                  This form demonstrates the proposed guest inquiry flow for the portfolio concept. No inquiries are transmitted from this demo—please proceed directly to BookMyStay for live booking questions.
                </p>
              </div>

              {isDemoSubmitted ? (
                <div className="py-8 px-4 text-center bg-[#F7F5EF] rounded-lg border border-[#E3DDD0]">
                  <div className="w-12 h-12 rounded-full bg-[#183D32] text-white flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#183D32] block mb-1">
                    Preview Validated
                  </span>
                  <h4 className="font-serif text-2xl font-medium text-[#252824] mb-2">
                    Thank You, {fullName}
                  </h4>
                  <p className="text-sm text-[#252824]/80 max-w-md mx-auto leading-relaxed mb-6">
                    Your sample inquiry passed client-side validation in this portfolio preview. To check real-time availability or book your stay, please continue to BookMyStay.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group px-5 py-3 bg-[#183D32] text-white hover:bg-[#102B24] active:scale-[0.98] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 inline-flex items-center gap-2 min-h-[44px]"
                    >
                      <span>Book Your Stay</span>
                      <ArrowUpRight
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setIsDemoSubmitted(false);
                        setMessage('');
                      }}
                      className="px-5 py-3 bg-[#EEE9DE] text-[#252824] hover:bg-[#E3DDD0] active:scale-[0.98] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 cursor-pointer min-h-[44px]"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {errorMsg && (
                    <div
                      role="alert"
                      className="p-3 rounded bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-full-name"
                        className="block text-[13px] font-medium text-[#252824] mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-full-name"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 bg-[#F7F5EF] border border-[#E3DDD0] rounded text-base sm:text-sm text-[#252824] transition-colors focus:outline-none focus:ring-1 focus:ring-[#183D32] focus:border-[#183D32] min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-[13px] font-medium text-[#252824] mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-3.5 py-2.5 bg-[#F7F5EF] border border-[#E3DDD0] rounded text-base sm:text-sm text-[#252824] transition-colors focus:outline-none focus:ring-1 focus:ring-[#183D32] focus:border-[#183D32] min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-[13px] font-medium text-[#252824] mb-1.5"
                    >
                      Topic
                    </label>
                    <select
                      id="contact-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F7F5EF] border border-[#E3DDD0] rounded text-base sm:text-sm text-[#252824] transition-colors focus:outline-none focus:ring-1 focus:ring-[#183D32] focus:border-[#183D32] min-h-[44px]"
                    >
                      <option value="General Stay Inquiry">General Stay Inquiry</option>
                      <option value="Room Category Verification">Room Category Verification</option>
                      <option value="Check-In & Check-Out Schedule">Check-In &amp; Check-Out Schedule</option>
                      <option value="Shared Condominium Facilities">Shared Condominium Facilities</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-[13px] font-medium text-[#252824] mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share any questions regarding your Tagaytay stay..."
                      className="w-full p-3.5 bg-[#F7F5EF] border border-[#E3DDD0] rounded text-base sm:text-sm text-[#252824] transition-colors focus:outline-none focus:ring-1 focus:ring-[#183D32] focus:border-[#183D32]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#183D32] text-white hover:bg-[#102B24] active:scale-[0.98] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 cursor-pointer min-h-[44px]"
                  >
                    Preview Inquiry Form
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
