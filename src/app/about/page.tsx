import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us | Sri Hesritha's Cloud Kitchen",
    description: "Learn about Sri Hesritha's Cloud Kitchen — our story, values, and commitment to authentic home-style food in Bangalore.",
};

export default function AboutPage() {
    return (
        <div className="about-page section">
            <div className="container">
                {/* Hero */}
                <div className="about-page__hero">
                    <span className="section-label">About Us</span>
                    <h1>Our Kitchen, Our Passion</h1>
                    <p>
                        Every great meal starts with a story. Ours begins with a love for food,
                        family recipes, and the dream of sharing them with you.
                    </p>
                </div>

                {/* Story */}
                <div className="about-page__story">
                    <div className="about-page__story-content">
                        <h2>The Sri Hesritha&apos;s Story</h2>
                        <p>
                            Sri Hesritha&apos;s Cloud Kitchen was born from a simple belief: everyone deserves
                            access to delicious, home-style food made with love and the freshest ingredients.
                        </p>
                        <p>
                            What started as cooking for friends and family quickly grew into something bigger.
                            The overwhelming response to our authentic recipes — from our signature Bagara Rice
                            to our slow-cooked Mutton Gravy — inspired us to launch our cloud kitchen.
                        </p>
                        <p>
                            Today, we serve hundreds of happy customers across Bangalore, delivering the warmth
                            and comfort of a home-cooked meal right to their doorstep.
                        </p>
                    </div>
                    <div className="about-page__story-image">
                        <Image
                            src="/images/kitchen-story.jpg"
                            alt="Our Kitchen Story"
                            width={600}
                            height={450}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>

                {/* Values */}
                <div className="text-center" style={{ marginBottom: 40 }}>
                    <span className="section-label">What We Stand For</span>
                    <h2 className="section-title">Our Values</h2>
                </div>
                <div className="about-page__values">
                    <div className="value-card">
                        <div className="value-card__icon">🌿</div>
                        <h3>Fresh Ingredients</h3>
                        <p>We source the freshest vegetables, meats, and spices daily from trusted local suppliers.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-card__icon">👨‍🍳</div>
                        <h3>Traditional Recipes</h3>
                        <p>Our recipes are passed down through generations, preserving authentic, time-tested flavors.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-card__icon">💛</div>
                        <h3>Made with Love</h3>
                        <p>Every dish is prepared with care and passion, just like cooking for our own family.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-card__icon">🚀</div>
                        <h3>Fast Delivery</h3>
                        <p>Hot, fresh food delivered to your doorstep quickly so you can enjoy it at its best.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-card__icon">🧹</div>
                        <h3>Hygiene First</h3>
                        <p>Our kitchen maintains the highest standards of cleanliness and food safety.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-card__icon">💰</div>
                        <h3>Honest Pricing</h3>
                        <p>Premium quality food at fair prices — because great food shouldn&apos;t break the bank.</p>
                    </div>
                </div>

                {/* Stats */}
                <div className="text-center" style={{ marginBottom: 40 }}>
                    <span className="section-label">By the Numbers</span>
                    <h2 className="section-title">Our Impact</h2>
                </div>
                <div className="about-page__stats-grid">
                    <div className="about-page__stat">
                        <span className="about-page__stat-number">500+</span>
                        <span className="about-page__stat-label">Happy Customers</span>
                    </div>
                    <div className="about-page__stat">
                        <span className="about-page__stat-number">14+</span>
                        <span className="about-page__stat-label">Signature Dishes</span>
                    </div>
                    <div className="about-page__stat">
                        <span className="about-page__stat-number">2000+</span>
                        <span className="about-page__stat-label">Meals Delivered</span>
                    </div>
                    <div className="about-page__stat">
                        <span className="about-page__stat-number">4.8★</span>
                        <span className="about-page__stat-label">Average Rating</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
