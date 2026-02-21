'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();
    const { totalItems } = useCart();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/menu', label: 'Menu' },
        { href: '/order', label: 'Order' },
        { href: '/contact', label: 'Contact' },
    ];

    const closeMobile = () => setMobileOpen(false);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
                <div className="navbar__inner">
                    <Link href="/" className="navbar__logo">
                        <Image src="/logo.png" alt="Sri Hesritha's Cloud Kitchen" width={48} height={48} />
                        <div className="navbar__logo-text">
                            Sri Hesritha&apos;s
                            <span>Cloud Kitchen</span>
                        </div>
                    </Link>

                    <div className="navbar__links">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`navbar__link ${pathname === link.href ? 'navbar__link--active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="navbar__cta">
                        <Link href="/order" className="navbar__cart-btn">
                            🛒 Cart
                            {totalItems > 0 && (
                                <span className="navbar__cart-badge">{totalItems}</span>
                            )}
                        </Link>
                        <a
                            href="https://wa.me/918074702928?text=Hi!%20I%20would%20like%20to%20order%20from%20Sri%20Hesritha's%20Cloud%20Kitchen"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm"
                        >
                            📱 WhatsApp
                        </a>
                        <button
                            className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={closeMobile}>
                        {link.label}
                    </Link>
                ))}
                <a
                    href="https://wa.me/918074702928"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    onClick={closeMobile}
                >
                    📱 Order on WhatsApp
                </a>
            </div>
        </>
    );
}
