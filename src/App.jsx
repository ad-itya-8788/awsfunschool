import { useEffect, useState } from "react";
import "./App.css";

// Mandatory Disclosure dropdown: [label shown, PDF file name inside public/pdf/]
// File names match the files in your public/pdf folder exactly.
const disclosureFiles = [
  ["Building Safety Certificate", "Buildingsafetycertificate.pdf"],
  ["Fire Safety Certificate", "Firesafetycertificate.pdf"],
  ["Recognition Certificate", "RECOGNITION_CERTIFICATE.pdf"],
  ["NOC", "schoolAcknowledgmentNOC.pdf"],
  ["Society Certificate", "SocityCertificate.pdf"],
  ["Water & Sanitisation Report", "watersanitisationreport.pdf"],
  ["Water Testing Report", "WaterTestingReport.pdf"],
  ["Fee Structure", "Feestructure.pdf"],
  ["PTA", "PTA.pdf"],
  ["Public Disclosure", "publicdiscloure.pdf"],
  ["SMC", "SMC.pdf"],
  ["Teacher List", "Teacherlist.pdf"],
  ["Academic Calendar", "AcademicCalendar.pdf"],
  ["Certification Proforma", "Certificate.pdf"],
  ["Mandatory Disclosure", "MandatoryDisclosure.pdf"],
];

// Menu order: Home, About Us, Mandatory Disclosure (dropdown), Our Features, Gallery, Contact Us
const navLinks = [
  ["home", "Home"],
  ["aboutus", "About Us"],
  ["ourFeatures", "Our Features"],
  ["meetOurTeam", "Gallery"],
  ["contact", "Contact Us"],
];

const aboutTabs = [
  {
    id: "vision",
    label: "OUR VISION",
    title: "Our Vision",
    image: "mission.jpg",
    text: "Our vision is to shape the individual for a better tomorrow and to make not just learned individuals but a better human being",
  },
  {
    id: "aim",
    label: "OUR AIM",
    title: "Our Aim",
    image: "vision.jpg",
    text: "Aaryans World School aims to create a supportive and inclusive environment where students are encouraged to explore their personal best in all aspects of school life",
  },
  {
    id: "goal",
    label: "OUR GOAL",
    title: "Our Goal",
    image: "goal.jpg",
    text: "We are passionate about creating a learning institution that is dynamic and constantly seeking to meet the needs of the present as well as the future, while learning from the ethical and moral value systems. It is our commitment to mould children to be open to thinking globally and be prepared for life anywhere in the world.",
  },
];

const features = [
  "Teacher–Student Ratio 1:20",
  "Ample Play Equipment",
  "Emotional Quotient Therapy",
  "Parent Assessment",
  "Plenty of Teaching Aids",
  "Facial Recognition Device",
  "Instant SMS System",
  "Methodology Workshops",
];

const galleryImages = ["G_1.jpeg", "G_2.jpeg", "G_3.jpeg"];


const CubeIcon = () => (
  <>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [disclosureOpen, setDisclosureOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("vision");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false); // header turns white
  const [showTop, setShowTop] = useState(false); // back-to-top button

  const activeAbout = aboutTabs.find((tab) => tab.id === activeTab) || aboutTabs[0];

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = "home";
      navLinks.forEach(([id]) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      });
      setActiveSection(current);
      setScrolled(window.scrollY > 10);
      setShowTop(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setDisclosureOpen(false);
  };

  const renderLink = ([id, label]) => (
    <a key={id} href={`#${id}`} className={activeSection === id ? "active" : ""} onClick={closeMenu}>
      {label}
    </a>
  );

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Aaryans Fun School home">
            <img src="/images/aaryanfunschoollogo.jpeg" alt="Aaryans Fun School logo" />
          </a>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navigation Menu">
            {navLinks.slice(0, 2).map(renderLink)}
            <div className="disclosure-menu">
              <button
                type="button"
                className="disclosure-trigger"
                aria-expanded={disclosureOpen}
                onClick={() => setDisclosureOpen((open) => !open)}
              >
                Mandatory Disclosure
              </button>
              <div className={`disclosure-list ${disclosureOpen ? "is-open" : ""}`}>
                {disclosureFiles.map(([label, file]) => (
                  <a
                    key={file}
                    href={`/pdf/${file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
            {navLinks.slice(2).map(renderLink)}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1 className="hero-title">
                <span className="hero-title-main">Aaryans World School</span>
                <span className="hero-title-location">Belgavi</span>
              </h1>
              <a className="primary-button" href="#contact">Contact Us <span aria-hidden="true">›</span></a>
            </div>
            <div className="hero-art">
              <div className="hero-orbit" />
              <img src="/images/schoolphoto.jpg" alt="Aaryans World School campus" />
            </div>
          </div>
        </section>

        <section className="section-pad about-section" id="aboutus">
          <div className="container">
            <div className="section-heading">
              <h2>About Us</h2>
            </div>
            <div className="about-layout">
              <div className="about-tabs" role="tablist" aria-label="About school">
                {aboutTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    className={activeTab === tab.id ? "about-tab active" : "about-tab"}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <article className="about-panel" role="tabpanel">
                <img src={`/images/${activeAbout.image}`} alt={activeAbout.title} />
                <h3>{activeAbout.title}</h3>
                <p>{activeAbout.text}</p>
                <span className="about-more" aria-hidden="true">›</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section-pad leadership-section">
          <div className="container leadership-grid">
            <div className="leader-image">
              <img src="/images/director.jpg" alt="School director" />
            </div>
            <div className="leader-copy">
              <span className="eyebrow">Director Desk</span>
              <h2>“Excellence is a continuous process and not an accident.” – Dr. A. P. J. Abdul Kalam</h2>
              <p>I feel privileged to be the Director of such an excellent and vibrant school, which offers great opportunities for its students. It is our goal to help each and every student succeed.</p>
              <p>Aaryans World School was established with a passion for providing high-quality education, with equal importance given to co-curricular activities. Our carefully designed curriculum helps children meet global standards while developing a sense of social responsibility towards society and the nation.</p>
              <p>We view education as the development of the whole child. Along with intellectual growth, we focus on students’ physical, social and personal development. We offer students opportunities to become confident, thoughtful young people who are prepared for future responsibilities.</p>
              <p>Every student is unique, with their own skills, interests and aspirations. We believe education should support the natural, harmonious and progressive development of each child’s abilities.</p>
            </div>
          </div>
        </section>

        <section className="section-pad leadership-section leadership-reverse">
          <div className="container leadership-grid">
            <div className="leader-image">
              <img src="/images/principal.jpeg" alt="School leadership" />
            </div>
            <div className="leader-copy">
              <span className="eyebrow">Director Panel</span>
              <h2>“Education is the kindling of a flame, not the filling of a vessel.”</h2>
              <p>Keeping this thought in mind, Aaryans World School brings together competent teachers, child-centred infrastructure and experienced administration. We strive to create a safe, supportive environment that balances academics, sports, artistic expression and social opportunities. Childhood and learning should be joyful, and we work to make that possible.</p>
              <p>Our commitment to students’ emotional growth goes hand in hand with intellectual excellence. Through experiential learning, students develop self-esteem, self-awareness and confidence. Sharing ideas, analysing situations and expressing themselves clearly are important skills we encourage every day.</p>
              <p>“Educating the mind without educating the heart is no education at all.” — Aristotle</p>
              <p>We give students strong values and the confidence to become articulate, enlightened young citizens who can participate in global society with dignity, honour and integrity.</p>
              <p>Alongside academic programmes, we nurture each child’s interests in dance, theatre, music and a variety of sports. Sports are an integral part of our curriculum and support students’ mental and physical development.</p>
              <p>We continually update our teaching tools and techniques. Through interactive teaching methods and healthy teacher–student relationships, we aim to make learning engaging and accessible.</p>
              <p>We also encourage students to participate in social causes and develop compassion, truthfulness, honesty and sensitivity towards others and the community.</p>
            </div>
          </div>
        </section>

        <section className="section-pad features-section" id="ourFeatures">
          <div className="container">
            <div className="section-heading">
              <h2>Our Features</h2>
            </div>
            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature}>
                  <svg className="feature-watermark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <CubeIcon />
                  </svg>
                  <div className="feature-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <CubeIcon />
                    </svg>
                  </div>
                  <h3>{feature}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad gallery-section" id="meetOurTeam">
          <div className="container">
            <div className="section-heading">
              <h2>Gallery</h2>
            </div>
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <button
                  className="gallery-item"
                  key={image}
                  type="button"
                  aria-label={`Open gallery image ${index + 1}`}
                  onClick={() => setLightboxImage(image)}
                >
                  <img src={`/images/${image}`} alt={`Aaryans Fun School gallery ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad contact-section" id="contact">
          <div className="container">
            <div className="section-heading">
              <h2>Contact Us</h2>
            </div>
            <div className="contact-grid">
              <div className="contact-photo">
                <img src="/images/contact_us.jpeg" alt="Students participating in a school activity" />
              </div>
              <div className="contact-card">
                <h3>Aaryans Fun School</h3>
                <p>Address: Near Laxmi Complex, beside Iyengar Bakery, opposite Dr. Baliga Hospital, 2nd Cross, Main Road, Sadashiv Nagar, Belagavi.</p>
                <p className="contact-mob">
                  Mob. <a href="tel:8496034488">84960 34488</a> / <a href="tel:8497034488">84970 34488</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()}. Design with{" "}
            <a
              href="https://www.aayojanai.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", fontWeight: "600" }}
            >
              Aayojan AI
            </a>
            <span className="footer-heart">♥</span> by aaryansfunschool.
          </p>
        </div>
      </footer>

      <a
        href="#home"
        className={`scroll-top ${showTop ? "visible" : ""}`}
        aria-label="Scroll to top"
      >
        ↑
      </a>

      {lightboxImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer" onClick={() => setLightboxImage(null)}>
          <button type="button" className="lightbox-close" aria-label="Close image" onClick={() => setLightboxImage(null)}>×</button>
          <img src={`/images/${lightboxImage}`} alt="School gallery enlarged" onClick={(event) => event.stopPropagation()} />
        </div>
      )}

    </div>
  );
}

export default App;
