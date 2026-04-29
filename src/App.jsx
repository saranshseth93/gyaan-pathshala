import React, { useState, useEffect } from "react";
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
import "./App.css";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCarouselSlide, setActiveCarouselSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);

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

  const carouselImages = [
    { src: carousel1, alt: "Teacher giving personalized attention to a child", caption: "Personalized attention for every child" },
    { src: carousel2, alt: "Experienced teacher guiding students", caption: "12+ years of teaching experience" },
    { src: carousel3, alt: "Students learning through interactive activities", caption: "Learning through phonics and activities" },
    { src: carousel4, alt: "Creative hands-on classroom activities", caption: "Hands-on creative exploration" },
    { src: carousel5, alt: "Celebrating student achievements together", caption: "Celebrating every milestone" },
    { src: carousel6, alt: "Safe and supportive learning environment", caption: "A safe place to grow and learn" },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent of Class 3 Student",
      content:
        "My daughter's confidence has improved tremendously since joining Gyaan Pathshala. The individual attention is remarkable.",
      rating: 5,
    },
    {
      name: "Rajesh Patel",
      role: "Parent of UKG Student",
      content:
        "The phonics program here is excellent. My son learned to read much faster than expected.",
      rating: 5,
    },
    {
      name: "Meera Gandhi",
      role: "Parent of Class 5 Student",
      content:
        "Bina ma'am's experience shows in her teaching. My child's performance has improved significantly.",
      rating: 5,
    },
    {
      name: "Sonal Desai",
      role: "Parent of Class 2 Student",
      content:
        "The teachers are patient and truly care about each child. My son looks forward to every class!",
      rating: 5,
    },
    {
      name: "Amit Trivedi",
      role: "Parent of Nursery Student",
      content:
        "We noticed a big difference in our daughter's social and academic skills within a few months. Highly recommended!",
      rating: 5,
    },
    {
      name: "Neha Joshi",
      role: "Parent of Class 6 Student",
      content:
        "The small batch size ensures my child gets the attention she needs. The progress reports are very helpful.",
      rating: 4,
    },
    {
      name: "Vikram Shah",
      role: "Parent of Class 4 Student",
      content:
        "Gyaan Pathshala's approach is holistic. My son enjoys learning and has become much more confident.",
      rating: 5,
    },
    {
      name: "Rupal Mehta",
      role: "Parent of LKG Student",
      content:
        "The environment is safe and nurturing. My child settled in quickly and loves her teachers!",
      rating: 5,
    },
    {
      name: "Deepak Soni",
      role: "Parent of Class 7 Student",
      content:
        "We are grateful for the personal attention and regular updates. My daughter's grades have improved a lot.",
      rating: 4,
    },
    {
      name: "Anjali Bhatt",
      role: "Parent of Class 1 Student",
      content:
        "The creative activities and interactive sessions keep my child engaged and excited to learn.",
      rating: 5,
    },
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-brand">
            <img src={logoImage} alt="Gyaan Pathshala Logo" className="nav-logo" />
          </div>

          <div className="nav-menu">
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="nav-link"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("subjects")}
              className="nav-link"
            >
              Subjects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link"
            >
              Contact
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
            Call Now
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <button
              onClick={() => scrollToSection("about")}
              className="mobile-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="mobile-link"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("subjects")}
              className="mobile-link"
            >
              Subjects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="mobile-link"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="mobile-join-btn"
            >
              Call Now
            </button>
          </div>
        )}
      </nav>

      {/* Hero Carousel */}
      <section className="hero-carousel" aria-label="Photos from Gyaan Pathshala">
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
            <p className="carousel-caption">{carouselImages[activeCarouselSlide].caption}</p>
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
                Enquire Now
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
              <p className="hero-label">Nursery to Class 7 Coaching in Paldi, Ahmedabad</p>
              <h2 className="hero-heading">Building strong foundations, one child at a time.</h2>
              <p className="hero-description">
                Personalized attention in small batches of 8-12 students. All subjects covered with 12+ years of proven results.
              </p>
              <div className="hero-buttons">
                <a
                  href="https://wa.me/+919998810310/?text='Hi! I want to inquire about tuition with Gyaan Pathshala. What is the best time to call you?'"
                  className="btn-primary"
                >
                  Message on WhatsApp
                </a>
                <a href="tel:+919998810310" className="btn-secondary">
                  Call +91-99988 10310
                </a>
              </div>
              <p className="hero-trust">Trusted by 500+ families since 2012</p>
            </div>
            <div className="hero-right">
              <h3 className="hero-right-title">What We Teach</h3>
              <div className="subjects-grid">
                <span className="subject-tag">
                  <img src={englishIcon} className="subject-icons" alt="" />
                  English
                </span>
                <span className="subject-tag">
                  <img src={mathsIcon} className="subject-icons" alt="" />
                  Maths
                </span>
                <span className="subject-tag">
                  <img src={scienceIcon} className="subject-icons" alt="" />
                  Science
                </span>
                <span className="subject-tag">
                  <img src={ssIcon} className="subject-icons" alt="" />
                  Social Studies
                </span>
                <span className="subject-tag">
                  <img src={hindiIcon} className="subject-icons" alt="" />
                  Hindi
                </span>
                <span className="subject-tag">
                  <img src={esIcon} className="subject-icons" alt="" />
                  EVS
                </span>
              </div>
              <div className="hero-differentiators">
                <div className="hero-diff-item">
                  <span className="hero-diff-number">1:8</span>
                  <span className="hero-diff-label">Teacher-Student Ratio</span>
                </div>
                <div className="hero-diff-item">
                  <span className="hero-diff-number">95%</span>
                  <span className="hero-diff-label">Parent Satisfaction</span>
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
              <div className="stat-icon">🏆</div>
              <div className="stat-number">12+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">👥</div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Students Taught</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">😊</div>
              <div className="stat-number">95%</div>
              <div className="stat-label">Parent Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🎯</div>
              <div className="stat-number">1:8</div>
              <div className="stat-label">Teacher-Student Ratio</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Gyaan Pathshala</h2>
          <p className="section-description">
            At Gyaan Pathshala, we believe that every child has the potential to
            excel. Our mission is to provide quality education that nurtures
            young minds and builds strong academic foundations.
          </p>

          <div className="age-groups">
            <div className="age-group">
              <img src={handPrintImg} className="age-group-images" alt="Nursery image" />
              <h4>🧸 Nursery</h4>
              <p>Play-based learning</p>
            </div>
            <div className="age-group">
              <img src={kindergartenImg} className="age-group-images" alt="LKG image" />
              <h4>📚 LKG</h4>
              <p>Basic concepts & skills</p>
            </div>
            <div className="age-group">
              <img src={kidImg} className="age-group-images" alt="UKG image" />
              <h4>✏️ UKG</h4>
              <p>School readiness</p>
            </div>
            <div className="age-group">
              <img src={schoolImg} className="age-group-images" alt="Class 1-2 image" />
              <h4>📖 Class 1-2</h4>
              <p>Foundation building</p>
            </div>
            <div className="age-group">
              <img src={elementaryImg} className="age-group-images" alt="Class 3-5 image" />
              <h4>🎓 Class 3-5</h4>
              <p>Skill development</p>
            </div>
            <div className="age-group">
              <img src={schoolBagImg} className="age-group-images" alt="Class 6-7 image" />
              <h4>🏆 Class 6-7</h4>
              <p>Advanced concepts</p>
            </div>
          </div>

          <div className="why-choose">
            <h3>Why Parents Choose Us</h3>
            <div className="choose-grid">
              <div className="choose-item">
                <div className="choose-icon">🛡️</div>
                <h4>Safe Environment</h4>
                <p>Verified staff & secure premises</p>
              </div>
              <div className="choose-item">
                <div className="choose-icon">📈</div>
                <h4>Proven Results</h4>
                <p>Consistent grade improvement</p>
              </div>
              <div className="choose-item">
                <div className="choose-icon">📅</div>
                <h4>Flexible Timing</h4>
                <p>Convenient schedules</p>
              </div>
              <div className="choose-item">
                <div className="choose-icon">💬</div>
                <h4>Regular Updates</h4>
                <p>Weekly progress reports</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Salient Features</h2>
          <p className="section-description">
            Discover what makes Gyaan Pathshala the perfect choice for your
            child's educational journey
          </p>

          <div className="features-list">
            <div className="feature-item">
              <div className="feature-header">
                <div className="feature-icon">❤️</div>
                <div className="feature-info">
                  <h3>Child-Oriented Learning</h3>
                  <span className="feature-stat">95% Parent Satisfaction</span>
                </div>
              </div>
              <p className="feature-description">
                Teaching methodology designed for young minds with
                age-appropriate methods and stress-free environment.
              </p>
              <div className="feature-highlights">
                <span className="highlight">✓ Age-appropriate methods</span>
                <span className="highlight">✓ Interactive activities</span>
                <span className="highlight">✓ Stress-free environment</span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-header">
                <div className="feature-icon">📖</div>
                <div className="feature-info">
                  <h3>Reading Improvement</h3>
                  <span className="feature-stat">80% Reading Improvement</span>
                </div>
              </div>
              <p className="feature-description">
                Comprehensive reading program focusing on phonetic approach,
                comprehension, and vocabulary building.
              </p>
              <div className="feature-highlights">
                <span className="highlight">✓ Phonetic reading</span>
                <span className="highlight">✓ Comprehension development</span>
                <span className="highlight">✓ Vocabulary building</span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-header">
                <div className="feature-icon">✏️</div>
                <div className="feature-info">
                  <h3>Handwriting Enhancement</h3>
                  <span className="feature-stat">
                    90% Handwriting Enhancement
                  </span>
                </div>
              </div>
              <p className="feature-description">
                Structured program for proper letter formation, spacing, and
                writing posture development.
              </p>
              <div className="feature-highlights">
                <span className="highlight">✓ Proper grip training</span>
                <span className="highlight">✓ Letter formation</span>
                <span className="highlight">✓ Fine motor skills</span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-header">
                <div className="feature-icon">👥</div>
                <div className="feature-info">
                  <h3>Individual Attention</h3>
                  <span className="feature-stat">
                    1:8 Teacher-Student Ratio
                  </span>
                </div>
              </div>
              <p className="feature-description">
                Small batch sizes ensuring personalized attention and customized
                learning plans for every child.
              </p>
              <div className="feature-highlights">
                <span className="highlight">✓ Small batches (8-12)</span>
                <span className="highlight">✓ Personalized plans</span>
                <span className="highlight">✓ Progress tracking</span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-header">
                <div className="feature-icon">🔊</div>
                <div className="feature-info">
                  <h3>Phonics Program</h3>
                  <span className="feature-stat">85% Reading Fluency Gain</span>
                </div>
              </div>
              <p className="feature-description">
                Systematic phonics instruction using multi-sensory approaches
                for independent reading skills.
              </p>
              <div className="feature-highlights">
                <span className="highlight">✓ Systematic instruction</span>
                <span className="highlight">✓ Multi-sensory approach</span>
                <span className="highlight">✓ Independent reading</span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-header">
                <div className="feature-icon">🏆</div>
                <div className="feature-info">
                  <h3>12+ Years Experience</h3>
                  <span className="feature-stat">500+ Students Taught</span>
                </div>
              </div>
              <p className="feature-description">
                Proven expertise with experienced faculty and consistently
                excellent results.
              </p>
              <div className="feature-highlights">
                <span className="highlight">✓ Proven methods</span>
                <span className="highlight">✓ Experienced faculty</span>
                <span className="highlight">✓ Excellent results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title dark-background">What Parents Say</h2>
          <div className="testimonial-container">
            <div className="testimonial-scroll">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="stars">
                    {"⭐".repeat(testimonial.rating)}
                  </div>
                  <p className="testimonial-text">
                    "{testimonial.content}"
                  </p>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects" className="subjects-section">
        <div className="container">
          <h2 className="section-title">Subjects We Teach</h2>
          <p className="section-description">
            Comprehensive curriculum covering all essential subjects for
            holistic development
          </p>

          <div className="subjects-list">
            <div className="subject-item">
              <div className="subject-icon">📝</div>
              <h3>English</h3>
              <p>Reading, Writing, Grammar</p>
            </div>
            <div className="subject-item">
              <div className="subject-icon">🔢</div>
              <h3>Mathematics</h3>
              <p>Numbers & Problem Solving</p>
            </div>
            <div className="subject-item">
              <div className="subject-icon">🔬</div>
              <h3>Science</h3>
              <p>Basic Concepts & Experiments</p>
            </div>
            <div className="subject-item">
              <div className="subject-icon">🏛️</div>
              <h3>Social Studies</h3>
              <p>History, Geography & Civics</p>
            </div>
            <div className="subject-item">
              <div className="subject-icon">🇮🇳</div>
              <h3>Hindi</h3>
              <p>Language Skills & Literature</p>
            </div>
            <div className="subject-item">
              <div className="subject-icon">🌱</div>
              <h3>Environmental Studies</h3>
              <p>Nature & Environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title dark-background">Get In Touch</h2>
          <p className="section-description dark-background">
            Ready to start your child's learning journey? Reach out today!
          </p>
          <div className="contact-content">
            <img src={logoImage} alt="Gyaan Pathshala" className="contact-logo" />
            <div>
              <h3 className="contact-cta-heading">Ready to Join?</h3>
              <p className="contact-cta-subtext">
                Give your child the best start in their educational journey.
              </p>
            </div>
            <div className="contact-buttons">
              <a
                href="https://wa.me/+919998810310/?text='Hi! I want to inquire about tuition with Gyaan Pathshala. What is the best time to call you?'"
                className="contact-btn-whatsapp"
              >
                <img src={whatsappIcon} width="24" height="24" alt="" />
                WhatsApp Us
              </a>
              <a href="tel:+919998810310" className="contact-btn-phone">
                📞 Call +91-9998810310
              </a>
            </div>
            <p className="contact-teacher">
              Speak with <strong>Bina Tejura</strong>, Lead Educator
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
              <h3>Gyaan Pathshala</h3>
              <p>Learn Better, Achieve More</p>
              <p className="footer-tagline">
                Nurturing young minds for over 12 years with dedication and
                excellence.
              </p>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <button onClick={() => scrollToSection("about")}>About</button>
              <button onClick={() => scrollToSection("features")}>
                Features
              </button>
              <button onClick={() => scrollToSection("subjects")}>
                Subjects
              </button>
              <button onClick={() => scrollToSection("contact")}>
                Contact
              </button>
            </div>

            <div className="footer-contact">
              <h4>Contact</h4>
              <p>+91-9998810310</p>
              <p>12+ Years Experience</p>
              <div className="footer-social">
                <a href="https://www.instagram.com/gyaan.pathshala/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © 2024 Gyaan Pathshala. All rights reserved. | Designed with ❤️
              for better education
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
          WhatsApp
        </a>
        <a href="tel:+919998810310" className="sticky-cta-phone">
          📞 Call Now
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
