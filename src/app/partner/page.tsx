'use client';

import { useState } from 'react';

export default function PartnerPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        kitchenName: '',
        location: '',
        specialties: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let message = `🤝 *New Cloud Kitchen Partnership Inquiry*\n\n`;
        message += `*Partner Name:* ${formData.name}\n`;
        message += `*Phone:* ${formData.phone}\n`;
        message += `*Kitchen/Business Name:* ${formData.kitchenName}\n`;
        message += `*Location:* ${formData.location}\n`;
        message += `*Specialties/Cuisine:* ${formData.specialties}\n`;

        if (formData.message) {
            message += `\n*Additional Message:*\n${formData.message}\n`;
        }

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/918074702928?text=${encodedMessage}`, '_blank');

        // Reset form after submission
        setFormData({
            name: '',
            phone: '',
            kitchenName: '',
            location: '',
            specialties: '',
            message: '',
        });
    };

    return (
        <div className="section" style={{ minHeight: '80vh' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: 48 }}>
                    <span className="section-label">Grow With Us</span>
                    <h1 className="section-title">Become a Cloud Partner</h1>
                    <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Do you run a kitchen or make amazing food? Partner with Sri Hesritha's Cloud Kitchen to expand your reach and sell under our platform! Fill out the form below to get started.
                    </p>
                </div>

                <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'var(--color-bg-alt)', padding: '32px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Your Name *</label>
                                <input
                                    className="form-input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your full name"
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

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label" htmlFor="kitchenName">Kitchen / Business Name *</label>
                                <input
                                    className="form-input"
                                    type="text"
                                    id="kitchenName"
                                    name="kitchenName"
                                    required
                                    value={formData.kitchenName}
                                    onChange={handleInputChange}
                                    placeholder="Name of your kitchen"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="location">Kitchen Location *</label>
                                <input
                                    className="form-input"
                                    type="text"
                                    id="location"
                                    name="location"
                                    required
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    placeholder="City or specific area"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="specialties">Food Specialties *</label>
                            <input
                                className="form-input"
                                type="text"
                                id="specialties"
                                name="specialties"
                                required
                                value={formData.specialties}
                                onChange={handleInputChange}
                                placeholder="E.g., Biryani, Desserts, South Indian..."
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="message">Why do you want to partner with us?</label>
                            <textarea
                                className="form-textarea"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Tell us a bit about your kitchen setup and goals..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}
                        >
                            🤝 Submit Partnership Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
