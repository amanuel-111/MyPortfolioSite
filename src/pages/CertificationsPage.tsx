import React, { useState, useMemo } from 'react';
import { Award, Search, CheckCircle2, ExternalLink } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: 'O\'Reilly' | 'LinkedIn' | 'Gebeya';
  category: 'Cybersecurity' | 'Networking' | 'Hardware & SysAdmin' | 'Graphics & Tech' | 'Programming';
  credentialUrl?: string;
}

const certificationsList: Certification[] = [
  { id: '8', title: "Frontend Engineering (React.js)", issuer: "Gebeya", category: "Programming", credentialUrl: "https://uvljtyfpcvoddiiaydhv.supabase.co/storage/v1/object/public/lms/certificates/CERT-0286eb4a-1dd14833-1774433356118-gc9mc1l5a09.pdf" },
  { id: '1', title: "Linux Server Administration", issuer: "Gebeya", category: "Hardware & SysAdmin", credentialUrl: "https://uvljtyfpcvoddiiaydhv.supabase.co/storage/v1/object/public/lms/certificates/CERT-50b02eed-1dd14833-1760521895358-t9gorarx1i.pdf" },
  { id: '2', title: "Network Tech & Security", issuer: "O'Reilly", category: "Cybersecurity", credentialUrl: "https://www.credly.com/badges/5c027e61-3ad6-4f7b-a797-8cac9d466d60/public_url" },
  { id: '3', title: "CCNA Starting Course Completion", issuer: "O'Reilly", category: "Networking", credentialUrl: "https://www.credly.com/badges/8f7f2177-2080-45da-982d-9dba136d82f0/public_url" },
  { id: '4', title: "CompTIA Network+ training", issuer: "O'Reilly", category: "Networking", credentialUrl: "https://www.credly.com/badges/d83b3f9e-c82c-4996-a8df-c865f0580b2a/public_url" },
  { id: '5', title: "Cisco CCST IT Support", issuer: "O'Reilly", category: "Hardware & SysAdmin", credentialUrl: "https://www.credly.com/badges/14f8957a-3907-49bd-b137-ddc5ea4be10f/public_url" },
  { id: '7', title: "Cybersecurity for IT Professionals", issuer: "LinkedIn", category: "Cybersecurity", credentialUrl: "https://www.linkedin.com/learning/certificates/bf249e550a6ce5aedf4f989fa74044889342b8115c722a7d0960bcfe0dc47759" },
];

const categories = ['All', 'Networking', 'Hardware & SysAdmin', 'Cybersecurity', 'Programming'];

const CertificationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCerts = useMemo(() => {
    return certificationsList.filter((cert) => {
      const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            cert.issuer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4" /> Professional Qualifications
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Industry <span className="text-cyan-400">Certifications</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg">
            Holds 7 professional certifications and course completions across Networking, Cybersecurity, Linux Systems, and IT Support.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 max-w-5xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search certifications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900/80 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
            />
          </div>
        </div>

        {/* Certifications Grid */}
        {filteredCerts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2.5 py-0.5 text-[10px] font-mono font-semibold rounded-md border ${
                        cert.issuer === "O'Reilly"
                          ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/50'
                          : cert.issuer === 'LinkedIn'
                          ? 'bg-indigo-950/60 text-indigo-300 border-indigo-800/50'
                          : 'bg-emerald-950/60 text-emerald-300 border-emerald-800/50'
                      }`}
                    >
                      {cert.issuer}
                    </span>

                    <span className="text-[10px] font-semibold text-slate-400">
                      {cert.category}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white leading-snug flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{cert.title}</span>
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-medium text-slate-400">
                  <span>Verified Credential / Course Completion</span>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Credentials <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-400 text-sm">
            No certifications found matching "{searchTerm}". Try another search term.
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsPage;
