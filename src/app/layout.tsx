import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Sri Hesritha's Cloud Kitchen | Premium Home-Style Food in Bangalore",
  description:
    "Order delicious home-style food from Sri Hesritha's Cloud Kitchen. Authentic flavors, fresh ingredients, and fast delivery in Bangalore. Non-veg specials, veg delights, and wholesome combos.",
  keywords: [
    "cloud kitchen",
    "Bangalore food",
    "home delivery",
    "biryani",
    "Indian food",
    "Sri Hesritha",
    "non-veg",
    "veg meals",
  ],
  openGraph: {
    title: "Sri Hesritha's Cloud Kitchen",
    description: "Premium home-style food delivered to your doorstep",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
