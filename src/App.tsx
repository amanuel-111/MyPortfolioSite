import React, { useState } from 'react';
import { Toaster } from 'sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesSection from './components/ServicesSection';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import EducationPage from './pages/EducationPage';
import CertificationsPage from './pages/CertificationsPage';
import ContactPage from './pages/ContactPage';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Subtle Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Global Toast Notifications */}
      <Toaster position="top-right" theme="dark" richColors />

      {/* Navigation Header */}
      <Header onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Area */}
      <main className="relative z-10">
        <HomePage onOpenResume={() => setIsResumeOpen(true)} />
        <ServicesSection />
        <SkillsPage />
        <ProjectsPage />
        <EducationPage />
        <CertificationsPage />
        <ContactPage />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;