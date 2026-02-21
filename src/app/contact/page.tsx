'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
    });
    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `📩 *Contact Message — Sri Hesritha's Cloud Kitchen*\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n💬 Message: ${formData.message}`;
        window.open(`https://wa.me/918074702928?text=${encodeURIComponent(msg)}`, '_blank');
        setSent(true);
        setFormData({ name: '', phone: '', message: '' });
    };

    return (
        <div className="contact-page section">
            <div className="container">
                <div className="contact-page__header">
                    <span className="section-label">Reach Out</span>
                    <h1>Get in Touch</h1>
                    <p>
                        We&apos;d love to hear from you — whether it&apos;s an order, feedback, or just to say hello!
                    </p>
                </div>

                <div className="contact-page__grid">
                    <a href="tel:+918074702928" className="contact-card" style={{ textDecoration: 'none' }}>
                        <div className="contact-card__icon">📞</div>
                        <h3>Orders</h3>
                        <p>Talk to us directly to place an order</p>
                        <span className="btn btn-outline btn-sm">+91 80747 02928</span>
                    </a>

                    <a
                        href="https://wa.me/918074702928"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                        style={{ textDecoration: 'none' }}
                    >
                        <div className="contact-card__icon">💬</div>
                        <h3>WhatsApp</h3>
                        <p>Quick and easy — message us to order</p>
                        <span className="btn btn-whatsapp btn-sm">Chat Now</span>
                    </a>

                    <div className="contact-card" style={{ textDecoration: 'none', gridColumn: '1 / -1' }}>
                        <div className="contact-card__icon">📍</div>
                        <h3>Our Kitchen & Support</h3>
                        <p style={{ maxWidth: '400px', margin: '0 auto 16px' }}>
                            63, Ground floor, 5th cross, Godavari Road, Manjunatha Layout, Munnekolala, Marathahalli, Bangalore-560037
                        </p>
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                            <span className="btn btn-outline btn-sm">Support: +91 863 997 8917</span>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-page__form">
                    <h2>Send us a Message</h2>
                    <p>Have a question or feedback? Drop us a message and we&apos;ll get back to you!</p>

                    {sent && (
                        <div
                            style={{
                                padding: '16px 24px',
                                background: 'rgba(34, 197, 94, 0.1)',
                                border: '1px solid rgba(34, 197, 94, 0.3)',
                                borderRadius: 'var(--radius-sm)',
                                color: 'var(--color-success)',
                                marginBottom: 24,
                                fontSize: '0.95rem',
                            }}
                        >
                            ✅ Message sent via WhatsApp! We&apos;ll get back to you shortly.
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label" htmlFor="contact-name">Your Name *</label>
                                <input
                                    className="form-input"
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="contact-phone">Phone Number *</label>
                                <input
                                    className="form-input"
                                    type="tel"
                                    id="contact-phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="contact-message">Message *</label>
                            <textarea
                                className="form-textarea"
                                id="contact-message"
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message or feedback..."
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            📩 Send via WhatsApp
                        </button>
                    </form>
                </div>

                {/* Operating Hours */}
                <div className="contact-page__hours">
                    <span className="section-label">When We&apos;re Open</span>
                    <h2>Operating Hours</h2>
                    <div className="hours-grid">
                        <div className="hours-card" style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
                            <div className="hours-card__day">Always Open</div>
                            <div className="hours-card__time">24/7</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
