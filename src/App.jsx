import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "./i18n/LanguageContext";
import logoImage from "./assets/logo.svg";
import logoHorizontal from "./assets/logo-horizontal.svg";
import carousel1 from "./assets/carousel1.jpg";
import carousel2 from "./assets/carousel2.jpg";
import carousel3 from "./assets/carousel3.jpg";
import carousel4 from "./assets/carousel4.jpg";
import carousel5 from "./assets/carousel5.jpg";
import carousel6 from "./assets/carousel6.jpg";
import whatsappIcon from "./assets/whatsapp.png";
import englishIcon from "./assets/subjects/english.png";
import mathsIcon from "./assets/subjects/maths.png";
import scienceIcon from "./assets/subjects/science.png";
import ssIcon from "./assets/subjects/ss.png";
import hindiIcon from "./assets/subjects/hindi.png";
import esIcon from "./assets/subjects/es.png";
import handPrintImg from "./assets/standard-images/hand-print.png";
import kindergartenImg from "./assets/standard-images/kindergarten.png";
import kidImg from "./assets/standard-images/kid.png";
import schoolImg from "./assets/standard-images/school.png";
import elementaryImg from "./assets/standard-images/elementary.png";
import schoolBagImg from "./assets/standard-images/school-bag.png";
import {
  Trophy,
  Users,
  Smile,
  Target,
  Baby,
  BookOpen,
  Pencil,
  GraduationCap,
  Award,
  Shield,
  TrendingUp,
  Calendar,
  MessageCircle,
  Heart,
  Volume2,
  PenLine,
  Calculator,
  FlaskConical,
  Landmark,
  Languages,
  Sprout,
} from "lucide-react";
import "./App.css";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCarouselSlide, setActiveCarouselSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const testimonialRef = useRef(null);

  const scrollTestimonials = (direction) => {
    const el = testimonialRef.current;
    if (!el) return;
    const scrollAmount = 320;
    el.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setActiveCarouselSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(carouselInterval);
  }, []);

  useEffect(() => {
    const langMap = { en: "en", hi: "hi", gu: "gu" };
    document.documentElement.lang = langMap[language] || "en";
  }, [language]);

  const carouselImages = [
    { src: carousel1, alt: "Teacher giving personalized attention to a child" },
    { src: carousel2, alt: "Experienced teacher guiding students" },
    { src: carousel3, alt: "Students learning through interactive activities" },
    { src: carousel4, alt: "Creative hands-on classroom activities" },
    { src: carousel5, alt: "Celebrating student achievements together" },
    { src: carousel6, alt: "Safe and supportive learning environment" },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-brand">
            <img
              src={logoImage}
              alt="Gyaan Pathshala Logo"
              className="nav-logo"
            />
          </div>

          <div className="nav-menu">
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="nav-link"
            >
              {t.nav.features}
            </button>
            <button
              onClick={() => scrollToSection("subjects")}
              className="nav-link"
            >
              {t.nav.subjects}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link"
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="lang-switcher">
            <button
              onClick={() => setLanguage("en")}
              className={language === "en" ? "lang-active" : ""}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("hi")}
              className={language === "hi" ? "lang-active" : ""}
            >
              हिं
            </button>
            <button
              onClick={() => setLanguage("gu")}
              className={language === "gu" ? "lang-active" : ""}
            >
              ગુ
            </button>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="join-btn"
          >
            {t.nav.callNow}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <button
              onClick={() => scrollToSection("about")}
              className="mobile-link"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="mobile-link"
            >
              {t.nav.features}
            </button>
            <button
              onClick={() => scrollToSection("subjects")}
              className="mobile-link"
            >
              {t.nav.subjects}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="mobile-link"
            >
              {t.nav.contact}
            </button>
            <div className="lang-switcher">
              <button
                onClick={() => setLanguage("en")}
                className={language === "en" ? "lang-active" : ""}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("hi")}
                className={language === "hi" ? "lang-active" : ""}
              >
                हिं
              </button>
              <button
                onClick={() => setLanguage("gu")}
                className={language === "gu" ? "lang-active" : ""}
              >
                ગુ
              </button>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="mobile-join-btn"
            >
              {t.nav.callNow}
            </button>
          </div>
        )}
      </nav>

      {/* Hero Carousel */}
      <section
        className="hero-carousel"
        aria-label="Photos from Gyaan Pathshala"
      >
        <div className="carousel-wrapper-fullwidth">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${activeCarouselSlide * 100}%)` }}
          >
            {carouselImages.map((image, index) => (
              <div key={index} className="carousel-slide-fullwidth">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="carousel-image-fullwidth"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Hero bar */}
        <div className="carousel-bottom">
          <div className="carousel-bottom-inner">
            <p className="carousel-caption">
              {t.carousel.captions[activeCarouselSlide]}
            </p>
            <div className="carousel-controls">
              <div className="carousel-dots">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === activeCarouselSlide ? "active" : ""}`}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setActiveCarouselSlide(index)}
                  />
                ))}
              </div>
              <a
                href="https://wa.me/+919998810310/?text='Hi! I want to inquire about tuition with Gyaan Pathshala. What is the best time to call you?'"
                className="carousel-cta"
              >
                {t.carousel.enquireNow}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Info Strip */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-label">{t.hero.label}</p>
              <h2 className="hero-heading">{t.hero.heading}</h2>
              <p className="hero-description">{t.hero.description}</p>
              <p className="hero-trust">{t.hero.trust}</p>
            </div>
            <div className="hero-right">
              <h3 className="hero-right-title">{t.hero.whatWeTeach}</h3>
              <div className="subjects-grid">
                <span className="subject-tag">
                  <img src={englishIcon} className="subject-icons" alt="" />
                  {t.subjects.english}
                </span>
                <span className="subject-tag">
                  <img src={mathsIcon} className="subject-icons" alt="" />
                  {t.subjects.maths}
                </span>
                <span className="subject-tag">
                  <img src={scienceIcon} className="subject-icons" alt="" />
                  {t.subjects.science}
                </span>
                <span className="subject-tag">
                  <img src={ssIcon} className="subject-icons" alt="" />
                  {t.subjects.socialStudies}
                </span>
                <span className="subject-tag">
                  <img src={hindiIcon} className="subject-icons" alt="" />
                  {t.subjects.hindi}
                </span>
                <span className="subject-tag">
                  <img src={esIcon} className="subject-icons" alt="" />
                  {t.subjects.evs}
                </span>
              </div>
              <div className="hero-differentiators">
                <div className="hero-diff-item">
                  <span className="hero-diff-number">1:5</span>
                  <span className="hero-diff-label">
                    {t.hero.teacherStudentRatio}
                  </span>
                </div>
                <div className="hero-diff-item">
                  <span className="hero-diff-number">95%</span>
                  <span className="hero-diff-label">
                    {t.hero.parentSatisfaction}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <Trophy size={32} />
              </div>
              <div className="stat-number">12+</div>
              <div className="stat-label">{t.stats.yearsExperience}</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Users size={32} />
              </div>
              <div className="stat-number">500+</div>
              <div className="stat-label">{t.stats.studentsTaught}</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Smile size={32} />
              </div>
              <div className="stat-number">95%</div>
              <div className="stat-label">{t.stats.parentSatisfaction}</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Target size={32} />
              </div>
              <div className="stat-number">1:5</div>
              <div className="stat-label">{t.stats.teacherStudentRatio}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-description">{t.about.description}</p>

          <div className="age-groups">
            <div className="age-group">
              <img
                src={handPrintImg}
                className="age-group-images"
                alt="Nursery image"
              />
              <h4>
                <Baby size={18} className="inline-icon" /> {t.about.nursery}
              </h4>
              <p>{t.about.nurseryDesc}</p>
            </div>
            <div className="age-group">
              <img
                src={kindergartenImg}
                className="age-group-images"
                alt="LKG image"
              />
              <h4>
                <BookOpen size={18} className="inline-icon" /> {t.about.lkg}
              </h4>
              <p>{t.about.lkgDesc}</p>
            </div>
            <div className="age-group">
              <img src={kidImg} className="age-group-images" alt="UKG image" />
              <h4>
                <Pencil size={18} className="inline-icon" /> {t.about.ukg}
              </h4>
              <p>{t.about.ukgDesc}</p>
            </div>
            <div className="age-group">
              <img
                src={schoolImg}
                className="age-group-images"
                alt="Class 1-2 image"
              />
              <h4>
                <BookOpen size={18} className="inline-icon" /> {t.about.class12}
              </h4>
              <p>{t.about.class12Desc}</p>
            </div>
            <div className="age-group">
              <img
                src={elementaryImg}
                className="age-group-images"
                alt="Class 3-5 image"
              />
              <h4>
                <GraduationCap size={18} className="inline-icon" />{" "}
                {t.about.class35}
              </h4>
              <p>{t.about.class35Desc}</p>
            </div>
            <div className="age-group">
              <img
                src={schoolBagImg}
                className="age-group-images"
                alt="Class 6-7 image"
              />
              <h4>
                <Award size={18} className="inline-icon" /> {t.about.class67}
              </h4>
              <p>{t.about.class67Desc}</p>
            </div>
          </div>

          <div className="why-choose">
            <h3>{t.about.whyChoose}</h3>
            <div className="choose-grid">
              <div className="choose-item">
                <div className="choose-icon">
                  <Shield size={28} />
                </div>
                <h4>{t.about.safeEnvironment}</h4>
                <p>{t.about.safeEnvironmentDesc}</p>
              </div>
              <div className="choose-item">
                <div className="choose-icon">
                  <TrendingUp size={28} />
                </div>
                <h4>{t.about.provenResults}</h4>
                <p>{t.about.provenResultsDesc}</p>
              </div>
              <div className="choose-item">
                <div className="choose-icon">
                  <Calendar size={28} />
                </div>
                <h4>{t.about.flexibleTiming}</h4>
                <p>{t.about.flexibleTimingDesc}</p>
              </div>
              <div className="choose-item">
                <div className="choose-icon">
                  <MessageCircle size={28} />
                </div>
                <h4>{t.about.regularUpdates}</h4>
                <p>{t.about.regularUpdatesDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">{t.features.title}</h2>
          <p className="section-description">{t.features.description}</p>

          <div className="features-list">
            <div className="feature-item">
              <div className="feature-header">
                <div className="feature-icon">
                  <Heart size={24} />
                </div>
                <div className="feature-info">
                  <h3>{t.features.childOriented}</h3>
                  <span className="feature-stat">
                    {t.features.childOrientedStat}
                  </span>
                </div>
              </div>
              <p className="feature-description">
                {t.features.childOrientedDesc}
              </p>
              <div className="feature-highlights">
                <span className="highlight">
                  ✓ {t.features.childOrientedH1}
                </span>
                <span className="highlight">
                  ✓ {t.features.childOrientedH2}
                </span>
                <span className="highlight">
                  ✓ {t.features.childOrientedH3}
                </span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-header">
                <div className="feature-icon">
                  <BookOpen size={24} />
                </div>
                <div className="feature-info">
                  <h3>{t.features.reading}</h3>
                  <span className="feature-stat">{t.features.readingStat}</span>
                </div>
              </div>
              <p className="feature-description">{t.features.readingDesc}</p>
              <div className="feature-highlights">
                <span className="highlight">✓ {t.features.readingH1}</span>
                <span className="highlight">✓ {t.features.readingH2}</span>
                <span className="highlight">✓ {t.features.readingH3}</span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-header">
                <div className="feature-icon">
                  <Pencil size={24} />
                </div>
                <div className="feature-info">
                  <h3>{t.features.handwriting}</h3>
                  <span className="feature-stat">
                    {t.features.handwritingStat}
                  </span>
                </div>
              </div>
              <p className="feature-description">
                {t.features.handwritingDesc}
              </p>
              <div className="feature-highlights">
                <span className="highlight">✓ {t.features.handwritingH1}</span>
                <span className="highlight">✓ {t.features.handwritingH2}</span>
                <span className="highlight">✓ {t.features.handwritingH3}</span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-header">
                <div className="feature-icon">
                  <Users size={24} />
                </div>
                <div className="feature-info">
                  <h3>{t.features.individual}</h3>
                  <span className="feature-stat">
                    {t.features.individualStat}
                  </span>
                </div>
              </div>
              <p className="feature-description">{t.features.individualDesc}</p>
              <div className="feature-highlights">
                <span className="highlight">✓ {t.features.individualH1}</span>
                <span className="highlight">✓ {t.features.individualH2}</span>
                <span className="highlight">✓ {t.features.individualH3}</span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-header">
                <div className="feature-icon">
                  <Volume2 size={24} />
                </div>
                <div className="feature-info">
                  <h3>{t.features.phonics}</h3>
                  <span className="feature-stat">{t.features.phonicsStat}</span>
                </div>
              </div>
              <p className="feature-description">{t.features.phonicsDesc}</p>
              <div className="feature-highlights">
                <span className="highlight">✓ {t.features.phonicsH1}</span>
                <span className="highlight">✓ {t.features.phonicsH2}</span>
                <span className="highlight">✓ {t.features.phonicsH3}</span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-header">
                <div className="feature-icon">
                  <Trophy size={24} />
                </div>
                <div className="feature-info">
                  <h3>{t.features.experience}</h3>
                  <span className="feature-stat">
                    {t.features.experienceStat}
                  </span>
                </div>
              </div>
              <p className="feature-description">{t.features.experienceDesc}</p>
              <div className="feature-highlights">
                <span className="highlight">✓ {t.features.experienceH1}</span>
                <span className="highlight">✓ {t.features.experienceH2}</span>
                <span className="highlight">✓ {t.features.experienceH3}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title dark-background">
            {t.testimonials.title}
          </h2>
          <div className="testimonial-container">
            <button
              className="testimonial-arrow testimonial-arrow-prev"
              onClick={() => scrollTestimonials("prev")}
              aria-label="Previous testimonials"
            >
              &#8249;
            </button>
            <div className="testimonial-scroll" ref={testimonialRef}>
              {t.testimonials.items.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="stars">{"⭐".repeat(5)}</div>
                  <p className="testimonial-text">"{testimonial.content}"</p>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="testimonial-arrow testimonial-arrow-next"
              onClick={() => scrollTestimonials("next")}
              aria-label="Next testimonials"
            >
              &#8250;
            </button>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects" className="subjects-section">
        <div className="container">
          <h2 className="section-title">{t.subjectsSection.title}</h2>
          <p className="section-description">{t.subjectsSection.description}</p>

          <div className="subjects-list">
            <div className="subject-item">
              <div className="subject-icon-box">
                <PenLine size={28} />
              </div>
              <div className="subject-text">
                <h3>{t.subjectsSection.english}</h3>
                <p>{t.subjectsSection.englishDesc}</p>
              </div>
            </div>
            <div className="subject-item">
              <div className="subject-icon-box">
                <Calculator size={28} />
              </div>
              <div className="subject-text">
                <h3>{t.subjectsSection.maths}</h3>
                <p>{t.subjectsSection.mathsDesc}</p>
              </div>
            </div>
            <div className="subject-item">
              <div className="subject-icon-box">
                <FlaskConical size={28} />
              </div>
              <div className="subject-text">
                <h3>{t.subjectsSection.science}</h3>
                <p>{t.subjectsSection.scienceDesc}</p>
              </div>
            </div>
            <div className="subject-item">
              <div className="subject-icon-box">
                <Landmark size={28} />
              </div>
              <div className="subject-text">
                <h3>{t.subjectsSection.socialStudies}</h3>
                <p>{t.subjectsSection.socialStudiesDesc}</p>
              </div>
            </div>
            <div className="subject-item">
              <div className="subject-icon-box">
                <Languages size={28} />
              </div>
              <div className="subject-text">
                <h3>{t.subjectsSection.hindi}</h3>
                <p>{t.subjectsSection.hindiDesc}</p>
              </div>
            </div>
            <div className="subject-item">
              <div className="subject-icon-box">
                <Sprout size={28} />
              </div>
              <div className="subject-text">
                <h3>{t.subjectsSection.evs}</h3>
                <p>{t.subjectsSection.evsDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title dark-background">{t.contact.title}</h2>
          <p className="section-description dark-background">
            {t.contact.description}
          </p>
          <div className="contact-content">
            <img
              src={logoImage}
              alt="Gyaan Pathshala"
              className="contact-logo"
            />
            <div>
              <h3 className="contact-cta-heading">{t.contact.readyToJoin}</h3>
              <p className="contact-cta-subtext">{t.contact.subtext}</p>
            </div>
            <div className="contact-buttons">
              <a
                href="https://wa.me/+919998810310/?text='Hi! I want to inquire about tuition with Gyaan Pathshala. What is the best time to call you?'"
                className="contact-btn-whatsapp"
              >
                <img src={whatsappIcon} width="24" height="24" alt="" />
                {t.contact.whatsappUs}
              </a>
              <a href="tel:+919998810310" className="contact-btn-phone">
                {t.contact.callUs}
              </a>
            </div>
            <p className="contact-teacher">
              {t.contact.speakWith} <strong>Bina Tejura</strong>,{" "}
              {t.contact.leadEducator}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img
                src={logoImage}
                alt="Gyaan Pathshala"
                className="footer-logo"
              />
              <p>{t.footer.tagline}</p>
              <p className="footer-tagline">{t.footer.nurturing}</p>
            </div>

            <div className="footer-links">
              <h4>{t.footer.quickLinks}</h4>
              <button onClick={() => scrollToSection("about")}>
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection("features")}>
                {t.nav.features}
              </button>
              <button onClick={() => scrollToSection("subjects")}>
                {t.nav.subjects}
              </button>
              <button onClick={() => scrollToSection("contact")}>
                {t.nav.contact}
              </button>
            </div>

            <div className="footer-contact">
              <h4>{t.footer.contact}</h4>
              <a href="tel:+919998810310">+91-9998810310</a>
              <div className="footer-social">
                <a
                  href="https://www.instagram.com/gyaan.pathshala/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.footer.instagram}
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>{t.footer.copyright} | Designed with ❤️ for better education</p>
            <p className="footer-credit">
              Made by{" "}
              <a
                href="https://www.pixelpundit.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pixel Pundit
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom CTA - Mobile Only */}
      <div className="sticky-cta">
        <a
          href="https://wa.me/+919998810310/?text='Hi! I want to inquire about tuition with Gyaan Pathshala. What is the best time to call you?'"
          className="sticky-cta-whatsapp"
        >
          {t.sticky.whatsapp}
        </a>
        <a href="tel:+919998810310" className="sticky-cta-phone">
          {t.sticky.callNow}
        </a>
      </div>

      {/* Floating Action Button */}
      <a
        href="https://wa.me/+919998810310/?text='Hi! I want to inquire about tuition with Gyaan Pathshala. What is the best time to call you?'"
        className="fab"
        title="Contact Us"
      >
        <img src={whatsappIcon} width="35px" />
      </a>
    </div>
  );
}

export default App;
