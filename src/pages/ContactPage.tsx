import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('amatila111@gmail.com');
    setCopiedEmail(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText('0932158839');
    setCopiedPhone(true);
    toast.success('Phone number copied to clipboard!');
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('_subject', subject || 'New message from portfolio visitor!');

    try {
      const response = await fetch('https://formsubmit.co/ajax/amatila111@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success('Thank you! Your message has been sent successfully.');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        toast.error('Could not send message. Please try emailing directly.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try emailing directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-4 h-4" /> Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Connect & <span className="text-cyan-400">Collaborate</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg">
            Have a project, job opportunity, or technical inquiry? Feel free to reach out via message or direct contact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</h4>
                  <a href="mailto:amatila111@gmail.com" className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                    amatila111@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="p-2 text-slate-400 hover:text-cyan-400 bg-slate-900 rounded-lg border border-slate-800 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone / Mobile</h4>
                  <a href="tel:0932158839" className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                    0932158839
                  </a>
                </div>
              </div>
              <button
                onClick={copyPhone}
                className="p-2 text-slate-400 hover:text-cyan-400 bg-slate-900 rounded-lg border border-slate-800 transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Primary Location</h4>
                <p className="text-sm font-bold text-white">Bahir Dar, Ethiopia</p>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">LinkedIn Profile</h4>
                  <a
                    href="https://www.linkedin.com/in/amanuel-tilahun-03231226a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-indigo-300 transition-colors"
                  >
                    View LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message details here..."
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
