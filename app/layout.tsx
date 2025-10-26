import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/context/cart-context";
import { WishlistProvider } from "@/context/wishlist-context";

const MontserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Home - Pendeet",
    template: "%s - Pendeet",
  },
  description:
    "Pendeet is an AI-powered ecommerce store for easy shopping. Discover trending products with reels, advertise faster as a vendor, shop seamlessly with our chatbot, and try products using augmented reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${MontserratFont.variable} antialiased`}>
        <QueryProvider>
          <CartProvider>
            <WishlistProvider>
              <Toaster
                gutter={12}
                containerStyle={{ margin: "2px" }}
                toastOptions={{
                  success: {
                    duration: 2000,
                    style: {
                      background: "#9c27b0",
                      color: "white",
                    },
                    iconTheme: {
                      primary: "#fff",
                      secondary: "#9c27b0",
                    },
                  },
                  error: {
                    duration: 2000,

                    style: {
                      background: "#ef4444",
                      color: "white",
                    },
                  },
                  style: {
                    fontSize: "14px",
                    maxWidth: "500px",
                    padding: "16px 24px",
                  },
                }}
              />
              {children}
            </WishlistProvider>
          </CartProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
