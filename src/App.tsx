import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { TrialModal } from './components/common/TrialModal';
import { ScrollToTop } from './components/common/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { DisciplinesPage } from './pages/DisciplinesPage';
import { SchoolPage } from './pages/SchoolPage';
import { SchedulePage } from './pages/SchedulePage';
import { GalaPage } from './pages/GalaPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { LegalNoticePage } from './pages/LegalNoticePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';

export function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [preselectedDiscipline, setPreselectedDiscipline] = useState<string | undefined>(undefined);

  const handleOpenTrial = (discipline?: string) => {
    setPreselectedDiscipline(discipline);
    setTrialModalOpen(true);
  };

  const handleCloseTrial = () => {
    setTrialModalOpen(false);
    setPreselectedDiscipline(undefined);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#08090C] text-[#F7F5F0] font-sans selection:bg-[#F4A261] selection:text-black">
        {/* Floating Minimalist Header */}
        <Header onOpenTrial={() => handleOpenTrial()} />

        {/* Main Content Router */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenTrial={handleOpenTrial} />} />
            <Route path="/disciplinas" element={<DisciplinesPage onOpenTrial={handleOpenTrial} />} />
            <Route path="/escuela" element={<SchoolPage onOpenTrial={handleOpenTrial} />} />
            <Route path="/horarios" element={<SchedulePage onOpenTrial={handleOpenTrial} />} />
            <Route path="/gala" element={<GalaPage />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            
            {/* Legal Pages */}
            <Route path="/aviso-legal" element={<LegalNoticePage />} />
            <Route path="/politica-privacidad" element={<PrivacyPolicyPage />} />
            <Route path="/politica-cookies" element={<CookiePolicyPage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Rich Neobrutalist Footer */}
        <Footer />

        {/* Floating WhatsApp Action Pill */}
        <WhatsAppButton />

        {/* Global Class Trial Booking Modal */}
        <TrialModal
          isOpen={trialModalOpen}
          onClose={handleCloseTrial}
          preselectedDiscipline={preselectedDiscipline}
        />
      </div>
    </Router>
  );
}

export default App;
