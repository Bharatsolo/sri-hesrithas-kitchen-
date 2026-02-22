'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function OrderPage() {
    const router = useRouter();
    const { items, updateQuantity, removeItem, totalPrice, totalItems, clearCart } = useCart();
    const [deliveryMode, setDeliveryMode] = useState<'delivery' | 'pickup'>('delivery');
    const [isBulkOrder, setIsBulkOrder] = useState(false);
    const [minDate, setMinDate] = useState('');
    const [minTime, setMinTime] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        date: '',
        time: '',
        instructions: '',
    });
    const [bulkFormData, setBulkFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        guestCount: '',
        eventType: '',
        preferences: '',
        instructions: '',
    });

    // Calculate minimum date and time for booking
    useEffect(() => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const todayStr = `${yyyy}-${mm}-${dd}`;
        setMinDate(todayStr);

        // If today is selected or no date is selected yet, require 2 hours lead time
        if (!formData.date || formData.date === todayStr) {
            const now = new Date();
            now.setHours(now.getHours() + 2);
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            setMinTime(`${hours}:${minutes}`);
        } else {
            // For future dates, they can book time starting from midnight
            setMinTime('00:00');
        }
    }, [formData.date]);

    // Load saved data on mount
    useEffect(() => {
        const savedData = localStorage.getItem('orderFormData');
        if (savedData) {
            try {
                setFormData(JSON.parse(savedData));
            } catch (e) { }
        }
        const savedMode = localStorage.getItem('orderDeliveryMode');
        if (savedMode === 'pickup' || savedMode === 'delivery') {
            setDeliveryMode(savedMode);
        }
    }, []);

    // Save data when it changes
    useEffect(() => {
        localStorage.setItem('orderFormData', JSON.stringify(formData));
    }, [formData]);

    useEffect(() => {
        localStorage.setItem('orderDeliveryMode', deliveryMode);
    }, [deliveryMode]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (isBulkOrder) {
            setBulkFormData({ ...bulkFormData, [e.target.name]: e.target.value });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let message = '';

        if (isBulkOrder) {
            // Build Bulk Order WhatsApp message
            message = `*New Bulk Order Inquiry — Sri Hesritha's Cloud Kitchen*\n\n`;
            message += `*Name:* ${bulkFormData.name}\n`;
            message += `*Phone:* ${bulkFormData.phone}\n`;
            message += `*Event Date:* ${bulkFormData.date}\n`;
            message += `*Event Time:* ${bulkFormData.time}\n`;
            message += `*Number of People:* ${bulkFormData.guestCount}\n`;
            message += `*Event Type:* ${bulkFormData.eventType}\n\n`;
            message += `*Menu Preferences/Items needed:*\n${bulkFormData.preferences}\n`;
            if (bulkFormData.instructions) {
                message += `\n*Special Instructions:* ${bulkFormData.instructions}\n`;
            }
        } else {
            // Build Regular Order WhatsApp message
            message = `*New Order — Sri Hesritha's Cloud Kitchen*\n\n`;
            message += `*Name:* ${formData.name}\n`;
            message += `*Phone:* ${formData.phone}\n`;
            message += `*Mode:* ${deliveryMode === 'delivery' ? 'Delivery' : 'Pickup'}\n`;

            if (deliveryMode === 'delivery' && formData.address) {
                message += `*Address:* ${formData.address}\n`;
            }

            if (formData.date) message += `*Date:* ${formData.date}\n`;
            if (formData.time) message += `*Time:* ${formData.time}\n`;

            message += `\n*Order Details:*\n`;
            items.forEach((ci) => {
                message += `- ${ci.item.name} x${ci.quantity} — Rs.${ci.item.price * ci.quantity}\n`;
            });
            message += `\n*Total: Rs.${totalPrice}*\n`;

            if (formData.instructions) {
                message += `\n*Special Instructions:* ${formData.instructions}\n`;
            }

        }

        const encodedMessage = encodeURIComponent(message);
        // Save the message and total price, then redirect to Payment page
        localStorage.setItem('pendingWaMessage', message);
        localStorage.setItem('paymentAmount', isBulkOrder ? 'Bulk Inquiry' : totalPrice.toString());
        router.push('/payment');
    };

    return (
        <div className="book-page section">
            <div className="container">
                <div className="text-center" style={{ marginBottom: 48 }}>
                    <span className="section-label">Place Your Order</span>
                    <h1 className="section-title">Book Your Meal</h1>
                    <p className="section-subtitle">
                        Fill in your details and we&apos;ll confirm your order on WhatsApp
                    </p>
                </div>

                <div className="book-page__grid">
                    {/* Cart Summary (Now on the left) */}
                    <div className="cart-summary">
                        <h2 className="cart-summary__title">🛒 Your Cart ({totalItems} items)</h2>

                        {items.length === 0 ? (
                            <div className="cart-summary__empty">
                                <p style={{ fontSize: '2.5rem', marginBottom: 8 }}>🍽️</p>
                                <p>Your cart is empty</p>
                                <Link href="/menu" className="btn btn-outline btn-sm">
                                    Browse Menu
                                </Link>
                            </div>
                        ) : (
                            <>
                                {items.map((ci) => (
                                    <div key={ci.item.id} className="cart-item">
                                        <div className="cart-item__info">
                                            <div className="cart-item__name">{ci.item.name}</div>
                                            <div className="cart-item__price">₹{ci.item.price} each</div>
                                        </div>
                                        <div className="cart-item__controls">
                                            <button
                                                className="cart-item__qty-btn"
                                                onClick={() => updateQuantity(ci.item.id, ci.quantity - 1)}
                                            >
                                                −
                                            </button>
                                            <span className="cart-item__qty">{ci.quantity}</span>
                                            <button
                                                className="cart-item__qty-btn"
                                                onClick={() => updateQuantity(ci.item.id, ci.quantity + 1)}
                                            >
                                                +
                                            </button>
                                            <button
                                                className="cart-item__qty-btn"
                                                style={{ color: 'var(--color-danger)', borderColor: 'var(--color-danger)' }}
                                                onClick={() => removeItem(ci.item.id)}
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <div className="cart-summary__total">
                                    <span>Total</span>
                                    <span className="cart-summary__total-price">₹{totalPrice}</span>
                                </div>
                                <button
                                    className="btn btn-outline btn-sm"
                                    style={{ width: '100%', justifyContent: 'center', marginTop: 16 }}
                                    onClick={clearCart}
                                >
                                    Clear Cart
                                </button>
                            </>
                        )}
                    </div>

                    {/* Form (Now on the right) */}
                    <div className="book-page__form-section">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                            <div>
                                <h2 className="book-page__form-title">{isBulkOrder ? 'Bulk Order Details' : 'Your Details'}</h2>
                                <p className="book-page__form-subtitle">
                                    {isBulkOrder ? 'Tell us about your event' : 'Tell us where to deliver your happiness'}
                                </p>
                            </div>
                            <button
                                className={`btn btn-sm ${isBulkOrder ? 'btn-primary' : 'btn-outline'}`}
                                onClick={() => setIsBulkOrder(!isBulkOrder)}
                                style={{ flexShrink: 0 }}
                            >
                                {isBulkOrder ? '← Regular Order' : '📦 Bulk Orders'}
                            </button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            {!isBulkOrder ? (
                                <>
                                    <div className="form-group">
                                        <label className="form-label">Delivery Mode</label>
                                        <div className="delivery-toggle">
                                            <button
                                                type="button"
                                                className={`delivery-toggle__option ${deliveryMode === 'delivery' ? 'delivery-toggle__option--active' : ''}`}
                                                onClick={() => setDeliveryMode('delivery')}
                                            >
                                                🚚 Delivery
                                            </button>
                                            <button
                                                type="button"
                                                className={`delivery-toggle__option ${deliveryMode === 'pickup' ? 'delivery-toggle__option--active' : ''}`}
                                                onClick={() => setDeliveryMode('pickup')}
                                            >
                                                🏠 Pickup
                                            </button>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="name">Full Name *</label>
                                            <input
                                                className="form-input"
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="phone">Phone Number *</label>
                                            <input
                                                className="form-input"
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="+91 XXXXX XXXXX"
                                            />
                                        </div>
                                    </div>

                                    {deliveryMode === 'delivery' && (
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="address">Delivery Address *</label>
                                            <input
                                                className="form-input"
                                                type="text"
                                                id="address"
                                                name="address"
                                                required
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                placeholder="Full delivery address"
                                            />
                                        </div>
                                    )}

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="date">Preferred Date *</label>
                                            <input
                                                className="form-input"
                                                type="date"
                                                id="date"
                                                name="date"
                                                required
                                                min={minDate}
                                                value={formData.date}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="time">Preferred Time *</label>
                                            <input
                                                className="form-input"
                                                type="time"
                                                id="time"
                                                name="time"
                                                required
                                                min={minTime}
                                                value={formData.time}
                                                onChange={handleInputChange}
                                            />

                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="instructions">Special Instructions</label>
                                        <textarea
                                            className="form-textarea"
                                            id="instructions"
                                            name="instructions"
                                            value={formData.instructions}
                                            onChange={handleInputChange}
                                            placeholder="Extra spicy, no onion, etc."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={totalItems === 0}
                                        style={{ width: '100%', justifyContent: 'center', opacity: totalItems === 0 ? 0.5 : 1 }}
                                    >
                                        💳 Proceed to Payment
                                    </button>
                                </>
                            ) : (
                                /* BULK ORDER FORM */
                                <>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="bulk-name">Full Name / Company *</label>
                                            <input
                                                className="form-input"
                                                type="text"
                                                id="bulk-name"
                                                name="name"
                                                required
                                                value={bulkFormData.name}
                                                onChange={handleInputChange}
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="bulk-phone">Phone Number *</label>
                                            <input
                                                className="form-input"
                                                type="tel"
                                                id="bulk-phone"
                                                name="phone"
                                                required
                                                value={bulkFormData.phone}
                                                onChange={handleInputChange}
                                                placeholder="+91 XXXXX XXXXX"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="bulk-date">Event Date *</label>
                                            <input
                                                className="form-input"
                                                type="date"
                                                id="bulk-date"
                                                name="date"
                                                required
                                                min={minDate}
                                                value={bulkFormData.date}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="bulk-time">Event Time *</label>
                                            <input
                                                className="form-input"
                                                type="time"
                                                id="bulk-time"
                                                name="time"
                                                required
                                                min={minTime}
                                                value={bulkFormData.time}
                                                onChange={handleInputChange}
                                            />
                                            {(!bulkFormData.date || bulkFormData.date === minDate) && (
                                                <small style={{ color: 'var(--color-primary)', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
                                                    *Requires at least 24 hours lead time
                                                </small>
                                            )}
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="guestCount">Number of People *</label>
                                            <input
                                                className="form-input"
                                                type="number"
                                                id="guestCount"
                                                name="guestCount"
                                                min="3"
                                                required
                                                value={bulkFormData.guestCount}
                                                onChange={handleInputChange}
                                                placeholder="e.g., 10"
                                            />
                                            <small style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
                                                *Minimum 3 people for bulk orders
                                            </small>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="eventType">Event Type *</label>
                                            <input
                                                className="form-input"
                                                type="text"
                                                id="eventType"
                                                name="eventType"
                                                required
                                                value={bulkFormData.eventType}
                                                onChange={handleInputChange}
                                                placeholder="GYM, Corporate, Play School etc."
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="preferences">Menu Preferences / Items Needed *</label>
                                        <textarea
                                            className="form-textarea"
                                            id="preferences"
                                            name="preferences"
                                            required
                                            value={bulkFormData.preferences}
                                            onChange={handleInputChange}
                                            placeholder="Tell us what you'd like to order..."
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="bulk-instructions">Special Instructions</label>
                                        <textarea
                                            className="form-textarea"
                                            id="bulk-instructions"
                                            name="instructions"
                                            value={bulkFormData.instructions}
                                            onChange={handleInputChange}
                                            placeholder="Any allergies, specific requests, etc."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ width: '100%', justifyContent: 'center' }}
                                    >
                                        💳 Proceed to Payment
                                    </button>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
