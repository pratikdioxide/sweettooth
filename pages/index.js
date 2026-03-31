import Head from 'next/head'
import { useEffect, useState } from 'react'

const WHATSAPP_URL = 'https://wa.me/919582988040'

// ── SVG ICONS ──
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.527a.5.5 0 00.608.608l5.736-1.47A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.887 0-3.655-.487-5.194-1.342l-.38-.22-3.927 1.008 1.027-3.835-.243-.394A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)

const CartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
)

const CakeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h0.01"/><path d="M12 4h0.01"/><path d="M17 4h0.01"/>
  </svg>
)

const CheckCircleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

const EggIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c6.523 0 10-4.477 10-8 0-4.418-4.477-12-10-12S2 9.582 2 14c0 3.523 3.477 8 10 8z"/>
  </svg>
)

const BanIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
  </svg>
)

const TruckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
)

const CreditCardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
)

const HeartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

const HomeIconSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const LeafIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8C8 10 5.9 16.17 3.82 19.5c.66.56 1.43 1 2.18 1C13 20.5 22 15 22 5c-5 1-7 3-7 3z"/>
  </svg>
)

const BuildingIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
)

const TruckIconLg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
)

const CreditCardIconLg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
)

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.49a2 2 0 0 1 1.72-2.18l3-.37a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l1.06-1.13a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
)

const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const AlertIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
)

const FacebookSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const InstagramSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

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
    img: '/pizookie.png',
  },
  {
    name: 'Brownies',
    varieties: ['Plain', 'Chocochips', 'Walnuts'],
    price: '₹700/kg',
    img: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=600&q=80',
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
  { Icon: HeartIcon, title: 'Made for Every Occasion', desc: 'Birthdays, anniversaries, corporate events — we have something special for every moment.' },
  { Icon: HomeIconSvg, title: 'Homemade with Love', desc: 'Professionally prepared right from our home kitchen, not a factory floor.' },
  { Icon: LeafIcon, title: 'No Chemicals & Preservatives', desc: 'Pure, natural ingredients. Nothing artificial ever goes into our bakes.' },
  { Icon: BuildingIcon, title: 'Corporate Tie-Up Prices', desc: 'Special bulk pricing for offices, events, and business gifting needs.' },
  { Icon: TruckIconLg, title: 'Home Delivery & Takeaway', desc: 'Get your order delivered to your door or pick it up at your convenience.' },
  { Icon: CreditCardIconLg, title: 'Easy Online Payments', desc: 'UPI, cards, wallets — pay however you prefer with zero hassle.' },
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
        <div className="nav-logo-wrap">
          <img src="/logo.png" alt="Sweet Tooth Logo" className="nav-logo" />
        </div>
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
        <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">&#x2715;</button>
        <a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>Our Story</a>
        <a href="#why" onClick={() => setMenuOpen(false)}>Why Us</a>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} style={{color:'var(--caramel)'}}>Order on WhatsApp</a>
      </div>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot" />
              FSSAI Registered · Ghaziabad, UP
            </div>
            <h1>
              Baked with <em>Love,</em><br />
              Delivered with Care
            </h1>
          </div>

          <div className="hero-right">
            <p className="hero-right-sub">
              Eggless cakes, gooey brownies, fresh doughnuts &amp; more — made from scratch at home with no chemicals, no preservatives, just pure joy.
            </p>
            <div className="hero-right-actions">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-primary">
                <WhatsAppIcon /> Order on WhatsApp
              </a>
              <a href="#menu" className="btn-outline">
                <CakeIcon /> Browse Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT / STORY ── */}
      <section id="about" className="story-section">
        <div className="story-image-wrap">
          <img src="/banner.png" alt="Sweet Tooth Bakery" className="story-img-main" />
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
            <CheckCircleIcon /> &nbsp;FSSAI Registered — Your safety is our priority
          </div>
        </div>
      </section>

      {/* ── MENU ── */}
      <section id="menu" className="section menu-section">
        <div className="text-center">
          <div className="section-label">What We Bake</div>
          <h2 className="section-title">Our Signature Menu</h2>
          <p className="section-sub">
            Every item is freshly prepared to order. Tap below to chat directly
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
                  <WhatsAppIcon /> Order on WhatsApp
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
              <span className="why-icon"><u.Icon /></span>
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
            <WhatsAppIcon /> Chat on WhatsApp
          </a>
          <a href="tel:+919582988040" className="btn-call">
            <PhoneIcon /> +91-95829 88040
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logo.png" alt="Sweet Tooth" />
            <p>
              Premium home bakery in Ghaziabad crafting eggless cakes, cookies,
              doughnuts, brownies and more — with love, no preservatives.
            </p>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="tel:+919582988040"><span className="footer-icon"><PhoneIcon /></span> +91-9582988040</a>
            <a href="mailto:sweettooth.digital@gmail.com"><span className="footer-icon"><MailIcon /></span> sweettooth.digital@gmail.com</a>
            <p><span className="footer-icon"><PinIcon /></span> B1, 501, Bharat City,<br />Farukh Nagar Road,<br />Ghaziabad, UP 201003</p>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/BakersAtSweetTooth" target="_blank" rel="noreferrer" className="social-btn" aria-label="Facebook">
                <FacebookSvg />
              </a>
              <a href="https://www.instagram.com/bakers_at_sweet_tooth/" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
                <InstagramSvg />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="social-btn" aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
            </div>
            <br />
            <h4>Directions</h4>
            <a href="https://g.page/r/CXwgtH05qh0rEAE" target="_blank" rel="noreferrer">
              View on Google Maps &#x2197;
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Sweet Tooth | Home Bakery · All rights reserved.</p>
          <p className="nuts-note"><AlertIcon /> Few products may contain nuts.</p>
        </div>
      </footer>
    </>
  )
}
