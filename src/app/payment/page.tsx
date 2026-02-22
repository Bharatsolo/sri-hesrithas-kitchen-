'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function PaymentPage() {
    const router = useRouter();
    const { totalPrice, clearCart } = useCart();
    const [waMessage, setWaMessage] = useState<string>('');
    const [amount, setAmount] = useState<string>('0');
    const [isLoading, setIsLoading] = useState(true);
    const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);

    useEffect(() => {
        const msg = localStorage.getItem('pendingWaMessage');
        if (!msg) {
            router.push('/order');
            return;
        }
        setWaMessage(msg);

        const savedAmount = localStorage.getItem('paymentAmount');
        if (savedAmount && savedAmount !== '0') {
            setAmount(savedAmount);
        } else if (totalPrice > 0) {
            setAmount(totalPrice.toString());
        }

        setIsLoading(false);
    }, [router, totalPrice]);

    const handleConfirmPayment = () => {
        const encodedMessage = encodeURIComponent(waMessage);
        window.open(`https://wa.me/918074702928?text=${encodedMessage}`, '_blank');

        // Clear cart and pending message after proceeding
        clearCart();
        localStorage.removeItem('pendingWaMessage');
        localStorage.removeItem('paymentAmount');
        router.push('/');
    };

    if (isLoading) {
        return <div className="text-center section" style={{ minHeight: '60vh' }}>Loading...</div>;
    }

    return (
        <div className="book-page section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="container" style={{ maxWidth: '500px' }}>
                <div className="text-center" style={{ marginBottom: 32 }}>
                    <span className="section-label">Payment</span>
                    <h1 className="section-title">Complete Your Order</h1>
                    <p className="section-subtitle">
                        Please scan the QR code to pay using PhonePe or any UPI app.
                    </p>
                </div>

                <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '32px', textAlign: 'center', color: '#000', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '8px', color: '#5f259f' }}>PhonePe</h2>
                    <p style={{ fontWeight: 'bold', marginBottom: '24px', fontSize: '1.2rem' }}>M V VARALAKSHMI</p>

                    <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', marginBottom: '24px', backgroundColor: '#f0f0f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <Image
                            src="/images/payment-qr.jpg"
                            alt="Payment QR Code"
                            fill
                            style={{ objectFit: 'contain' }}
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.innerHTML = '<div style="padding: 2rem; color: #666; font-size: 0.9rem;">Please place your QR code named <b>payment-qr.jpg</b> in the <b>public/images</b> folder.</div>';
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '24px', borderTop: '1px dashed #ccc', borderBottom: '1px dashed #ccc', padding: '16px 0' }}>
                        <p style={{ fontSize: '1.2rem', margin: 0 }}>Amount to Pay</p>
                        <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00ba00', margin: 0 }}>
                            {amount === 'Bulk Inquiry' ? 'To be confirmed' : `₹${amount}`}
                        </p>
                    </div>

                    <div style={{ backgroundColor: '#e8f4fd', color: '#0056b3', padding: '12px', borderRadius: '8px', fontSize: '0.9rem', marginBottom: '24px', textAlign: 'left' }}>
                        <strong>Note:</strong> After successful payment, please click the button below to send your order details via WhatsApp.
                    </div>

                    <button
                        className="btn btn-whatsapp"
                        onClick={handleConfirmPayment}
                        style={{ width: '100%', justifyContent: 'center', fontSize: '1.1rem', padding: '16px' }}
                    >
                        ✅ I Have Paid, Send Order
                    </button>
                </div>
            </div>
        </div>
    );
}
