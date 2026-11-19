/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { ServiceItem, SERVICES } from './data/salonData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ImpactMarquee } from './components/ImpactMarquee';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TransformationsSection } from './components/TransformationsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InstagramSection } from './components/InstagramSection';
import { BookingSection } from './components/BookingSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>(SERVICES[0].name);

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service.name);
    scrollToSection('#agendamento');
  };

  return (
    <div className="min-h-screen bg-[#F7F0E9] text-[#38251F]">
      <Navbar onBookClick={() => scrollToSection('#agendamento')} />

      <main>
        <HeroSection
          onBookClick={() => scrollToSection('#agendamento')}
          onExploreServices={() => scrollToSection('#tratamentos')}
        />

        <ImpactMarquee />

        <AboutSection onExploreWork={() => scrollToSection('#resultados')} />

        <ServicesSection onSelectService={handleSelectService} />

        <TransformationsSection onBookClick={() => scrollToSection('#agendamento')} />

        <ExperienceSection />

        <TestimonialsSection />

        <InstagramSection />

        <BookingSection preselectedService={selectedService} />

        <FinalCtaSection onBookClick={() => scrollToSection('#agendamento')} />
      </main>

      <Footer />

      {/* Mobile Quick Booking Action (compact 48px pill within 15% mobile sticky budget) */}
      <div className="fixed bottom-4 right-4 z-40 sm:hidden">
        <button
          type="button"
          onClick={() => scrollToSection('#agendamento')}
          aria-label="Agendar horário"
          className="inline-flex items-center gap-2 h-11 px-4 rounded-full bg-[#38251F] text-[#FFFCF8] text-xs font-medium uppercase tracking-[0.12em] shadow-lg border border-[#E8D6BC]/25 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99764]"
        >
          <Calendar className="w-3.5 h-3.5 text-[#E8D6BC]" />
          <span>Agendar</span>
        </button>
      </div>
    </div>
  );
}
