import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealProvider } from "@/components/RevealProvider";
import "./globals.css";

const inter = Inter({
  variable: "--f-body",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--f-head",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Orvian Group Logistics | Precision Supply Chain · UK",
    template: "%s | Orvian Group Logistics",
  },
  description:
    "Orvian Group Logistics delivers end-to-end supply chain solutions with absolute precision, reliability, and security, including premier temperature-controlled transportation across the UK and international corridors.",
  metadataBase: new URL("https://orviangroup.co.uk"),
  openGraph: {
    title: "Orvian Group Logistics",
    description:
      "End-to-end logistics with cold-chain excellence, advanced fleet management, and discreet high-value freight.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <RevealProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </RevealProvider>
      </body>
    </html>
  );
}
