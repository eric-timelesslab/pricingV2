import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pricing | AI Coaching",
  description: "Choose the plan that fits your grind. From basic practice to elite AI-driven leak detection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
