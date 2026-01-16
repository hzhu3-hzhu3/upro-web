import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/providers/QueryProvider";
import { HelpButton } from "@/components/HelpButton";
import { AccessibilityAnnouncer } from "@/components/AccessibilityAnnouncer";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

// Dynamically import components that use Supabase to avoid loading during SSG
const AuthProvider = dynamic(
  () => import("@/contexts/AuthContext").then((mod) => mod.AuthProvider),
  { ssr: false }
);

const Navbar = dynamic(
  () => import("@/components/Navbar").then((mod) => ({ default: mod.Navbar })),
  { ssr: false }
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Train Smarter, Play Better – U-Pro Soccer",
  description:
    "U-Pro Soccer is the AI-powered, gamified soccer training platform that helps kids train at home, earn rewards, and level up — all from their phone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
            <HelpButton />
            <AccessibilityAnnouncer />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
