import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://aliesterfisher.dev";
const siteName = "Aliester Fisher Consulting";
const title = "Aliester Fisher — AI-Enabled Engineering Consultant";
const description =
  "Aliester Fisher helps engineering teams integrate AI into software delivery safely, operationally, and at scale through reliable AI-enabled engineering systems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Aliester Fisher",
  },
  description,
  applicationName: siteName,
  authors: [{ name: "Aliester Fisher", url: siteUrl }],
  creator: "Aliester Fisher",
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192px.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512px.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  category: "Business Services",
};

export const viewport: Viewport = {
  themeColor: "#191919",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Aliester Fisher",
      jobTitle: "AI-Enabled Engineering Consultant",
      url: siteUrl,
      image: `${siteUrl}/profile.png`,
      worksFor: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#organization`,
      name: "Aliester Fisher Consulting Ltd",
      url: siteUrl,
      logo: `${siteUrl}/og-image.png`,
      image: `${siteUrl}/og-image.png`,
      description,
      areaServed: "GB",
      founder: { "@id": `${siteUrl}/#person` },
      address: {
        "@type": "PostalAddress",
        addressCountry: "GB",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
