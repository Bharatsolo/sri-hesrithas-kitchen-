'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { menuItems, categories } from '@/data/menu';
import { useCart } from '@/context/CartContext';

export default function MenuPage() {
    const [activeFilter, setActiveFilter] = useState('all');
    const { addItem } = useCart();

    const filteredItems =
        activeFilter === 'all'
            ? menuItems
            : menuItems.filter((item) => item.category === activeFilter);

    // Daily specials logic based on current date to stay the same all day
    const specials = useMemo(() => {
        const vegList = menuItems.filter(item => item.isVeg && item.category !== 'combo');
        const nonVegList = menuItems.filter(item => !item.isVeg && item.category !== 'combo');

        const dateStr = new Date().toISOString().split('T')[0];
        let hash = 0;
        for (let i = 0; i < dateStr.length; i++) {
            hash = dateStr.charCodeAt(i) + ((hash << 5) - hash);
        }
        hash = Math.abs(hash);

        const vItem = vegList[hash % vegList.length];
        const nvItem = nonVegList[hash % nonVegList.length];

        if (!vItem || !nvItem) return [];

        return [
            {
                ...vItem,
                price: Math.round(vItem.price * 0.9),
                id: `special-${vItem.id}`,
                name: `★ Today's Special: ${vItem.name}`
            },
            {
                ...nvItem,
                price: Math.round(nvItem.price * 0.9),
                id: `special-${nvItem.id}`,
                name: `★ Today's Special: ${nvItem.name}`
            }
        ];
    }, []);

    // Helper to render a menu card
    const renderMenuCard = (item: any, isSpecial = false) => (
        <div key={item.id} className={`menu-card ${isSpecial ? 'menu-card--special' : ''}`} style={isSpecial ? { border: '2px solid var(--color-primary)' } : {}}>
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
                    <span className="menu-card__price">
                        {isSpecial && <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '0.9rem', marginRight: '8px' }}>₹{Math.round(item.price / 0.9)}</span>}
                        ₹{item.price}
                    </span>
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
    );

    return (
        <div className="menu-page section">
            <div className="container">
                <div className="menu-page__header">
                    <span className="section-label">What We Serve</span>
                    <h1 className="section-title">Our Complete Menu</h1>
                    <p className="section-subtitle">
                        From sizzling non-veg specials to wholesome veg delights — find your perfect meal
                    </p>
                </div>

                {/* Today's Specials */}
                {activeFilter === 'all' && specials.length > 0 && (
                    <div className="menu-page__specials" style={{ marginBottom: '40px', padding: '20px', backgroundColor: 'rgba(212, 175, 55, 0.05)', borderRadius: '12px' }}>
                        <h2 style={{ color: 'var(--color-primary)', textAlign: 'center', marginBottom: '20px' }}>🌟 Today&apos;s Specials (10% OFF) 🌟</h2>
                        <div className="menu-page__grid">
                            {specials.map(item => renderMenuCard(item, true))}
                        </div>
                    </div>
                )}

                <div className="menu-page__filters">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`menu-page__filter ${activeFilter === cat.id ? 'menu-page__filter--active' : ''}`}
                            onClick={() => setActiveFilter(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="menu-page__grid">
                    {filteredItems.map(item => renderMenuCard(item))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center" style={{ padding: '60px 0', color: 'var(--color-text-muted)' }}>
                        <p style={{ fontSize: '1.2rem' }}>No items in this category yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
