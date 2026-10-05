import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { TrialModal } from './components/common/TrialModal';
import { SmoothScroll } from './components/common/SmoothScroll';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { AmbientGlow } from './components/common/AmbientGlow';
import { BackToTop } from './components/common/BackToTop';
import { DanceQuizModal } from './components/common/DanceQuizModal';

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

function AppContent() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [danceQuizOpen, setDanceQuizOpen] = useState(false);
  const [preselectedDiscipline, setPreselectedDiscipline] = useState<string | undefined>(undefined);
  const location = useLocation();

  const handleOpenTrial = (discipline?: string) => {
    setPreselectedDiscipline(discipline);
    setTrialModalOpen(true);
  };

  const handleCloseTrial = () => {
    setTrialModalOpen(false);
    setPreselectedDiscipline(undefined);
  };

  const handleOpenQuiz = () => {
    setDanceQuizOpen(true);
  };

  const handleCloseQuiz = () => {
    setDanceQuizOpen(false);
  };

  return (
    <SmoothScroll isModalOpen={trialModalOpen || danceQuizOpen}>
      {/* Dynamic 2px Glowing Scroll Progress Bar at the top */}
      <ScrollProgressBar />

      {/* Subtle Ethereal Ambient Follower for Desktop */}
      <AmbientGlow />

      <div className="min-h-screen flex flex-col bg-[#000000] text-[#FFFFFF] font-sans selection:bg-white selection:text-black antialiased relative">
        {/* Floating Minimalist Header */}
        <Header onOpenTrial={() => handleOpenTrial()} />

        {/* Main Content Router with Silky Smooth Page Transitions */}
        <main className="flex-1 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8, filter: 'blur(3px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -6, filter: 'blur(3px)' }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <Routes location={location}>
                <Route 
                  path="/" 
                  element={
                    <HomePage 
                      onOpenTrial={handleOpenTrial} 
                      onOpenQuiz={handleOpenQuiz} 
                    />
                  } 
                />
                <Route 
                  path="/disciplinas" 
                  element={
                    <DisciplinesPage 
                      onOpenTrial={handleOpenTrial} 
                      onOpenQuiz={handleOpenQuiz} 
                    />
                  } 
                />
                <Route 
                  path="/escuela" 
                  element={
                    <SchoolPage 
                      onOpenTrial={handleOpenTrial} 
                    />
                  } 
                />
                <Route 
                  path="/horarios" 
                  element={
                    <SchedulePage 
                      onOpenTrial={handleOpenTrial} 
                    />
                  } 
                />
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
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Refined Minimalist Footer */}
        <Footer />

        {/* Quick Back to Top Helper */}
        <BackToTop />

        {/* Floating WhatsApp Action Pill */}
        <WhatsAppButton />

        {/* Global Class Trial Booking Modal */}
        <TrialModal
          isOpen={trialModalOpen}
          onClose={handleCloseTrial}
          preselectedDiscipline={preselectedDiscipline}
        />

        {/* Global Dance Quiz Recommender Modal */}
        <DanceQuizModal
          isOpen={danceQuizOpen}
          onClose={handleCloseQuiz}
          onOpenTrial={handleOpenTrial}
        />
      </div>
    </SmoothScroll>
  );
}

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
