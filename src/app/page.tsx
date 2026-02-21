'use client';

import Image from 'next/image';
import Link from 'next/link';
import { menuItems } from '@/data/menu';
import { testimonials } from '@/data/testimonials';
import { useCart } from '@/context/CartContext';

export default function HomePage() {
  const { addItem } = useCart();
  const popularDishes = menuItems.slice(0, 6);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__bg-pattern" />
        <div className="hero__content animate-fadeInUp">
          <Image
            src="/logo.png"
            alt="Sri Hesritha's Cloud Kitchen"
            width={120}
            height={120}
            className="hero__logo"
            priority
          />
          <h1 className="hero__title">Sri Hesritha&apos;s</h1>
          <p className="hero__subtitle">Cloud Kitchen</p>
          <p className="hero__tagline">
            Authentic home-style flavors crafted with love and tradition, delivered fresh to your doorstep.
          </p>
          <div className="hero__actions">
            <Link href="/menu" className="btn btn-primary">
              🍽️ Explore Menu
            </Link>
            <a
              href="https://wa.me/918074702928?text=Hi!%20I%20would%20like%20to%20order%20from%20Sri%20Hesritha's%20Cloud%20Kitchen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              📱 Order on WhatsApp
            </a>
          </div>
        </div>
        <div className="hero__scroll-hint">Scroll</div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="about-preview section">
        <div className="container">
          <div className="about-preview__grid">
            <div className="about-preview__text">
              <span className="section-label">Our Story</span>
              <h2>Where Tradition Meets Taste</h2>
              <p>
                Born from a passion for authentic home-cooked food, Sri Hesritha&apos;s Cloud Kitchen brings
                you the rich, aromatic flavors of traditional Indian cuisine. Every dish is prepared fresh
                with handpicked ingredients, time-tested recipes, and an unwavering commitment to quality.
              </p>
              <div className="about-preview__stats">
                <div className="about-preview__stat">
                  <span className="about-preview__stat-number">500+</span>
                  <span className="about-preview__stat-label">Happy Customers</span>
                </div>
                <div className="about-preview__stat">
                  <span className="about-preview__stat-number">14+</span>
                  <span className="about-preview__stat-label">Signature Dishes</span>
                </div>
                <div className="about-preview__stat">
                  <span className="about-preview__stat-number">4.8★</span>
                  <span className="about-preview__stat-label">Average Rating</span>
                </div>
              </div>
            </div>
            <div className="about-preview__image">
              <Image
                src="/images/kitchen-preview.jpg"
                alt="Our Kitchen"
                width={600}
                height={450}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== POPULAR DISHES ===== */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Our Favorites</span>
            <h2 className="section-title">Popular Dishes</h2>
            <p className="section-subtitle">
              Handpicked favorites that keep our customers coming back for more
            </p>
          </div>
          <div className="popular-dishes__grid">
            {popularDishes.map((item) => (
              <div key={item.id} className="menu-card">
                <div className="menu-card__image" style={{ position: 'relative', overflow: 'hidden' }}>
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div
                      style={{
                        background: `linear-gradient(135deg, ${item.isVeg ? '#1a3a2a' : '#3a1a1a'}, #0d2626)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3rem',
                        width: '100%',
                        height: '100%'
                      }}
                    >
                      {item.isVeg ? '🥗' : '🍗'}
                    </div>
                  )}
                </div>
                <div className="menu-card__body">
                  <div className="menu-card__header">
                    <span className="menu-card__name">{item.name}</span>
                    <span className="menu-card__price">₹{item.price}</span>
                  </div>
                  <p className="menu-card__desc">{item.description}</p>
                  <div className="menu-card__footer">
                    <span className={`veg-badge ${item.isVeg ? 'veg-badge--veg' : 'veg-badge--nonveg'}`}>
                      {item.isVeg ? '🟢 Veg' : '🔴 Non-Veg'}
                    </span>
                    <button
                      className="menu-card__add-btn"
                      onClick={() => addItem(item)}
                    >
                      + Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 40 }}>
            <Link href="/menu" className="btn btn-outline">
              View Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="how-it-works section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Easy Ordering</span>
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Getting your favorite food is just 3 simple steps away
            </p>
          </div>
          <div className="how-it-works__grid">
            <div className="how-it-works__step">
              <span className="how-it-works__number">1</span>
              <div className="how-it-works__icon">📋</div>
              <h3>Browse Menu</h3>
              <p>Explore our wide selection of authentic home-style dishes and pick your favorites.</p>
            </div>
            <div className="how-it-works__step">
              <span className="how-it-works__number">2</span>
              <div className="how-it-works__icon">📱</div>
              <h3>Place Your Order</h3>
              <p>Order directly through WhatsApp or use our booking form. Quick, easy, and personal.</p>
            </div>
            <div className="how-it-works__step">
              <span className="how-it-works__number">3</span>
              <div className="how-it-works__icon">🍽️</div>
              <h3>Enjoy Your Meal</h3>
              <p>Freshly prepared food delivered to your doorstep, piping hot and full of flavor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Happy Customers</span>
            <h2 className="section-title">What People Say</h2>
            <p className="section-subtitle">
              Don&apos;t just take our word for it — hear from our satisfied food lovers
            </p>
          </div>
          <div className="testimonials__grid">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-card">
                <div className="testimonial-card__stars">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="testimonial-card__text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__date">{t.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <h2>Ready to Taste the Difference?</h2>
        <p>Order now and experience the authentic flavors of home-cooked food.</p>
        <div className="cta-banner__actions">
          <Link href="/menu" className="btn btn-primary">
            🍽️ View Menu
          </Link>
          <a
            href="tel:+918074702928"
            className="btn btn-outline"
          >
            📞 Call: 80747 02928
          </a>
          <a
            href="https://wa.me/918074702928"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            💬 WhatsApp Order
          </a>
        </div>
      </section>
    </>
  );
}
