"use client";

import { AuthProvider } from "@/contexts/AuthContext";
import { Navbar } from "@/components/Navbar";
import { HelpButton } from "@/components/HelpButton";
import { AccessibilityAnnouncer } from "@/components/AccessibilityAnnouncer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Navbar />
      {children}
      <HelpButton />
      <AccessibilityAnnouncer />
    </AuthProvider>
  );
}
