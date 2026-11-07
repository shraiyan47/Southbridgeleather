import type { Metadata } from "next";
import { siteUrl } from "./site-url";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Southbridge Leather | Handmade Leather Goods in Bangladesh",
  description:
    "Discover Southbridge Leather's handmade leather bags, wallets, belts, and everyday accessories. Thoughtfully crafted leather goods from Bangladesh.",
  keywords: [
    "leather goods Bangladesh",
    "handmade leather goods",
    "leather bags Bangladesh",
    "leather wallets",
    "leather belts",
    "leather accessories",
    "চামড়ার পণ্য বাংলাদেশ",
    "চামড়ার ব্যাগ",
  ],
  authors: [{ name: "Shahadat Hossain (Raiyan)" }],
  creator: "Shahadat Hossain (Raiyan)",
  publisher: "Green Tech Zone",
  other: {
    "author-email": "shraiyan47@gmail.com",
  },
  openGraph: {
    title: "Southbridge Leather | Handmade Leather Goods in Bangladesh",
    description:
      "Handmade leather bags, wallets, belts, and everyday accessories, thoughtfully crafted by Southbridge Leather.",
    siteName: "Southbridge Leather",
    locale: "en_BD",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Southbridge Leather | Handmade Leather Goods in Bangladesh",
    description:
      "Handmade leather bags, wallets, belts, and everyday accessories, thoughtfully crafted by Southbridge Leather.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
