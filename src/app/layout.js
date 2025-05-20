import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alby Snack",
  icons: {
    icon: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },
  description: "Cemilan pedas kekinian favorit kamu",
  keywords: "snack, cemilan, pedas, kekinian, alby snack",
  authors: [
    {
      name: "Alby Snack",
      url: "https://albysnack.com",
    },
  ],
  creator: "Alby Snack",
  publisher: "Alby Snack",
  openGraph: {
    title: "Alby Snack",
    description: "Cemilan pedas kekinian favorit kamu",
    url: "https://albysnack.com",
    siteName: "Alby Snack",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alby Snack",
    description: "Cemilan pedas kekinian favorit kamu",
    images: ["/images/og-image.png"],
    creator: "@albysnack",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: "no",
  },
  themeColor: "#FF3D00",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Alby Snack",
    startupImage: [
      "/images/icon.png",
      "/images/icon.png",
      "/images/icon.png",
      "/images/icon.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    noimageindex: false,
    nosnippet: false,
    noodp: false,
    notranslate: false,
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    other: {
      name: "other-verification-name",
      value: "other-verification-value",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
