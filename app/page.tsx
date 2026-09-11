'use client'

import { useEffect } from 'react'

const NAV_ITEMS = [
  ['#about', 'About'],
  ['#skills', 'Skills'],
  ['#certs', 'Achievements & Certs'],
  ['#projects', 'Projects'],
  ['#hackclub', 'Hack Club'],
  ['#path', 'Path'],
  ['#contact', 'Contact'],
]

const SKILL_GROUPS: { cat: string; items: { icon: string; name: string; level: string }[] }[] = [
  {
    cat: '⚡ Microcontrollers & Hardware',
    items: [
      { icon: '🔲', name: 'Arduino', level: 'ADVANCED' },
      { icon: '📡', name: 'ESP32 / ESP8266', level: 'ADVANCED' },
      { icon: '🍓', name: 'Raspberry Pi', level: 'INTERMEDIATE' },
      { icon: '🔌', name: 'PCB Design', level: 'INTERMEDIATE' },
      { icon: '🔧', name: 'Sensors & Actuators', level: 'ADVANCED' },
    ],
  },
  {
    cat: '☁️ IoT Platforms & Protocols',
    items: [
      { icon: '🌐', name: 'MQTT', level: 'ADVANCED' },
      { icon: '☁️', name: 'AWS IoT', level: 'INTERMEDIATE' },
      { icon: '📊', name: 'Blynk / ThingSpeak', level: 'ADVANCED' },
      { icon: '🔗', name: 'I2C / SPI / UART', level: 'ADVANCED' },
    ],
  },
  {
    cat: '🎨 3D Modelling & Design',
    items: [
      { icon: '🧊', name: 'Fusion 360', level: 'PROFICIENT' },
      { icon: '📐', name: 'CAD Design', level: 'PROFICIENT' },
      { icon: '🖨️', name: '3D Printing', level: 'INTERMEDIATE' },
      { icon: '🔧', name: 'KiCad (PCB)', level: 'INTERMEDIATE' },
    ],
  },
  {
    cat: '🤖 AI & Data Tools',
    items: [
      { icon: '🧠', name: 'Google AI Essentials', level: 'CERTIFIED' },
      { icon: '📊', name: 'Microsoft Power BI', level: 'INTERMEDIATE' },
      { icon: '💬', name: 'ChatGPT / AI Tools', level: 'ADVANCED' },
      { icon: '📈', name: 'Microsoft Excel', level: 'INTERMEDIATE' },
    ],
  },
  {
    cat: '💻 Programming',
    items: [
      { icon: '⚙️', name: 'C / C++', level: 'ADVANCED' },
      { icon: '🐍', name: 'Python', level: 'INTERMEDIATE' },
      { icon: '🌐', name: 'HTML / CSS', level: 'BEGINNER' },
    ],
  },
]

const CERTS = [
  { badge: '🌐', issuer: 'Google / Coursera', name: 'Google AI Essentials', date: '// Jul 2025 · 5-Course Specialization', category: 'AI & Data' },
  { badge: '☁️', issuer: 'Amazon Web Services', name: 'IoT: Onboarding Raspberry Pi using AWS Greengrass', date: '// Mar 2026', category: 'Cloud & IoT' },
  { badge: '📊', issuer: 'Skill Nation', name: 'AI Dashboards using Microsoft Power BI', date: '// Aug 2025 · Microsoft Certified Trainer', category: 'Analytics' },
  { badge: '🐍', issuer: 'AI for Techies', name: 'Python using AI Workshop', date: '// Visualizations · Debugging · AI Coding', category: 'Programming' },
  { badge: '🤖', issuer: 'be10x', name: 'AI Tools & ChatGPT Workshop', date: '// Presentations · Data Analysis · Coding with AI', category: 'AI & Productivity' },
  { badge: '🔒', issuer: 'LearnTube.ai', name: 'Cybersecurity Assessment', date: '// Aug 2025', category: 'Cybersecurity' },
  { badge: '📈', issuer: 'Coursera', name: 'Getting Started with Microsoft Excel', date: '// Mar 2026', category: 'Productivity' },
  { badge: '💻', issuer: 'Microsoft / Coursera', name: 'IT Support Professional', date: '// Professional Certificate', category: 'IT Support' },
  { badge: '🎓', issuer: 'SBOA School & Junior College', name: 'Course & Add-on Certificates', date: '// Nov 2024', category: 'Education' },
  { badge: '💡', issuer: 'HP LIFE', name: 'Leadership & Management', date: '// Business & Soft Skills', category: 'Leadership' },
  { badge: '💼', issuer: 'HP LIFE', name: 'Business Fundamentals', date: '// Entrepreneurial Skills', category: 'Business' },
  { badge: '🚀', issuer: 'HP LIFE', name: 'Entrepreneurship', date: '// Startup & Innovation Mindset', category: 'Entrepreneurship' },
  { badge: '📜', issuer: 'Course Certificate', name: 'Anbumathi Chezhian Course Certificate', date: '// Certificate of completion', category: 'Coursework' },
  { badge: '🌱', issuer: 'Pasumai Hackathon', name: 'Pasumai Hackathon Participation', date: '// Innovation · Sustainability · Teamwork', category: 'Hackathon' },
  { badge: '🚁', issuer: 'Drone Piloting', name: 'Drone Piloting Certificate', date: '// Flight operations · Practical training', category: 'Aviation' },
  { badge: '📈', issuer: 'Finance Shark Tank', name: 'Finance Shark Tank Achievement', date: '// Finance · Pitching · Entrepreneurship', category: 'Finance' },
]

const PROFILE_IMAGES = {
  portrait: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1786615459232-9RuRdMx5Arw9XLNKi9XPwPie9aiFfP.png',
  balconyPose: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260909-WA0021-8IcaDrFBHy4ZIv2A1GQm6oWT2kSxQw.jpg',
  balconyPortrait: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260909-WA0020-NYfAywJ3TcBtP0usRxTuaJcMmdJWns.jpg',
}

const PROJECTS = [
  {
    tag: 'Hardware · Productivity',
    title: 'Simple Hackpad ⌨️',
    desc: 'A custom 4-key productivity macro pad powered by the Seeed Studio XIAO RP2040 and KMK Firmware. Features dedicated shortcuts for KiCad, Spotify, and system tools with an idle RGB rainbow effect.',
    stack: ['Python', 'RP2040', 'KMK Firmware', 'KiCad'],
    link: 'https://github.com/anbu2203/simple-hackpad',
    linkLabel: '⭐ 2  → View on GitHub',
  },
  {
    tag: 'Electronics · PCB Design',
    title: 'DARK SIGNAL 💡',
    desc: 'An electronics project exploring how chips like the 555 timer and 4017 counter interact to create sequential LED patterns. Built following the Hack Club guide with custom PCB design.',
    stack: ['555 Timer', '4017 Counter', 'PCB Design', 'Hack Club'],
    link: 'https://github.com/anbu2203/DARK-SIGNAL',
    linkLabel: '⭐ 1  → View on GitHub',
  },
  {
    tag: 'IoT · Raspberry Pi',
    title: 'RaspCamX 📷',
    desc: 'A high image quality camera system built on Raspberry Pi — capturing sharp, detailed images with custom configurations for embedded imaging applications.',
    stack: ['Raspberry Pi', 'Camera Module', 'Python', 'Embedded'],
    link: 'https://github.com/anbu2203/raspcamx',
    linkLabel: '⭐ 1  → View on GitHub',
  },
  {
    tag: 'Hardware · Portable Computing',
    title: 'WinXport 💻',
    desc: 'A compact, portable Windows-based tablet built using a LattePanda single-board computer, a 7-inch IPS capacitive touch display, and a battery-powered setup — a fully custom handheld PC.',
    stack: ['LattePanda', 'IPS Display', 'Windows', 'SBC'],
    link: 'https://github.com/anbu2203/winXport',
    linkLabel: '⭐ 1  → View on GitHub',
  },
  {
    tag: 'Hardware · Dev Board',
    title: 'ASTRADEV 🚀',
    desc: 'A custom development board engineered for modern computing and embedded innovation. Designed for flexibility, scalability, and reliability — built for students, makers, and developers to prototype freely.',
    stack: ['PCB Design', 'Embedded', 'Dev Board', 'KiCad'],
    link: 'https://github.com/anbu2203/ASTRADEV',
    linkLabel: '⭐ 1  → View on GitHub',
  },
]

const TIMELINE = [
  {
    year: '2021 — START',
    title: 'First Steps in Electronics',
    place: 'Self-taught / Online Resources',
    desc: 'Began exploring basic electronics — breadboard circuits, resistors, LEDs, and the fundamentals of electricity. Built first Arduino blink project.',
  },
  {
    year: '2022',
    title: 'Deep Dive into Microcontrollers',
    place: 'Arduino & Embedded Systems',
    desc: 'Mastered Arduino programming, worked with motors, sensors, displays, and communication protocols like I2C and SPI.',
  },
  {
    year: '2023',
    title: 'Entered the World of IoT',
    place: 'ESP32, Wi-Fi & Cloud Platforms',
    desc: 'Transitioned to ESP32/ESP8266, learned MQTT, connected devices to cloud platforms like Blynk and ThingSpeak. Earned NPTEL IoT certification.',
  },
  {
    year: '2024',
    title: 'Building Real-World Projects',
    place: 'Hackathons & Independent Projects',
    desc: 'Started building complete IoT systems end-to-end. Participated in hackathons, earned certifications, and began sharing projects publicly.',
  },
  {
    year: '2025 — NOW',
    title: 'Expanding into AI + IoT',
    place: 'Edge AI & Advanced Protocols',
    desc: 'Exploring the convergence of AI with IoT — edge computing, TinyML, and building smarter, more autonomous connected systems.',
  },
]

export default function Page() {
  useEffect(() => {
    // Scroll reveal
    const reveals = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    reveals.forEach((el) => observer.observe(el))

    // Active nav link highlight
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-links a'))
    const onScroll = () => {
      let current = ''
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      navLinks.forEach((a) => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--neon)' : ''
      })
    }
    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="portfolio">
      {/* NAV */}
      <nav>
        <div className="nav-logo">AC_PORTFOLIO</div>
        <div className="nav-links">
          {NAV_ITEMS.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-portrait-wrap">
          <div className="hero-portrait-frame">
            <img
              src={PROFILE_IMAGES.portrait}
              alt="Professional portrait of Anbumathi Chezhian"
              className="hero-portrait"
            />
          </div>
          <div className="portrait-caption">PROFILE / 2026</div>
        </div>
        <div className="hero-tag">Electronics &amp; IoT Developer</div>
        <h1 className="hero-name">
          ANBUMATHI
          <br />
          <span className="highlight">CHEZHIAN</span>
        </h1>
        <div className="hero-role">{'// Building the connected world, one circuit at a time'}</div>
        <p className="hero-desc">
          Passionate about bridging the physical and digital worlds through embedded systems, IoT
          solutions, and electronics innovation. From sensor to cloud — I build it all.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Get in Touch
          </a>
        </div>

        <svg
          className="hero-circuit"
          viewBox="0 0 340 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="100" y="100" width="140" height="140" rx="8" stroke="#00f5d4" strokeWidth="1.5" />
          <rect x="120" y="120" width="100" height="100" rx="4" stroke="#00f5d4" strokeWidth="1" />
          <circle cx="170" cy="170" r="20" stroke="#00f5d4" strokeWidth="1.5" />
          <circle cx="170" cy="170" r="5" fill="#00f5d4" />
          <line x1="0" y1="170" x2="100" y2="170" stroke="#00f5d4" strokeWidth="1" />
          <line x1="240" y1="170" x2="340" y2="170" stroke="#00f5d4" strokeWidth="1" />
          <line x1="170" y1="0" x2="170" y2="100" stroke="#00f5d4" strokeWidth="1" />
          <line x1="170" y1="240" x2="170" y2="340" stroke="#00f5d4" strokeWidth="1" />
          <circle cx="100" cy="170" r="4" fill="#00f5d4" />
          <circle cx="240" cy="170" r="4" fill="#00f5d4" />
          <circle cx="170" cy="100" r="4" fill="#00f5d4" />
          <circle cx="170" cy="240" r="4" fill="#00f5d4" />
          <rect x="40" y="160" width="20" height="20" rx="2" stroke="#7b2fff" strokeWidth="1" />
          <rect x="280" y="160" width="20" height="20" rx="2" stroke="#7b2fff" strokeWidth="1" />
          <rect x="160" y="40" width="20" height="20" rx="2" stroke="#7b2fff" strokeWidth="1" />
          <rect x="160" y="280" width="20" height="20" rx="2" stroke="#7b2fff" strokeWidth="1" />
        </svg>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="reveal">
          <div className="sec-label">{'// 01 — about.me'}</div>
          <h2 className="sec-title">
            Who I <span>Am</span>
          </h2>
          <div className="divider" />
          <div className="about-grid">
            <div className="about-text">
              <p>
                I&apos;m <strong className="strong-white">Anbumathi Chezhian</strong>, an Electronics
                &amp; IoT Project Developer with a passion for creating smart, connected systems that
                solve real-world problems. My work lives at the intersection of hardware and software
                — where circuits meet code.
              </p>
              <p>
                I design and build end-to-end IoT solutions: from schematic design and PCB layout, to
                embedded firmware, cloud integration, and data dashboards. Every project I take on
                starts with curiosity and ends with something that actually works.
              </p>
              <p>
                When I&apos;m not building prototypes or flashing microcontrollers, I&apos;m exploring
                new sensors, protocols, and platforms to push what&apos;s possible in the connected
                ecosystem.
              </p>
              <br />
              <a href="#contact" className="btn btn-outline btn-sm">
                Let&apos;s Build Something →
              </a>
            </div>
            <div className="about-visuals">
              <div className="about-photo about-photo-tall">
                <img src={PROFILE_IMAGES.balconyPortrait} alt="Anbumathi Chezhian on a rooftop terrace" />
              </div>
              <div className="about-photo about-photo-wide">
                <img src={PROFILE_IMAGES.balconyPose} alt="Anbumathi Chezhian posing on a rooftop terrace" />
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-num">10+</span>
                <span className="stat-lbl">IoT Projects</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">10+</span>
                <span className="stat-lbl">Certificates &amp; Achievements</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">3+</span>
                <span className="stat-lbl">Years Learning</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">∞</span>
                <span className="stat-lbl">Curiosity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="reveal">
          <div className="sec-label">{'// 02 — tech.stack'}</div>
          <h2 className="sec-title">
            Tech <span>Skills</span>
          </h2>
          <div className="divider" />

          {SKILL_GROUPS.map((group) => (
            <div key={group.cat}>
              <div className="skill-cat">{group.cat}</div>
              <div className="skills-grid">
                {group.items.map((s) => (
                  <div className="skill-chip" key={s.name}>
                    <span className="skill-icon" aria-hidden="true">
                      {s.icon}
                    </span>
                    <div className="skill-name">{s.name}</div>
                    <div className="skill-level">{s.level}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certs">
        <div className="reveal">
          <div className="sec-label">{'// 03 — achievements.unlock'}</div>
          <h2 className="sec-title">
            Certificates &amp; <span>Achievements</span>
          </h2>
          <div className="divider" />

          <div className="cert-banner">
            <div style={{ fontSize: '2.5rem' }} aria-hidden="true">
              🏆
            </div>
            <div>
              <div className="cert-banner-label">Special Recognition</div>
              <div className="cert-banner-title">India&apos;s Top 1,000 Rankers of 2025</div>
              <div className="cert-banner-sub">
                LearnTube.ai &nbsp;·&nbsp; Backed by Google for Startups &nbsp;·&nbsp; Featured in
                Times of India
              </div>
            </div>
          </div>

          <div className="certs-grid">
            {CERTS.map((c) => (
              <div className="cert-card" key={c.name}>
                <div className="cert-badge" aria-hidden="true">
                  {c.badge}
                </div>
                <div className="cert-category">{c.category}</div>
                <div className="cert-issuer">{c.issuer}</div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-date">{c.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="reveal">
          <div className="sec-label">{'// 04 — projects.build()'}</div>
          <h2 className="sec-title">
            Featured <span>Projects</span>
          </h2>
          <div className="divider" />
          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <div className="proj-card" key={p.title}>
                <div className="proj-tag">{p.tag}</div>
                <div className="proj-title">{p.title}</div>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-stack">
                  {p.stack.map((tag) => (
                    <span className="stack-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <br />
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="proj-link">
                  {p.linkLabel}
                </a>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <a
              href="https://github.com/anbu2203"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              🐙 View All on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* HACK CLUB */}
      <section id="hackclub">
        <div className="reveal">
          <div className="sec-label">{'// 04.5 — community.join()'}</div>
          <h2 className="sec-title">
            Hack <span>Club</span> Member
          </h2>
          <div className="divider" />

          <div className="hc-card">
            <div className="hc-head">
              <span style={{ fontSize: '2rem' }} aria-hidden="true">
                🏴‍☠️
              </span>
              <div>
                <div className="hc-title">What is Hack Club?</div>
                <div className="hc-url">hackclub.com</div>
              </div>
            </div>
            <p className="hc-body">
              <strong className="strong-white">Hack Club</strong> is the world&apos;s largest
              nonprofit network of teenage makers &amp; coders — with over{' '}
              <strong className="strong-neon">100,000 members</strong> across{' '}
              <strong className="strong-neon">1,000+ clubs</strong> in 30+ countries. Founded in
              2014, it&apos;s a 501(c)(3) nonprofit where teens aged 13–18 build real projects, attend
              hackathons, receive hardware grants, and learn by shipping — not sitting through
              lectures. Members get access to a global Slack, free hardware grants, perks like GitHub
              Education, and fiscal sponsorship through <strong className="strong-neon">HCB</strong> to
              run real-world events and clubs.
            </p>
          </div>

          <div className="hc-stats">
            <div className="stat-card">
              <span className="stat-num">5</span>
              <span className="stat-lbl">Projects Shipped</span>
            </div>
            <div className="stat-card">
              <span className="stat-num" style={{ color: 'var(--neon2)' }}>
                ~$100
              </span>
              <span className="stat-lbl">Earned via HCB (2025)</span>
            </div>
            <div className="stat-card">
              <span className="stat-num" style={{ color: 'var(--neon3)' }}>
                Active
              </span>
              <span className="stat-lbl">Member Status</span>
            </div>
          </div>

          <div className="hcb-card">
            <span style={{ fontSize: '1.8rem' }} aria-hidden="true">
              💸
            </span>
            <div>
              <div className="hcb-title">Hack Club Bank (HCB)</div>
              <p className="hcb-body">
                HCB is Hack Club&apos;s financial platform — giving teen-led teams real nonprofit
                infrastructure, a bank account, and debit cards to run events and projects. I earned
                approximately <strong className="strong-neon2">$100 in 2025</strong> through project
                contributions and Hack Club programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING PATH */}
      <section id="path">
        <div className="reveal">
          <div className="sec-label">{'// 05 — journey.log'}</div>
          <h2 className="sec-title">
            My Learning <span>Path</span>
          </h2>
          <div className="divider" />
          <div className="timeline">
            {TIMELINE.map((t) => (
              <div className="tl-item" key={t.year}>
                <div className="tl-year">{t.year}</div>
                <div className="tl-title">{t.title}</div>
                <div className="tl-place">{t.place}</div>
                <p className="tl-desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="reveal">
          <div className="sec-label">{'// 06 — contact.init()'}</div>
          <h2 className="sec-title">
            Get in <span>Touch</span>
          </h2>
          <div className="divider" />
          <div className="contact-wrap">
            <div className="contact-intro">
              <p>
                Have a project idea, a collaboration in mind, or just want to talk electronics and
                IoT? I&apos;m always open to connecting with fellow makers, developers, and
                innovators.
              </p>
              <div className="social-links">
                <a href="mailto:mr.dark2216@gmail.com" className="social-link">
                  <span className="social-icon" aria-hidden="true">
                    ✉️
                  </span>{' '}
                  mr.dark2216@gmail.com
                </a>
                <a
                  href="https://github.com/anbu2203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon" aria-hidden="true">
                    🐙
                  </span>{' '}
                  GitHub — /anbu2203
                </a>
                <a
                  href="https://instagram.com/mr.dark_2216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon" aria-hidden="true">
                    📸
                  </span>{' '}
                  Instagram — @mr.dark_2216
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span>ANBUMATHI CHEZHIAN</span> &nbsp;·&nbsp; Electronics &amp; IoT Developer &nbsp;·&nbsp;
        Built with <span>♥</span>
      </footer>
    </div>
  )
}

function ContactForm() {
  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault()
        alert('Message sent! (Wire up a backend to make this live 🚀)')
      }}
    >
      <div className="form-group">
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" name="name" type="text" placeholder="Your name" required />
      </div>
      <div className="form-group">
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" name="email" type="email" placeholder="your@email.com" required />
      </div>
      <div className="form-group">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          placeholder="Tell me about your project or idea..."
          required
        />
      </div>
      <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
        Send Message
      </button>
    </form>
  )
}
