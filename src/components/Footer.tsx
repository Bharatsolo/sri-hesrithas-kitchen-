import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <h3>Sri Hesritha&apos;s Cloud Kitchen</h3>
                        <p>
                            Bringing the authentic flavors of home-cooked food right to your doorstep.
                            Every dish is prepared with love, fresh ingredients, and traditional recipes.
                        </p>
                        <div className="footer__actions" style={{ marginTop: 20 }}>
                            <a
                                href="tel:+918074702928"
                                className="btn btn-outline btn-sm"
                            >
                                📞 Call Us
                            </a>
                            <a
                                href="https://wa.me/918074702928"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-whatsapp btn-sm"
                            >
                                💬 WhatsApp
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer__heading">Quick Links</h4>
                        <Link href="/" className="footer__link">Home</Link>
                        <Link href="/about" className="footer__link">About Us</Link>
                        <Link href="/menu" className="footer__link">Menu</Link>
                        <Link href="/order" className="footer__link">Order Now</Link>
                        <Link href="/contact" className="footer__link">Contact</Link>
                    </div>

                    <div>
                        <h4 className="footer__heading">Popular Items</h4>
                        <span className="footer__link">Bagara Rice</span>
                        <span className="footer__link">Pepper Chicken</span>
                        <span className="footer__link">Mutton Gravy</span>
                        <span className="footer__link">Veg Biryani</span>
                        <span className="footer__link">Veg Meals Combo</span>
                    </div>

                    <div>
                        <h4 className="footer__heading">Get in Touch</h4>
                        <div className="footer__contact-item">
                            <span>📞</span> +91 80747 02928 (Orders)
                        </div>
                        <div className="footer__contact-item">
                            <span>📞</span> +91 863 997 8917 (Customer Support)
                        </div>
                        <div className="footer__contact-item">
                            <span>💬</span> WhatsApp Available
                        </div>
                        <div className="footer__contact-item">
                            <span>🕐</span> 24/7 Open
                        </div>
                        <div className="footer__contact-item" style={{ alignItems: 'flex-start' }}>
                            <span style={{ marginTop: '4px' }}>📍</span>
                            <span>63, Ground floor, 5th cross, Godavari Road, Manjunatha Layout, Munnekolala, Marathahalli, Bangalore-560037</span>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {new Date().getFullYear()} Sri Hesritha&apos;s Cloud Kitchen. All rights reserved.
                    </p>
                    <p className="footer__copyright">
                        Made with ❤️ for food lovers
                    </p>
                </div>
            </div>
        </footer>
    );
}
