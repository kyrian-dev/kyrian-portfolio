
<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]


const skills = [
  { name: 'HTML5', icon: '🌐', category: 'Frontend' },
  { name: 'CSS3', icon: '🎨', category: 'Styling' },
  { name: 'JavaScript', icon: '⚡', category: 'Programming' },
  { name: 'Vue.js', icon: '💚', category: 'Framework' },
  { name: 'Responsive Design', icon: '📱', category: 'Web Design' },
  { name: 'Git & GitHub', icon: '🔗', category: 'Version Control' }
]

</script>

<template>
  <div>
    <header class="navbar">
      <a href="#home" class="logo">Kyrian<span>.</span></a>

      <button
        class="menu-toggle"
        type="button"
        @click="mobileMenuOpen = !mobileMenuOpen"
        :aria-expanded="mobileMenuOpen"
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <nav :class="{ open: mobileMenuOpen }" aria-label="Main navigation">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          @click="mobileMenuOpen = false"
        >
          {{ link.label }}
        </a>
      </nav>
    </header>

    <main>
      <section id="home" class="hero">
        <div class="hero-content">
          <p class="eyebrow">WELCOME TO MY PORTFOLIO</p>
          <h1>Hi, I'm <span>Kyrian.</span></h1>
          <h2>Junior Frontend Web Developer</h2>
          <p class="description">
            I build responsive, modern and user-friendly
            websites and web applications using frontend technologies.
          </p>

          <div class="hero-buttons">
            <a href="#projects" class="btn primary">View My Work →</a>
            <a href="#contact" class="btn secondary">Contact Me</a>
          </div>
        </div>

       <div class="hero-visual">
       <img
       src="/images/profile.jpg"
       alt="Kyrian - Frontend Web Developer"
       class="profile-photo"/>
    </div>
      </section>

      
<section id="about" class="section">
  <p class="eyebrow">GET TO KNOW ME</p>
  <h2>About Me</h2>

  <div class="about-content">
    <div class="about-text">
      <h3>Turning Ideas into Digital Experiences</h3>

      <p>
        I'm Kyrian, a Junior Frontend Web Developer based
        in Germany, passionate about creating modern,
        responsive, and user-friendly web applications.
      </p>

      <p>
        I completed my professional training in Web Development
        at ILS Hamburg (March 2025 – April 2026), earning
        a certificate as a Geprüfter Webentwickler.
      </p>

      <p>
        My technical skills include HTML, CSS, JavaScript,
        and Vue.js. I focus on building functional interfaces,
        writing maintainable code, and delivering smooth
        user experiences across different devices.
      </p>

      <p>
        I'm currently seeking an opportunity as a
        Junior Frontend Developer to contribute to
        meaningful projects and grow professionally.
      </p>
    </div>

    <div class="about-card">
      <h3>Quick Facts</h3>

      <p><strong>Location:</strong> Germany</p>
      <p><strong>Education:</strong> ILS Hamburg</p>
      <p><strong>Qualification:</strong> Geprüfter Webentwickler</p>
      <p><strong>Focus:</strong> Frontend Development</p>
      <p><strong>Availability:</strong> Open to Opportunities</p>
    </div>
  </div>
</section>


      
<section id="skills" class="section skills-section">
  <p class="eyebrow">MY TECH STACK</p>
  <h2>Technical Skills</h2>

  <p class="section-text">
    Technologies and tools I use to build modern,
    responsive, and interactive web applications.
  </p>

  <div class="skills-container">
    <div
      v-for="skill in skills"
      :key="skill.name"
      class="skill-card"
    >
      <div class="skill-icon">{{ skill.icon }}</div>

      <h3>{{ skill.name }}</h3>

      <p>{{ skill.category }}</p>
    </div>
  </div>
</section>
      <section id="projects" class="section">
  <p class="eyebrow">MY WORK</p>
  <h2>Featured Projects</h2>
  <p class="section-text">
    Explore four projects I've built, with live demos you can try.
  </p>

  <div class="projects-grid">
    <article class="project-card">
      <p class="project-category">PRODUCTIVITY</p>
      <h3>Taskflow Studio</h3>
      <p class="project-description">
        A task management application designed to help users
        organise their work and stay focused.
      </p>

      <ul class="project-tech" aria-label="Technologies used">
      <li>Vue.js</li>
      <li>JavaScript</li>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>Vite</li>
      </ul>
      <div class="project-actions">
  <a
    href="https://taskflow-studio-eight.vercel.app/"
    class="btn primary"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View Taskflow Studio live demo (opens in a new tab)"
  >
    Live Demo ↗
  </a>

  <a
    href="https://github.com/kyrian-dev/taskflow-studio"
    class="btn secondary"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View Taskflow Studio source code on GitHub (opens in a new tab)"
  >
    GitHub ↗
  </a>
</div>
    </article>

    <article class="project-card">
      <p class="project-category">CAREER TOOLS</p>
      <h3>Job Application Tracker</h3>
      <p class="project-description">
        An application for keeping job applications organised
        throughout the job search.
      </p>
     <ul class="project-tech" aria-label="Technologies used">
     <li>Vue.js 3</li>
     <li>JavaScript</li>
     <li>Vite</li>
     <li>CSS3</li>
     <li>HTML5</li>
     <li>Browser Local Storage</li>
     </ul>
      <div class="project-actions">
  <a
    href="https://job-application-tracker-rho-nine.vercel.app/"
    class="btn primary"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View Job Application Tracker live demo (opens in a new tab)"
  >
    Live Demo ↗
  </a>

  <a
    href="https://github.com/kyrian-dev/job-application-tracker"
    class="btn secondary"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View Job Application Tracker source code on GitHub (opens in a new tab)"
  >
    GitHub ↗
  </a>
</div>
       </article>

    <article class="project-card">
      <p class="project-category">E-COMMERCE</p>
      <h3>NovaShop</h3>
      <p class="project-description">
        An e-commerce storefront presenting products through
        a clear, approachable shopping interface.
      </p>
      <ul class="project-tech" aria-label="Technologies used">
  <li>Vue.js 3</li>
  <li>JavaScript</li>
  <li>Vite</li>
  <li>CSS3</li>
  <li>HTML5</li>

</ul>

      <div class="project-actions">
  <a
    href="https://novashop-mauve.vercel.app/"
    class="btn primary"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View NovaShop live demo (opens in a new tab)"
  >
    Live Demo ↗
  </a>

  <a
    href="https://github.com/kyrian-dev/novashop"
    class="btn secondary"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View NovaShop source code on GitHub (opens in a new tab)"
  >
    GitHub ↗
  </a>
</div>
    </article>

    <article class="project-card">
      <p class="project-category">TRANSPORT</p>
      <h3>CityTaxi</h3>
      <p class="project-description">
        A taxi booking interface designed around a simple
        and convenient ride booking experience.
      </p>
      <div class="project-actions">
        <ul class="project-tech" aria-label="Technologies used">
  <li>Vue 3 — Composition API</li>
  <li>JavaScript</li>
  <li>Vite</li>
  <li>CSS</li>
  <li>Browser localStorage</li>
</ul>
  <a
    href="https://citytaxi-jade.vercel.app/"
    class="btn primary"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View CityTaxi live demo (opens in a new tab)"
  >
    Live Demo ↗
  </a>

  <a
    href="https://github.com/kyrian-dev/citytaxi"
    class="btn secondary"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View CityTaxi source code on GitHub (opens in a new tab)"
  >
    GitHub ↗
  </a>
</div>
    </article>
  </div>
</section>

      <section id="contact" class="section">
  <p class="eyebrow">LET'S CONNECT</p>
  <h2>Contact Me</h2>

  <p class="section-text">
    Interested in working together? Get in touch.
  </p>

  <div class="contact-actions">
    <a
      class="btn primary"
      href="mailto:kyrian.dev.de@gmail.com"
    >
      Send an Email
    </a>

    <a
      href="https://github.com/kyrian-dev"
      class="btn secondary"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Kyrian's GitHub profile (opens in a new tab)"
    >
      GitHub ↗
    </a>
    <a
     href="https://www.linkedin.com/in/obiekee-kyrian-ikechukwu-563022308/"
     class="btn secondary"
     target="_blank"
     rel="noopener noreferrer"
     aria-label="Visit Kyrian's LinkedIn profile (opens in a new tab)"
    >
    LinkedIn ↗
</a>
  </div>
</section>
    </main>

    <footer>© {{ new Date().getFullYear() }} Kyrian. All rights reserved.</footer>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #0b1120;
  color: #f8fafc;
  font-family: Inter, Arial, sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

.navbar {
  height: 82px;
  max-width: 1200px;
  margin: auto;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 27px;
  font-weight: 800;
}

.logo span,
.hero h1 span,
.eyebrow {
  color: #38bdf8;
}

nav {
  display: flex;
  gap: 32px;
}

nav a {
  color: #cbd5e1;
  font-size: 14px;
  transition: color 0.2s;
}

nav a:hover {
  color: #38bdf8;
}

.menu-toggle {
  display: none;
}

.hero {
  max-width: 1200px;
  margin: auto;
  min-height: 650px;
  padding: 100px 30px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;
}

.eyebrow {
  font-size: 12px;
  letter-spacing: 3px;
  font-weight: 700;
}

.hero h1 {
  font-size: clamp(44px, 6vw, 76px);
  letter-spacing: -2px;
  margin: 20px 0 8px;
}

.hero h2 {
  font-size: clamp(24px, 3vw, 36px);
  margin: 0;
  color: #cbd5e1;
}

.description,
.section-text {
  color: #94a3b8;
  line-height: 1.9;
  font-size: 17px;
  max-width: 570px;
}

.description {
  margin: 28px 0 36px;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.btn {
  display: inline-block;
  padding: 14px 26px;
  border-radius: 9px;
  font-weight: 600;
  transition: transform 0.2s;
}

.btn:hover {
  transform: translateY(-3px);
}

.primary {
  background: #38bdf8;
  color: #08111f;
}

.secondary {
  border: 1px solid #475569;
  color: white;
}

.code-card {
  background: #111c30;
  border: 1px solid #334155;
  border-radius: 18px;
  padding: 25px;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.3);
}

.dots {
  display: flex;
  gap: 8px;
  margin-bottom: 30px;
}

.dots i {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fb7185;
}

.dots i:nth-child(2) {
  background: #fbbf24;
}

.dots i:nth-child(3) {
  background: #4ade80;
}

pre {
  overflow-x: auto;
  color: #7dd3fc;
  line-height: 2;
  font-size: 15px;
}

.section {
  max-width: 1200px;
  margin: auto;
  padding: 85px 30px;
  scroll-margin-top: 40px;
}

.section h2 {
  font-size: clamp(30px, 4vw, 44px);
  margin: 15px 0 20px;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.skill {
  padding: 14px 20px;
  border: 1px solid #334155;
  border-radius: 9px;
  background: #111c30;
}

footer {
  text-align: center;
  padding: 35px 20px;
  border-top: 1px solid #1e293b;
  color: #94a3b8;
}

@media (max-width: 768px) {
  .navbar {
    height: 72px;
    padding: 0 20px;
  }

  .menu-toggle {
    display: block;
    background: none;
    border: 0;
    color: white;
    font-size: 27px;
    cursor: pointer;
  }

  nav {
    display: none;
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    background: #111c30;
    padding: 25px;
    flex-direction: column;
    z-index: 10;
  }

  nav.open {
    display: flex;
  }

  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 70px 20px;
    gap: 35px;
  }

  .section {
    padding: 65px 20px;
  }
  }


  .hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-photo {
  width: 320px;
  height: 320px;
  max-width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  border: 4px solid #38bdf8;
  box-shadow: 0 0 50px rgba(56, 189, 248, 0.25);
}

@media (max-width: 768px) {
  .profile-photo {
    width: 250px;
    height: 250px;
  }
}

.about-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 50px;
  align-items: start;
  margin-top: 35px;
}

.about-text h3 {
  font-size: 25px;
  margin-top: 0;
  color: #f8fafc;
}

.about-text p {
  color: #94a3b8;
  font-size: 16px;
  line-height: 1.9;
  margin-bottom: 20px;
}

.about-card {
  background: #111c30;
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 30px;
}

.about-card h3 {
  color: #38bdf8;
  margin-top: 0;
  font-size: 23px;
}

.about-card p {
  color: #cbd5e1;
  line-height: 1.7;
  overflow-wrap: anywhere;
}

.about-card strong {
  color: #f8fafc;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 25px;
  }
}


.skills-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  margin-top: 40px;
}

.skill-card {
  background: #111c30;
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 30px 20px;
  text-align: center;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-6px);
  border-color: #38bdf8;
}

.skill-icon {
  font-size: 42px;
  margin-bottom: 18px;
}

.skill-card h3 {
  font-size: 19px;
  color: #f8fafc;
  margin: 0 0 10px;
}

.skill-card p {
  color: #94a3b8;
  font-size: 14px;
  margin: 0;
}



@media (max-width: 900px) {
  .skills-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .skills-container {
    grid-template-columns: 1fr;
  }

  .skill-card {
    padding: 25px 18px;
  }
}


.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin-top: 36px;
}

.project-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  padding: 30px;
  background: #111c30;
  border: 1px solid #334155;
  border-radius: 16px;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.project-card:hover {
  border-color: #38bdf8;
  transform: translateY(-4px);
}

.project-category {
  margin: 0 0 14px;
  color: #38bdf8;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
}

.project-card h3 {
  margin: 0 0 14px;
  font-size: 24px;
  overflow-wrap: anywhere;
}

.project-description {
  margin: 0 0 26px;
  color: #94a3b8;
  line-height: 1.8;
}

.project-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: auto;
}

.project-card a:focus-visible {
  outline: 3px solid #f8fafc;
  outline-offset: 5px;
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    padding: 24px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-card,
  .project-card .btn {
    transition: none;
    transform: none;
  }
}
.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
}

.project-tech li {
  padding: 6px 12px;
  border: 1px solid #334155;
  border-radius: 20px;
  background: #0b1120;
  color: #7dd3fc;
  font-size: 12px;
  line-height: 1.5;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 24px;
}

/* DARK & ELEGANT THEME */

:root {
  --page-bg: #191216;
  --surface: #281c23;
  --text: #fff5eb;
  --muted: #c5b3bb;
  --accent: #e8bd78;
  --accent-hover: #f3d39e;
  --border: #49323e;
}

body {
  background: var(--page-bg);
  color: var(--text);
}

.logo {
  color: var(--text);
}

.logo span,
.hero h1 span,
.eyebrow,
.about-card h3 {
  color: var(--accent);
}

nav a,
.hero h2,
.about-card p {
  color: var(--muted);
}

nav a:hover,
nav a:focus-visible {
  color: var(--accent);
}

.description,
.section-text,
.about-text p,
.skill-card p,
.project-description {
  color: var(--muted);
}

.about-text h3,
.about-card strong,
.skill-card h3,
.project-card h3 {
  color: var(--text);
}

.about-card,
.skill-card,
.project-card,
.code-card,
.skill {
  background: var(--surface);
  border-color: var(--border);
}

.skill-card:hover,
.project-card:hover {
  border-color: var(--accent);
}

.btn {
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.primary {
  background: var(--accent);
  color: var(--page-bg);
}

.primary:hover {
  background: var(--accent-hover);
}

.secondary {
  background: transparent;
  border-color: var(--border);
  color: var(--text);
}

.secondary:hover {
  background: var(--surface);
  border-color: var(--accent);
}

.project-category,
pre {
  color: var(--accent);
}

.project-tech li {
  background: var(--page-bg);
  border-color: var(--border);
  color: var(--accent);
}

.profile-photo {
  border-color: var(--accent);
  box-shadow: 0 0 50px rgba(196, 167, 255, 0.18);
}

.menu-toggle {
  color: var(--text);
}

footer {
  border-color: var(--border);
  color: var(--muted);
}

a:focus-visible,
button:focus-visible,
.project-card a:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 5px;
}

::selection {
  background: var(--accent);
  color: var(--page-bg);
}

@media (max-width: 768px) {
  nav {
    background: var(--surface);
    border-bottom: 1px solid var(--border);
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .btn,
  .skill-card,
  .project-card {
    transition: none;
  }

  .btn:hover,
  .skill-card:hover,
  .project-card:hover {
    transform: none;
  }
}

.primary,
.primary:hover {
  color: #191216;
}

.profile-photo {
  border-color: var(--accent);
  box-shadow: none;
}

</style>
