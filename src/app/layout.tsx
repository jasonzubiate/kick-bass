import type { Metadata } from "next";
import "./globals.css";
import LenisContext from "./context/lenis-context";
import Header from "@/app/components/ui/Header";
import Footer from "./components/ui/Footer";

export const metadata: Metadata = {
  title: "Kick & Bass | Level Up Your Music Production",
  description:
    "Kick & Bass is a music production coaching platform that helps you level up your music production skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans-neutral">
        <LenisContext>
          <Header />
          {children}
          <Footer />
        </LenisContext>
      </body>
    </html>
  );
}
