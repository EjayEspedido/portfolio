import { useState } from 'react';
import { Mail, Send, FileText, CheckCircle, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <footer id="contact" className="py-24 relative border-t border-zinc-800/80 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="text-xs mono-text text-zinc-500 uppercase tracking-widest">06 / Contact</div>
          <h2 className="text-3xl sm:text-5xl font-bold text-zinc-100 tracking-tight editorial-title">
            Let's Collaborate <br />
            <span className="font-extralight text-zinc-400">on Systems & Hardware.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Details */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-card-minimal p-6 rounded-2xl border border-zinc-800 space-y-6">
              <h3 className="text-base font-bold text-zinc-100">Direct Contact</h3>
              
              <div className="space-y-3 text-xs mono-text">
                <a 
                  href="mailto:alex.chen.eng@example.com" 
                  className="flex items-center justify-between text-zinc-300 hover:text-white p-3 bg-zinc-900 rounded-xl border border-zinc-800 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-zinc-400" />
                    <span>alex.chen.eng@example.com</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>
                
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-between text-zinc-300 hover:text-white p-3 bg-zinc-900 rounded-xl border border-zinc-800 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current text-zinc-400" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    <span>github.com/alexchen-ce</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>

                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-between text-zinc-300 hover:text-white p-3 bg-zinc-900 rounded-xl border border-zinc-800 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current text-zinc-400" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    <span>linkedin.com/in/alexchen-ce</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>
              </div>

              <div className="pt-2 border-t border-zinc-800">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 mono-text text-xs transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <div className="bg-card-minimal p-8 rounded-2xl border border-zinc-800">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h3 className="text-lg font-bold text-zinc-100">Message Transmitted</h3>
                  <p className="text-xs text-zinc-400 font-light max-w-sm mx-auto">
                    Thank you. I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs mono-text text-zinc-400 hover:text-white underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs mono-text text-zinc-400 mb-1">NAME</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs mono-text text-zinc-400 mb-1">EMAIL</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs mono-text text-zinc-400 mb-1">INQUIRY / MESSAGE</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Discussing hardware architecture, embedded engineering, or research..."
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs mono-text transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Authorship Footer inspired by seanoshea.me */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs mono-text text-zinc-500 gap-4">
          <p>Designed & Developed by <strong>Alex Chen</strong></p>
          <p>Built with React, Vite & Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
}
