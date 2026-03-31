import Head from 'next/head'
import { useEffect, useState } from 'react'

const WHATSAPP_URL = 'https://wa.me/919582988040'

const products = [
  {
    name: 'Cookies',
    varieties: ['Chocochips', 'Atta', 'Coconut'],
    price: '₹800/kg',
    img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80',
  },
  {
    name: 'Doughnuts',
    varieties: ['Chocolates', 'Nuts Overloaded'],
    price: '₹70/piece',
    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80',
  },
  {
    name: 'Pizookie',
    varieties: ['Chocochips', 'Nuts Overloaded'],
    price: '₹450 (regular)',
    img: 'https://images.unsplash.com/photo-1606890542217-2f53a55cf762?w=600&q=80',
  },
  {
    name: 'Brownies',
    varieties: ['Plain', 'Chocochips', 'Walnuts'],
    price: '₹700/kg',
    img: 'https://images.unsplash.com/photo-1607101816007-b2ee11db1aa6?w=600&q=80',
  },
  {
    name: 'Cake & Pastry',
    varieties: ['Toffee Mocha', 'Chocolate', 'Strawberry'],
    price: '₹800/kg',
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
  },
  {
    name: 'Dry Cake',
    varieties: ['Banana Walnut', 'Chocolate', 'Plum'],
    price: '₹500/kg',
    img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80',
  },
]

const usps = [
  { icon: '🎂', title: 'Made for Every Occasion', desc: 'Birthdays, anniversaries, corporate events — we have something special for every moment.' },
  { icon: '🏡', title: 'Homemade with Love', desc: 'Professionally prepared right from our home kitchen, not a factory floor.' },
  { icon: '🌿', title: 'No Chemicals & Preservatives', desc: 'Pure, natural ingredients. Nothing artificial ever goes into our bakes.' },
  { icon: '🏢', title: 'Corporate Tie-Up Prices', desc: 'Special bulk pricing for offices, events, and business gifting needs.' },
  { icon: '🚚', title: 'Home Delivery & Takeaway', desc: 'Get your order delivered to your door or pick it up at your convenience.' },
  { icon: '💳', title: 'Easy Online Payments', desc: 'UPI, cards, wallets — pay however you prefer with zero hassle.' },
]

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const waEnquire = (product) => {
    const msg = encodeURIComponent(`Hi Sweet Tooth! I'm interested in ordering ${product}. Could you please share more details?`)
    window.open(`https://wa.me/919582988040?text=${msg}`, '_blank')
  }

  return (
    <>
      <Head>
        <title>Sweet Tooth | Home Bakery — Ghaziabad</title>
      </Head>

      {/* ── NAVBAR ── */}
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <img
          src="https://idecutionmarketing.com/sweettooth/assets/images/Sweet-Tooth-Logo.png"
          alt="Sweet Tooth Logo"
          className="nav-logo"
        />
        <div className="nav-links">
          <a href="#menu">Menu</a>
          <a href="#about">Our Story</a>
          <a href="#why">Why Us</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="nav-cta">Order Now</a>
        </div>
        <div className="nav-hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <span /><span /><span />
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
        <a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>Our Story</a>
        <a href="#why" onClick={() => setMenuOpen(false)}>Why Us</a>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} style={{color:'var(--caramel)'}}>Order on WhatsApp</a>
      </div>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            FSSAI Registered · Ghaziabad, UP
          </div>
          <h1>
            Baked with <em>Love,</em><br />
            Delivered with Care
          </h1>
          <p className="hero-sub">
            Eggless cakes, gooey brownies, fresh doughnuts &amp; more — 
            made from scratch at home with no chemicals, no preservatives, just pure joy.
          </p>
          <div className="hero-actions">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-primary">
              <span>🛒</span> Order on WhatsApp
            </a>
            <a href="#menu" className="btn-outline">
              <span>🎂</span> Browse Menu
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          Scroll
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <div className="trust-item"><span className="icon">✅</span> FSSAI Registered</div>
        <div className="trust-divider" />
        <div className="trust-item"><span className="icon">🥚</span> 100% Eggless Options</div>
        <div className="trust-divider" />
        <div className="trust-item"><span className="icon">🚫</span> No Preservatives</div>
        <div className="trust-divider" />
        <div className="trust-item"><span className="icon">🚚</span> Home Delivery Available</div>
        <div className="trust-divider" />
        <div className="trust-item"><span className="icon">💳</span> Online Payment Accepted</div>
      </div>

      {/* ── ABOUT / STORY ── */}
      <section id="about" className="story-section">
        <div className="story-image-wrap">
          <img
            src="https://idecutionmarketing.com/sweettooth/assets/images/slider/Sweet-Tooth-Cover-Photo.jpg"
            alt="Sweet Tooth Bakery"
            className="story-img-main"
          />
          <div className="story-badge-float">
            <span className="num">100%</span>
            <span className="label">Home Baked</span>
          </div>
        </div>
        <div className="story-content">
          <div className="section-label">Our Story</div>
          <h2 className="section-title">
            From Our Kitchen<br />to Your Heart
          </h2>
          <p>
            Sweet Tooth was born out of a simple passion — baking goodies that 
            bring genuine joy. Based in Ghaziabad, we're a home bakery that treats 
            every order as if we're baking for family.
          </p>
          <p>
            Every brownie, every doughnut, every slice of cake is prepared fresh 
            without any artificial chemicals or preservatives. We believe great 
            flavour comes from honest ingredients and real care.
          </p>
          <p>
            From intimate birthday celebrations to large corporate gifting orders, 
            we tailor every bake to make your occasion truly memorable.
          </p>
          <div className="fssai-badge">
            ✅ &nbsp;FSSAI Registered — Your safety is our priority
          </div>
        </div>
      </section>

      {/* ── MENU ── */}
      <section id="menu" className="section menu-section">
        <div className="text-center">
          <div className="section-label">What We Bake</div>
          <h2 className="section-title">Our Signature Menu</h2>
          <p className="section-sub">
            Every item is freshly prepared to order. Tap "Enquire" to chat directly 
            on WhatsApp and place your order.
          </p>
        </div>
        <div className="menu-grid">
          {products.map((p) => (
            <div className="menu-card" key={p.name}>
              <div className="card-img-wrap">
                <img src={p.img} alt={p.name} loading="lazy" />
                <div className="card-price-tag">{p.price}</div>
              </div>
              <div className="card-body">
                <div className="card-title">{p.name}</div>
                <div className="card-varieties">
                  <span>Varieties: </span>{p.varieties.join(', ')}
                </div>
                <button className="btn-enquire" onClick={() => waEnquire(p.name)}>
                  <span className="wa-icon">💬</span> Enquire on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY SWEET TOOTH ── */}
      <section id="why" className="why-section">
        <div className="text-center">
          <div className="section-label">Why Choose Us</div>
          <h2 className="section-title" style={{color:'white'}}>
            The Sweet Tooth<br />Difference
          </h2>
        </div>
        <div className="why-grid">
          {usps.map((u) => (
            <div className="why-card" key={u.title}>
              <span className="why-icon">{u.icon}</span>
              <h3>{u.title}</h3>
              <p>{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ORDER CTA ── */}
      <section className="order-cta">
        <div className="section-label" style={{justifyContent:'center'}}>Get In Touch</div>
        <h2 className="section-title">Ready to Place an Order?</h2>
        <p className="section-sub">
          Reach out on WhatsApp for the fastest response — we'd love to bake something 
          special just for you.
        </p>
        <div className="order-cta-actions">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-whatsapp">
            <span>💬</span> Chat on WhatsApp
          </a>
          <a href="tel:+919582988040" className="btn-call">
            <span>📞</span> +91-95829 88040
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="https://idecutionmarketing.com/sweettooth/assets/images/Sweet-Tooth-Logo.png"
              alt="Sweet Tooth"
            />
            <p>
              Premium home bakery in Ghaziabad crafting eggless cakes, cookies, 
              doughnuts, brownies and more — with love, no preservatives.
            </p>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="tel:+919582988040">📞 +91-9582988040</a>
            <a href="mailto:sweettooth.digital@gmail.com">✉️ sweettooth.digital@gmail.com</a>
            <p>📍 B1, 501, Bharat City,<br />Farukh Nagar Road,<br />Ghaziabad, UP 201003</p>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a
                href="https://www.facebook.com/BakersAtSweetTooth"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/bakers_at_sweet_tooth/"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="Instagram"
              >
                ✦
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
            <br />
            <h4>Directions</h4>
            <a
              href="https://maps.google.com/?q=B1+501+Bharat+City+Farukh+Nagar+Road+Ghaziabad"
              target="_blank"
              rel="noreferrer"
            >
              View on Google Maps ↗
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Sweet Tooth | Home Bakery · All rights reserved.</p>
          <p className="nuts-note">⚠️ Few products may contain nuts.</p>
        </div>
      </footer>
    </>
  )
}
