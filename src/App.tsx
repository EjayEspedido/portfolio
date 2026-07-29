import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const skillGroups = [
  ['software engineering', ['Dart', 'Java', 'Python'], ['HTML, CSS & JavaScript', 'React', 'responsive UI'], ['Git & GitHub', 'debugging', 'feature delivery']],
  ['application development', ['Flutter', 'FlutterFlow', 'mobile development'], ['Firebase & Firestore', 'Google Cloud', 'real-time data'], ['web applications', 'REST APIs', 'usability improvements']],
  ['cybersecurity', ['security monitoring', 'threat detection', 'alert analysis'], ['incident response', 'vulnerability assessment', 'web security'], ['networking foundations', 'blue team operations', 'security tooling']],
];

const navLinks = [
  { label: 'about', href: '#about' },
  { label: 'career paths', href: '#career-paths' },
  { label: 'skills', href: '#skills' },
  { label: 'work', href: '#work' },
  { label: 'experience', href: '#experience' },
  { label: 'contact', href: '#contact' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top"><img src="/ej-mark.svg" alt="" /> <span>Eiman John Espedido</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
        </button>
      </header>

      {menuOpen && <nav className="menu-panel" aria-label="Main navigation">
        {navLinks.map((link, index) => <a href={link.href} key={link.label} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{link.label}</a>)}
      </nav>}

      <main id="top">
        <section className="hero">
          <h1>A fresh Computer Engineering graduate building a career in <strong>software engineering and cybersecurity.</strong> <span>I create useful web and mobile products, while growing in blue-team security, threat detection, and incident response.</span></h1>
          <div className="hero-visual" aria-label="Abstract software and security diagram">
            <div className="board-label">SOFTWARE +<br />SECURITY</div>
            <div className="chip"><i /><i /><i /><i /><b>BUILD / DEFEND</b></div>
            <div className="trace trace-one" /><div className="trace trace-two" /><div className="trace trace-three" />
            <small>applications / cloud / security</small>
          </div>
        </section>

        <Section title="About" id="about">
          <Detail label="background">A fresh Computer Engineering graduate and junior software developer with more than two years of production application experience. I am deliberately developing in two career paths: software engineering and cybersecurity.</Detail>
          <Detail label="approach">Building software gave me a practical view of how systems, data, and users connect. Cybersecurity gives me the other half: how those systems are monitored, investigated, and made safer.</Detail>
          <Detail label="philosophy">Create useful software. Build it responsibly. Learn how to defend it. I want to contribute where solid engineering and thoughtful security meet.</Detail>
          <Detail label="education">B.S. Computer Engineering<br /><span className="detail-muted">De La Salle Lipa - Aug 2022 to Jun 2026</span></Detail>
        </Section>

        <Section title="Career paths" id="career-paths">
          <Detail label="software engineering">I build production web and mobile applications with Flutter, FlutterFlow, Firebase, Firestore, React, and cloud tools. My focus is reliable features, clear workflows, and useful real-time products.</Detail>
          <Detail label="cybersecurity">I am pursuing a blue-team cybersecurity path focused on SOC monitoring, threat detection, alert analysis, incident-response support, and application security.</Detail>
          <Detail label="where they meet">Secure software development. I bring application-building experience to cybersecurity, and use security thinking to become a more careful engineer.</Detail>
        </Section>

        <Section title="Skills" id="skills" extraClass="skills-section">
          {skillGroups.map(([label, first, second, third]) => <div className="skill-row" key={label as string}>
            <h3>{label}</h3>
            {[first, second, third].map((column, columnIndex) => <ul key={columnIndex}>{(column as string[]).map(item => <li key={item}>{item}</li>)}</ul>)}
          </div>)}
        </Section>

        <Section title="Work" id="work">
          <Detail label="featured project">FitFighter - an AI-based fitness punching game created for De La Salle Lipa. It combines impact sensors, LED feedback, and gameplay to make physical activity more engaging.</Detail>
          <Detail label="what I built">Punch detection tracks speed, reaction time, and session performance. An adaptive difficulty system uses machine-learning concepts to respond to player performance and fitness progress.</Detail>
          <Detail label="stack">Python, Raspberry Pi, React, JavaScript, machine-learning concepts, and sensor integration.</Detail>
        </Section>

        <Section title="Experience" id="experience">
          <Detail label="cybersecurity - 2025">Security Operations Center Intern<br /><span className="detail-muted">DysrupIT</span><br />Monitored system alerts and logs, supported incident-investigation workflows, participated in web-vulnerability and threat-detection exercises, and contributed usability feedback for operational security tools.</Detail>
          <Detail label="software - 2023 to 2026">Part-time Junior Software Developer<br /><span className="detail-muted">LikhaInternet Inc.</span><br />Built and maintained production Flutter and FlutterFlow applications for water-district operations, with Firebase and Firestore powering reliable real-time data.</Detail>
          <Detail label="beyond work">HexCore Labs Capture the Flag runner-up, WebDev Associate, ACES community-development volunteer, and captain of the DLSL Badminton Stallions.</Detail>
        </Section>

        <Section title="Elsewhere" id="contact">
          <Detail label="email"><a href="mailto:eimanj.espedido@gmail.com">eimanj.espedido@gmail.com</a><br /><span className="detail-muted">+63 945-869-5898</span></Detail>
          <Detail label="github"><a href="https://github.com/EjayEspedido" target="_blank" rel="noreferrer">github.com/EjayEspedido ↗</a></Detail>
          <Detail label="resumes"><a href="/Eiman_Espedido_Resume_Software_2026_07.pdf" target="_blank" rel="noreferrer">Software Engineering resume ↗</a><br /><a href="/Eiman_Espedido_Resume_Cybersecurity_2026_07.pdf" target="_blank" rel="noreferrer">Cybersecurity resume ↗</a></Detail>
          <Detail label="availability">A fresh graduate open to junior software engineering and cybersecurity roles, especially application development, SOC monitoring, blue-team operations, and secure software development.</Detail>
        </Section>
      </main>

      <footer>Design inspired by a portfolio I admired; built and adapted with AI assistance by Eiman John Espedido.</footer>
    </div>
  );
}

function Section({ title, id, children, extraClass = '' }: { title: string; id: string; children: React.ReactNode; extraClass?: string }) {
  return <section className={`editorial-section ${extraClass}`} id={id}><h2>{title}</h2><div className="section-content">{children}</div></section>;
}

function Detail({ label, children }: { label: React.ReactNode; children: React.ReactNode }) {
  return <div className="detail-row"><h3>{label}</h3><div>{children}</div></div>;
}
