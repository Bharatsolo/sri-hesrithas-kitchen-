'use client';

import { useState } from 'react';

export default function DeliveryPartnerPage() {
    const [formData, setFormData] = useState({
        // Personal Details
        fullName: '',
        phone: '',
        email: '',
        dob: '',
        address: '',
        city: '',
        pinCode: '',

        // Identification
        aadhaarNumber: '',
        drivingLicense: '',

        // Vehicle Details
        vehicleType: '',
        vehicleMake: '',
        vehicleRegNumber: '',
        vehicleYear: '',

        // Availability
        preferredShift: '',
        availableDays: '',
        startDate: '',

        // Additional
        hasExperience: '',
        whyJoin: '',
        additionalMessage: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let message = `🚗 *New Delivery Partner Application*\n\n`;

        message += `--- *Personal Details* ---\n`;
        message += `*Full Name:* ${formData.fullName}\n`;
        message += `*Phone:* ${formData.phone}\n`;
        message += `*Email:* ${formData.email}\n`;
        message += `*Date of Birth:* ${formData.dob}\n`;
        message += `*Address:* ${formData.address}\n`;
        message += `*City:* ${formData.city}\n`;
        message += `*PIN Code:* ${formData.pinCode}\n\n`;

        message += `--- *Identification* ---\n`;
        message += `*Aadhaar Number:* ${formData.aadhaarNumber}\n`;
        message += `*Driving License:* ${formData.drivingLicense}\n\n`;

        message += `--- *Vehicle Details* ---\n`;
        message += `*Vehicle Type:* ${formData.vehicleType}\n`;
        message += `*Vehicle Make & Model:* ${formData.vehicleMake}\n`;
        message += `*Registration Number:* ${formData.vehicleRegNumber}\n`;
        message += `*Vehicle Year:* ${formData.vehicleYear}\n\n`;

        message += `--- *Availability* ---\n`;
        message += `*Preferred Shift:* ${formData.preferredShift}\n`;
        message += `*Available Days:* ${formData.availableDays}\n`;
        message += `*Can Start From:* ${formData.startDate}\n\n`;

        message += `--- *Additional Info* ---\n`;
        message += `*Previous Delivery Experience:* ${formData.hasExperience}\n`;
        if (formData.whyJoin) {
            message += `*Why Join Us:* ${formData.whyJoin}\n`;
        }
        if (formData.additionalMessage) {
            message += `*Additional Message:* ${formData.additionalMessage}\n`;
        }

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/918074702928?text=${encodedMessage}`, '_blank');

        setFormData({
            fullName: '',
            phone: '',
            email: '',
            dob: '',
            address: '',
            city: '',
            pinCode: '',
            aadhaarNumber: '',
            drivingLicense: '',
            vehicleType: '',
            vehicleMake: '',
            vehicleRegNumber: '',
            vehicleYear: '',
            preferredShift: '',
            availableDays: '',
            startDate: '',
            hasExperience: '',
            whyJoin: '',
            additionalMessage: '',
        });
    };

    return (
        <div className="section" style={{ minHeight: '80vh' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: 48 }}>
                    <span className="section-label">Join Our Fleet</span>
                    <h1 className="section-title">Become a Delivery Partner</h1>
                    <p className="section-subtitle" style={{ maxWidth: '650px', margin: '0 auto' }}>
                        Love delivering? Want to earn on your own schedule? Join Sri Hesritha&apos;s Cloud Kitchen as a delivery partner and help us bring delicious food to our customers&apos; doorsteps!
                    </p>
                </div>

                {/* Benefits Section */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', maxWidth: '800px', margin: '0 auto 48px' }}>
                    {[
                        { icon: '💰', title: 'Great Earnings', desc: 'Competitive pay per delivery plus tips' },
                        { icon: '🕐', title: 'Flexible Hours', desc: 'Work when you want, on your schedule' },
                        { icon: '📱', title: 'Easy Process', desc: 'Simple onboarding, start delivering fast' },
                        { icon: '🤝', title: 'Supportive Team', desc: 'Dedicated support whenever you need it' },
                    ].map((benefit) => (
                        <div
                            key={benefit.title}
                            style={{
                                backgroundColor: 'var(--color-bg-alt)',
                                padding: '24px',
                                borderRadius: '12px',
                                border: '1px solid var(--color-border)',
                                textAlign: 'center',
                            }}
                        >
                            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{benefit.icon}</div>
                            <h3 style={{ fontSize: '1rem', marginBottom: '4px', color: 'var(--color-text)' }}>{benefit.title}</h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>{benefit.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Application Form */}
                <div style={{ maxWidth: '750px', margin: '0 auto', backgroundColor: 'var(--color-bg-alt)', padding: '40px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
                    <form onSubmit={handleSubmit}>

                        {/* ===== Personal Details ===== */}
                        <div style={{ marginBottom: '32px' }}>
                            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '20px', paddingBottom: '8px', borderBottom: '2px solid var(--color-border)' }}>
                                👤 Personal Details
                            </h2>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="fullName">Full Name *</label>
                                    <input className="form-input" type="text" id="fullName" name="fullName" required value={formData.fullName} onChange={handleInputChange} placeholder="Enter your full name" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                                    <input className="form-input" type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">Email Address *</label>
                                    <input className="form-input" type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="your@email.com" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="dob">Date of Birth *</label>
                                    <input className="form-input" type="date" id="dob" name="dob" required value={formData.dob} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="address">Full Address *</label>
                                <input className="form-input" type="text" id="address" name="address" required value={formData.address} onChange={handleInputChange} placeholder="House/Flat No., Street, Area" />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="city">City *</label>
                                    <input className="form-input" type="text" id="city" name="city" required value={formData.city} onChange={handleInputChange} placeholder="E.g., Bangalore" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="pinCode">PIN Code *</label>
                                    <input className="form-input" type="text" id="pinCode" name="pinCode" required value={formData.pinCode} onChange={handleInputChange} placeholder="560037" maxLength={6} />
                                </div>
                            </div>
                        </div>

                        {/* ===== Identification ===== */}
                        <div style={{ marginBottom: '32px' }}>
                            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '20px', paddingBottom: '8px', borderBottom: '2px solid var(--color-border)' }}>
                                🪪 Identification
                            </h2>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="aadhaarNumber">Aadhaar Number *</label>
                                    <input className="form-input" type="text" id="aadhaarNumber" name="aadhaarNumber" required value={formData.aadhaarNumber} onChange={handleInputChange} placeholder="XXXX XXXX XXXX" maxLength={14} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="drivingLicense">Driving License Number *</label>
                                    <input className="form-input" type="text" id="drivingLicense" name="drivingLicense" required value={formData.drivingLicense} onChange={handleInputChange} placeholder="KA-XX-XXXXXXXXX" />
                                </div>
                            </div>
                        </div>

                        {/* ===== Vehicle Details ===== */}
                        <div style={{ marginBottom: '32px' }}>
                            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '20px', paddingBottom: '8px', borderBottom: '2px solid var(--color-border)' }}>
                                🏍️ Vehicle Details
                            </h2>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="vehicleType">Vehicle Type *</label>
                                    <select className="form-input" id="vehicleType" name="vehicleType" required value={formData.vehicleType} onChange={handleInputChange}>
                                        <option value="">Select vehicle type</option>
                                        <option value="Bike">Bike</option>
                                        <option value="Scooter">Scooter</option>
                                        <option value="Car">Car</option>
                                        <option value="Van">Van</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="vehicleMake">Vehicle Make & Model *</label>
                                    <input className="form-input" type="text" id="vehicleMake" name="vehicleMake" required value={formData.vehicleMake} onChange={handleInputChange} placeholder="E.g., Honda Activa, Bajaj Pulsar" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="vehicleRegNumber">Registration Number *</label>
                                    <input className="form-input" type="text" id="vehicleRegNumber" name="vehicleRegNumber" required value={formData.vehicleRegNumber} onChange={handleInputChange} placeholder="KA-XX-XX-XXXX" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="vehicleYear">Vehicle Year *</label>
                                    <input className="form-input" type="number" id="vehicleYear" name="vehicleYear" required value={formData.vehicleYear} onChange={handleInputChange} placeholder="E.g., 2022" min={2000} max={2026} />
                                </div>
                            </div>
                        </div>

                        {/* ===== Availability ===== */}
                        <div style={{ marginBottom: '32px' }}>
                            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '20px', paddingBottom: '8px', borderBottom: '2px solid var(--color-border)' }}>
                                🕐 Availability
                            </h2>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="preferredShift">Preferred Shift *</label>
                                    <select className="form-input" id="preferredShift" name="preferredShift" required value={formData.preferredShift} onChange={handleInputChange}>
                                        <option value="">Select preferred shift</option>
                                        <option value="Morning (6 AM - 12 PM)">Morning (6 AM – 12 PM)</option>
                                        <option value="Afternoon (12 PM - 5 PM)">Afternoon (12 PM – 5 PM)</option>
                                        <option value="Evening (5 PM - 10 PM)">Evening (5 PM – 10 PM)</option>
                                        <option value="Night (10 PM - 6 AM)">Night (10 PM – 6 AM)</option>
                                        <option value="Flexible">Flexible / Any Time</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="availableDays">Available Days *</label>
                                    <select className="form-input" id="availableDays" name="availableDays" required value={formData.availableDays} onChange={handleInputChange}>
                                        <option value="">Select availability</option>
                                        <option value="Weekdays Only">Weekdays Only (Mon–Fri)</option>
                                        <option value="Weekends Only">Weekends Only (Sat–Sun)</option>
                                        <option value="All Days">All Days</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="startDate">Earliest Start Date *</label>
                                <input className="form-input" type="date" id="startDate" name="startDate" required value={formData.startDate} onChange={handleInputChange} />
                            </div>
                        </div>

                        {/* ===== Additional Info ===== */}
                        <div style={{ marginBottom: '32px' }}>
                            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '20px', paddingBottom: '8px', borderBottom: '2px solid var(--color-border)' }}>
                                📝 Additional Information
                            </h2>
                            <div className="form-group">
                                <label className="form-label" htmlFor="hasExperience">Do you have previous delivery experience? *</label>
                                <select className="form-input" id="hasExperience" name="hasExperience" required value={formData.hasExperience} onChange={handleInputChange}>
                                    <option value="">Select</option>
                                    <option value="Yes - Swiggy/Zomato">Yes – Swiggy / Zomato</option>
                                    <option value="Yes - Dunzo/Porter">Yes – Dunzo / Porter</option>
                                    <option value="Yes - Other Platform">Yes – Other Platform</option>
                                    <option value="Yes - Independent">Yes – Independent Delivery</option>
                                    <option value="No">No, but willing to learn</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="whyJoin">Why do you want to join us?</label>
                                <textarea
                                    className="form-textarea"
                                    id="whyJoin"
                                    name="whyJoin"
                                    value={formData.whyJoin}
                                    onChange={handleInputChange}
                                    placeholder="Tell us a bit about yourself and why you'd like to deliver for us..."
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="additionalMessage">Any other information you&apos;d like to share?</label>
                                <textarea
                                    className="form-textarea"
                                    id="additionalMessage"
                                    name="additionalMessage"
                                    value={formData.additionalMessage}
                                    onChange={handleInputChange}
                                    placeholder="E.g., preferred delivery area, availability constraints, etc."
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ width: '100%', justifyContent: 'center', marginTop: '8px', fontSize: '1.05rem' }}
                        >
                            🚗 Submit Delivery Partner Application
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
