import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, ExternalLink, FileText, Mail, Menu, MoveUpRight, X } from 'lucide-react';

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;
const studyPdf = assetUrl('assets/vr-billboard-study.pdf');
const cvPdf = assetUrl('assets/sunny-jeon-cv.pdf');
const profilePhoto = assetUrl('assets/sunny-jeon.jpg');
const featuredFigure = assetUrl('assets/vr-billboard-figure.png');
const doi = 'https://doi.org/10.1080/01463373.2026.2629568';

const navItems = [
  ['About', '#about'],
  ['Research', '#research'],
  ['Featured study', '#featured'],
  ['Publications', '#publications'],
  ['Teaching', '#teaching'],
  ['CV', '#cv'],
  ['Contact', '#contact'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionId = decodeURIComponent(window.location.hash.slice(1));
    if (!sectionId) return;

    document.getElementById(sectionId)?.scrollIntoView();
  }, []);

  return (
    <div className="portfolio-shell" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Sunny Jeon — home">
          <span className="wordmark-mark">sj</span>
          <span>Moonsun Jeon<span className="wordmark-dot">.</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          data-testid="button-menu-toggle"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-contact" href="mailto:jeonmoo1@msu.edu" onClick={() => setMenuOpen(false)}>
            Get in touch <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <main className="page-content" id="main-content">
        <section className="hero" id="about" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="status-dot" /> Communication · Michigan State University</p>
            <h1 id="hero-title" className="serif">How do messages<br />move <em>people?</em></h1>
            <p className="hero-intro">
              I'm Moonsun 'Sunny' Jeon, a Communication Ph.D. candidate studying persuasion and social influence in health, environmental, and AI-mediated communication contexts.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#research">Explore my research <ArrowDown size={15} /></a>
              <a className="text-link" href={cvPdf} target="_blank" rel="noreferrer">View CV <MoveUpRight size={14} /></a>
            </div>
            <div className="hero-facts" aria-label="Academic profile">
              <div><span className="mono fact-label">PROGRAM</span><span>Ph.D. candidate, Communication</span></div>
              <div><span className="mono fact-label">UNIVERSITY</span><span>Michigan State University</span></div>
              <div><span className="mono fact-label">EXPECTED</span><span>May 2027</span></div>
            </div>
          </div>
          <div className="hero-portrait-wrap reveal reveal-delay">
            <div className="portrait-frame">
              <img src={profilePhoto} alt="Moonsun (Sunny) Jeon" className="portrait" width="1299" height="1624" />
              <div className="portrait-caption"><span>Moonsun “Sunny” Jeon</span><span className="mono">MSU · COMMUNICATION</span></div>
            </div>
            <div className="orbit-stamp" aria-hidden="true"><span>ATTENTION</span><i /><span>MEANING</span><i /><span>INFLUENCE</span><i /></div>
          </div>
          <div className="hero-index mono" aria-hidden="true">RESEARCH / 01 — 05</div>
        </section>

        <section className="research section-grid" id="research" aria-labelledby="research-title">
          <div className="section-label"><span className="mono">01 / RESEARCH</span><span className="section-rule" /></div>
          <div className="section-body">
            <p className="eyebrow">Questions across message, mind &amp; medium</p>
            <h2 id="research-title" className="serif section-heading">Persuasion is more than<br /><em>what we say.</em></h2>
            <div className="research-intro">
              <p>My work asks how people encounter, process, and remember persuasive messages—and how communication can meet people where they are.</p>
              <p>Across health and environmental contexts, I study the interplay of message design, cultural relevance, attention, and emerging communication technologies.</p>
            </div>
            <div className="research-themes">
              <article className="theme-row">
                <span className="theme-number mono">A</span>
                <div><h3>Message processing</h3><p>How persuasive messages capture attention, shape interpretation, and stay in memory.</p></div>
                <ArrowUpRight className="theme-arrow" size={19} aria-hidden="true" />
              </article>
              <article className="theme-row">
                <span className="theme-number mono">B</span>
                <div><h3>Cultural targeting</h3><p>When messages feel culturally matched—and what that fit means for the way they are received.</p></div>
                <ArrowUpRight className="theme-arrow" size={19} aria-hidden="true" />
              </article>
              <article className="theme-row">
                <span className="theme-number mono">C</span>
                <div><h3>Immersive &amp; AI-mediated communication</h3><p>Using virtual reality, eye-tracking, and AI-mediated communication to study persuasion in changing media environments.</p></div>
                <ArrowUpRight className="theme-arrow" size={19} aria-hidden="true" />
              </article>
            </div>
          </div>
        </section>

        <section className="featured-study" id="featured" aria-labelledby="featured-title">
          <div className="feature-topline mono"><span>FIELD NOTE 01</span><span>COMMUNICATION QUARTERLY · 2026</span></div>
          <div className="feature-layout">
            <div className="feature-copy">
              <p className="eyebrow feature-eyebrow">Featured publication</p>
              <h2 id="featured-title" className="serif">A billboard,<br />inside <em>the world.</em></h2>
              <p className="feature-deck">Introducing a virtual billboard paradigm to study visual attention and retention in culturally targeted messages.</p>
              <p className="feature-summary">In this study, participants viewed culturally matched or mismatched billboards in virtual reality. Matched messages drew more attention and were better recalled.</p>
              <div className="feature-links">
                <a className="button button-gold" href={studyPdf} target="_blank" rel="noreferrer"><FileText size={16} /> Read the paper <ArrowUpRight size={15} /></a>
                <a className="doi-link" href={doi} target="_blank" rel="noreferrer">Open DOI <ExternalLink size={14} /></a>
              </div>
            </div>
            <figure className="study-figure">
              <div className="figure-overline mono"><span>PARADIGM / VISUAL ATTENTION / RETENTION</span><span>FIG. 01</span></div>
              <a href={studyPdf} target="_blank" rel="noreferrer" aria-label="Open the featured paper, with the study figure">
                <img src={featuredFigure} alt="Study diagram showing a virtual billboard environment, example messages, and analyses of visual attention and retention" width="1386" height="590" />
              </a>
              <figcaption><span>Virtual billboard paradigm &amp; key analyses</span><span className="mono">JEON ET AL. · 2026</span></figcaption>
            </figure>
          </div>
          <div className="publication-citation">
            <BookOpen size={16} aria-hidden="true" />
            <p><strong>Jeon, M., Lim, S., Lapinski, M. K., Bente, G., Spates, S. A., &amp; Schmälzle, R.</strong> (2026). Visual attention and retention effects of a design element in culturally targeted messages: Introducing the virtual billboard paradigm. <em>Communication Quarterly, 74</em>(2), 165–195.</p>
            <a href={doi} target="_blank" rel="noreferrer">doi:10.1080/01463373.2026.2629568 <ArrowUpRight size={13} /></a>
          </div>
        </section>

        <section className="method-band" aria-label="Research methods and settings">
          <span className="mono">WAYS OF LOOKING</span>
          <div className="method-ticker"><span>MESSAGE DESIGN</span><i /> <span>EYE-TRACKING</span><i /> <span>VIRTUAL REALITY</span><i /> <span>RECALL</span><i /> <span>CULTURAL TARGETING</span></div>
          <span className="mono">01 — 05</span>
        </section>

        <section className="publications section-grid" id="publications" aria-labelledby="publications-title">
          <div className="section-label"><span className="mono">02 / SELECTED WORK</span><span className="section-rule" /></div>
          <div className="section-body">
            <p className="eyebrow">Recent collaborations &amp; findings</p>
            <h2 id="publications-title" className="serif section-heading">From the message<br /><em>to the response.</em></h2>
            <div className="publication-list">
              <article className="publication-item">
                <span className="publication-year mono">2026</span>
                <div className="publication-copy">
                  <h3><a href="https://doi.org/10.2196/83060" target="_blank" rel="noopener noreferrer">The role of fear, hope, message fatigue, and message shocking value in promoting the public’s understanding and support toward COVID-19 wastewater monitoring</a></h3>
                  <p><em>JMIR Formative Research, 10</em>, e83060 · with Y. Kim</p>
                </div>
                <a className="publication-doi" href="https://doi.org/10.2196/83060" target="_blank" rel="noopener noreferrer" aria-label="Open DOI for the COVID-19 wastewater monitoring study">DOI <ExternalLink size={13} /></a>
              </article>
              <article className="publication-item">
                <span className="publication-year mono">2026</span>
                <div className="publication-copy">
                  <h3><a href="https://doi.org/10.1177/21522715261424695" target="_blank" rel="noopener noreferrer">When distrust shapes news choice: Perceptions of mis- and disinformation and news consumption across traditional and social media outlets</a></h3>
                  <p><em>Cyberpsychology, Behavior, and Social Networking, 29</em>(3), 151–158 · with M. E. Rasul, Y. J. Oh, H. J. Cho, and C. Calabrese</p>
                </div>
                <a className="publication-doi" href="https://doi.org/10.1177/21522715261424695" target="_blank" rel="noopener noreferrer" aria-label="Open DOI for the news choice study">DOI <ExternalLink size={13} /></a>
              </article>
              <article className="publication-item">
                <span className="publication-year mono">2025</span>
                <div className="publication-copy">
                  <h3><a href="https://doi.org/10.1093/abm/kaaf094" target="_blank" rel="noopener noreferrer">Visual attention and memory retention of cannabis warning labels: An eye-tracking experiment with young adults</a></h3>
                  <p><em>Annals of Behavioral Medicine, 59</em>(1), 1–8 · with J. Liu, R. Z. Mi, and colleagues</p>
                </div>
                <a className="publication-doi" href="https://doi.org/10.1093/abm/kaaf094" target="_blank" rel="noopener noreferrer" aria-label="Open DOI for the cannabis warning label study">DOI <ExternalLink size={13} /></a>
              </article>
              <article className="publication-item">
                <span className="publication-year mono">2024</span>
                <div className="publication-copy">
                  <h3><a href="https://doi.org/10.20879/acr.2024.21.023" target="_blank" rel="noopener noreferrer">Do body positive images improve our body perception? The role of social comparison on body perception and moods</a></h3>
                  <p><em>Asian Communication Research, 21</em>(3), 385–403 · with Y. Kim and T. Bouslavskaya</p>
                </div>
                <a className="publication-doi" href="https://doi.org/10.20879/acr.2024.21.023" target="_blank" rel="noopener noreferrer" aria-label="Open DOI for the body positive images study">DOI <ExternalLink size={13} /></a>
              </article>
            </div>
            <a className="scholar-link" href="https://scholar.google.com/citations?user=vVIrzfEAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">View all publications on Google Scholar <ArrowUpRight size={14} /></a>
          </div>
        </section>

        <section className="teaching section-grid" id="teaching" aria-labelledby="teaching-title">
          <div className="section-label"><span className="mono">03 / TEACHING</span><span className="section-rule" /></div>
          <div className="section-body teaching-layout">
            <div>
              <p className="eyebrow">Teaching &amp; academic record</p>
              <h2 id="teaching-title" className="serif section-heading">An education is not so much about making a living as making a person.</h2>
              <p className="teaching-attribution">— Tara Westover, author of <em>Educated</em></p>
            </div>
            <div className="teaching-text">
              <p>Teaching and mentorship are part of the work of making communication research legible, useful, and open to questions.</p>
              <ul className="teaching-courses" aria-label="Selected teaching experience">
                <li>
                  <span className="mono course-date">SPRING &amp; FALL 2026</span>
                  <div><strong>COM 475 · Public Communication Campaign Design and Analysis</strong><p>Instructor of record · Michigan State University</p></div>
                </li>
                <li>
                  <span className="mono course-date">SUMMER 2025</span>
                  <div><strong>COM 275 · Effects of Mass Communication</strong><p>Instructor of record · Michigan State University</p></div>
                </li>
                <li>
                  <span className="mono course-date">SUMMER 2021–SPRING 2022</span>
                  <div><strong>COMM 1500 · Introduction to Interpersonal Communication</strong><p>Instructor of record · University of Georgia</p></div>
                </li>
              </ul>
              <p>For a complete record of teaching, education, presentations, and publications, please consult my CV.</p>
              <a className="underlined-link" href={cvPdf} target="_blank" rel="noreferrer">See teaching experience in my CV <ArrowRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="cv-section section-grid" id="cv" aria-labelledby="cv-title">
          <div className="section-label"><span className="mono">04 / CV</span><span className="section-rule" /></div>
          <div className="cv-card">
            <div className="cv-icon"><FileText size={25} strokeWidth={1.5} /></div>
            <div className="cv-card-copy">
              <p className="mono cv-kicker">CURRICULUM VITAE · PDF</p>
              <h2 id="cv-title" className="serif">The full academic record.</h2>
              <p>Education, research, teaching, and the details behind the work—collected in one document.</p>
            </div>
            <a href={cvPdf} className="cv-download" target="_blank" rel="noreferrer" aria-label="Open Sunny Jeon's curriculum vitae PDF">
              <span>Open CV</span><ArrowUpRight size={19} />
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-kicker mono"><span>05 / CONTACT</span><span>EAST LANSING, MICHIGAN</span></div>
          <div className="contact-content">
            <div>
              <p className="eyebrow">For conversation &amp; correspondence</p>
              <h2 id="contact-title" className="serif">Let’s keep<br /><em>the inquiry going.</em></h2>
            </div>
            <a className="email-link" href="mailto:jeonmoo1@msu.edu">
              <span className="email-icon"><Mail size={19} /></span>
              <span><small className="mono">EMAIL</small><strong>jeonmoo1@msu.edu</strong></span>
              <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="contact-bottom"><span>Moonsun “Sunny” Jeon</span><span>Communication Ph.D. Candidate · Michigan State University</span><a href="#top">Back to top ↑</a></div>
        </section>
      </main>
      <footer className="site-footer"><span>© {new Date().getFullYear()} Moonsun Jeon</span><span className="mono">ATTENTION / MEANING / INFLUENCE</span><span>Made for curious minds.</span></footer>
    </div>
  );
}

export default App;
