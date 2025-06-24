import React, { useState, useEffect } from "react";
import logoImage from "./assets/logo.svg";
import logoHorizontal from "./assets/logo-horizontal.svg";
import carousel1 from "./assets/carousel1.jpg";
import carousel2 from "./assets/carousel2.jpg";
import carousel3 from "./assets/carousel3.jpg";
import carousel4 from "./assets/carousel4.jpg";
import carousel5 from "./assets/carousel5.jpg";
import carousel6 from "./assets/carousel6.jpg";
import "./App.css";
import "animate.css";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeCarouselSlide, setActiveCarouselSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setActiveCarouselSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(carouselInterval);
  }, []);

  const carouselImages = [
    {
      src: carousel1,
      alt: "Classroom learning",
      caption: "Personalized Attention to every child",
      title: "Experience Quality Learning",
      subtitle: "at Gyaan Pathshala",
      description:
        "Join hundreds of students who have transformed their academic journey with our personalized approach to learning.",
      ctaText: "Start Your Child's Success Story",
    },
    {
      src: carousel2,
      alt: "Teacher helping student",
      caption: "Expert Faculty with 12+ Years of Experience",
      title: "Expert Teachers, Proven Results",
      subtitle: "Guiding Every Step",
      description:
        "Our experienced faculty ensures every child gets the support they need to excel.",
      ctaText: "Launch Your Child's Path to Achievement",
    },
    {
      src: carousel3,
      alt: "Student group activity",
      caption: "Interactive Learning with Phonics",
      title: "Learning Beyond Books",
      subtitle: "Fun & Interactive Sessions",
      description:
        "Engage in activities that make learning enjoyable and memorable.",
      ctaText: "Set Your Child on the Road to Success",
    },
    {
      src: carousel4,
      alt: "Creative classroom activities",
      caption: "Creative Exploration for the child",
      title: "Unleash Creativity in Every Child",
      subtitle: "Hands-On Learning Experiences",
      description:
        "Our curriculum encourages creativity and critical thinking through engaging, hands-on activities.",
      ctaText: "Ignite Your Child's Success Story",
    },
    {
      src: carousel5,
      alt: "Celebrating student achievements",
      caption: "Celebrating Success",
      title: "Recognizing Every Achievement",
      subtitle: "Motivation Through Celebration",
      description:
        "We celebrate every milestone, big or small, to keep students motivated and confident.",
      ctaText: "Begin Your Child's Journey to Success",
    },
    {
      src: carousel6,
      alt: "Safe and friendly environment",
      caption: "Safe & Supportive Environment",
      title: "A Safe Place to Grow and Learn",
      subtitle: "Supportive Environment for All",
      description:
        "Our safe and nurturing environment ensures every child feels valued and supported.",
      ctaText: "Open the Door to Your Child's Success",
    },
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
      <nav className="navbar">
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
            ⭐ JOIN NOW!
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
              ⭐ JOIN NOW!
            </button>
          </div>
        )}
      </nav>

      {/* Hero Carousel Section */}
      <section className="hero-carousel">
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
                <div className="carousel-overlay-clean">
                  <div className="carousel-content-clean">
                    <h1 className="carousel-title-clean">{image.title}</h1>
                    <h2 className="carousel-subtitle-clean">
                      {image.subtitle}
                    </h2>
                    <p className="carousel-description-clean">
                      {image.description}
                    </p>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="carousel-cta-clean"
                    >
                      {image.ctaText}
                    </button>
                  </div>
                  <div className="carousel-caption-clean">{image.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-dots-clean">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot-clean ${
                index === activeCarouselSlide ? "active" : ""
              }`}
              onClick={() => setActiveCarouselSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Hero Section - final */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <img
              src={logoHorizontal}
              alt="Gyaan Pathshala"
              className="hero-logo"
            />

            <h2 className="hero-heading">Let's Study Together!</h2>
            <p className="hero-description">
              Welcome to Gyaan Pathshala, where learning becomes a joyful
              journey! We provide comprehensive coaching from Nursery to Class 7
              for all subjects, with a focus on building strong foundations.
            </p>

            <div className="hero-buttons">
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-primary"
              >
                ⭐ JOIN NOW!
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="btn-secondary"
              >
                ▶ Learn More
              </button>
            </div>

            {/* Animated Experience Badge */}
            <div className="experience-badge animate__animated animate__infinite animate__pulse">
              🏆 12+ Years Experience!
            </div>
          </div>

          <div className="subjects-overview">
            <h3 className="subjects-title">
              📚 Coaching From Nursery to Class 7
            </h3>
            <div className="subjects-grid">
              <span className="subject-tag">
                <img
                  src="/src/assets/subjects/english.png"
                  className="subject-icons"
                  alt="English Icon"
                />
                English
              </span>
              <span className="subject-tag">
                <img
                  src="/src/assets/subjects/maths.png"
                  className="subject-icons"
                  alt="Maths Icon"
                />
                Mathematics
              </span>
              <span className="subject-tag">
                <img
                  src="/src/assets/subjects/maths.png"
                  className="subject-icons"
                  alt="Maths Icon"
                />
                Science
              </span>
              <span className="subject-tag">
                <img
                  src="/src/assets/subjects/ss.png"
                  className="subject-icons"
                  alt="Social Studies Icon"
                />
                Social Studies
              </span>
              <span className="subject-tag">
                <img
                  src="/src/assets/subjects/hindi.png"
                  className="subject-icons"
                  alt="Hindi Icon"
                />
                Hindi
              </span>
              <span className="subject-tag">
                <img
                  src="/src/assets/subjects/es.png"
                  className="subject-icons"
                  alt="Environmental Studies Icon"
                />
                Environmental Studies
              </span>
            </div>
            <p className="subjects-note">All Subjects Covered</p>
            <div className="subjects-features">
              <span className="feature-tag">Small Batches</span>
              <span className="feature-tag">Expert Teachers</span>
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
              <img
                src="/src/assets/standard-images/hand-print.png"
                className="age-group-images"
                alt="Nursery image"
              />
              <h4>🧸 Nursery</h4>
              <p>Play-based learning</p>
            </div>
            <div className="age-group">
              <img
                src="/src/assets/standard-images/kindergarten.png"
                className="age-group-images"
                alt="LKG image"
              />
              <h4>📚 LKG</h4>
              <p>Basic concepts & skills</p>
            </div>
            <div className="age-group">
              <img
                src="/src/assets/standard-images/kid.png"
                className="age-group-images"
                alt="UKG image"
              />
              <h4>✏️ UKG</h4>
              <p>School readiness</p>
            </div>
            <div className="age-group">
              <img
                src="/src/assets/standard-images/school.png"
                className="age-group-images"
                alt="Class 1-2 image"
              />
              <h4>📖 Class 1-2</h4>
              <p>Foundation building</p>
            </div>
            <div className="age-group">
              <img
                src="/src/assets/standard-images/elementary.png"
                className="age-group-images"
                alt="Class 3-5 image"
              />
              <h4>🎓 Class 3-5</h4>
              <p>Skill development</p>
            </div>
            <div className="age-group">
              <img
                src="/src/assets/standard-images/school-bag.png"
                className="age-group-images"
                alt="Class 6-7 image"
              />
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
            <div className="testimonial-content">
              <div className="stars">
                {"⭐".repeat(testimonials[activeTestimonial].rating)}
              </div>
              <p className="testimonial-text">
                "{testimonials[activeTestimonial].content}"
              </p>
              <div className="testimonial-author">
                <h4>{testimonials[activeTestimonial].name}</h4>
                <p>{testimonials[activeTestimonial].role}</p>
              </div>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`dot ${
                    index === activeTestimonial ? "active" : ""
                  }`}
                />
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
            Ready to start your child's learning journey? Contact us today!
          </p>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h3>Call Us</h3>
                  <p className="contact-name">Bina Tejura</p>
                  <a href="tel:+919998810310" className="contact-phone">
                    +91-9998810310
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <a
                    href="mailto:contact@gyaanpathshala.com"
                    className="experience-text"
                  >
                    contact@gyaanpathshala.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3>Visit Us</h3>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=5,+Sudevi+Park+Society,+Nr.+Prabhudas+Thakkar+College,+Paldi,+Ahmedabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-text"
                  >
                    5, Sudevi Park Society,
                    <br />
                    Nr. Prabhudas Thakkar College,
                    <br />
                    Paldi, Ahmedabad
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <img
                src={logoImage}
                alt="Gyaan Pathshala"
                className="contact-logo"
              />
              <h3>Ready to Join?</h3>
              <p>
                Give your child the best start in their educational journey.
                Contact us today!
              </p>
              <a
                href="https://wa.me/+919998810310/?text='Hi! I want to inquire about tuition with Gyaan Pathshala. What is the best time to call you?'"
                className="cta-button"
              >
                ⭐ JOIN NOW!
              </a>
              <div className="cta-features">
                <span className="cta-tag">⚡ Quick Enrollment</span>
                <span className="cta-tag">🛡️ Safe Environment</span>
              </div>
            </div>
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
              <h4>Contact Info</h4>
              <p>+91-9998810310</p>
              <p>Paldi, Ahmedabad</p>
              <p>12+ Years Experience</p>
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

      {/* Floating Action Button */}
      <a
        href="https://wa.me/+919998810310/?text='Hi! I want to inquire about tuition with Gyaan Pathshala. What is the best time to call you?'"
        className="fab"
        title="Contact Us"
      >
        <img src="/src/assets/whatsapp.png" width="35px" />
      </a>
    </div>
  );
}

export default App;
