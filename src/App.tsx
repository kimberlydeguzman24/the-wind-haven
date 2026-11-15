import React, { useState, useEffect } from 'react';
import { RoomCategory, NAV_LINKS } from './data/windHavenConfig';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { IntroductionSection } from './components/IntroductionSection';
import { AboutSection } from './components/AboutSection';
import { RoomCollection } from './components/RoomCollection';
import { RoomDetailsModal } from './components/RoomDetailsModal';
import { AmenitiesSection } from './components/AmenitiesSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { GuestExperienceSection } from './components/GuestExperienceSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { BookingCTA } from './components/BookingCTA';
import { Footer } from './components/Footer';
import { BackToTopButton } from './components/BackToTopButton';
import { FloatingBookingCTA } from './components/FloatingBookingCTA';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CinematicInterlude } from './components/CinematicInterlude';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedRoom, setSelectedRoom] = useState<RoomCategory | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Track visible section for header active link underline
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      el.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  const suppressFloatingControls = Boolean(selectedRoom) || mobileMenuOpen;

  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#252824] flex flex-col font-sans overflow-x-clip">
      {/* Subtle Top Scroll Progress Hairline */}
      <ScrollProgressBar />

      {/* Sticky Transparent-to-Ivory Header */}
      <Header
        activeSection={activeSection}
        onMenuOpenChange={setMobileMenuOpen}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        <HeroSection />
        <IntroductionSection />
        <AboutSection />
        <RoomCollection onSelectRoom={(room) => setSelectedRoom(room)} />
        <AmenitiesSection />
        <CinematicInterlude onOpenGallery={scrollToGallery} />
        <GallerySection />
        <LocationSection />
        <GuestExperienceSection />
        <FAQSection />
        <ContactSection />
        <BookingCTA />
      </main>

      {/* Multi-Column Boutique Footer */}
      <Footer />

      {/* Floating Booking CTA & Back to Top Button (visible past hero) */}
      <FloatingBookingCTA
        heroSectionId="home"
        suppressed={suppressFloatingControls}
      />
      <BackToTopButton
        heroSectionId="home"
        suppressed={suppressFloatingControls}
      />

      {/* Room Detail Modal */}
      {selectedRoom && (
        <RoomDetailsModal
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
      )}
    </div>
  );
}
