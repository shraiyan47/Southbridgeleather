import type { Metadata } from "next";
import Script from "next/script";
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
      <body>
      <h1 hidden>Southbridge Leather. Leather Goods made in Bangladesh.</h1>
      <h2 hidden>Handmade Leather Goods in Bangladesh. Handmade Leather Wallet. Handmade Leather Belts. Handmade Leather Accessories. Handmade Leather Bags. Handmade Long wallet.</h2>
      <h2 hidden>Leather Goods in Bangladesh. Best Leather Goods in Bangladesh. Best Leather Wallets in Bangladesh. Best Leather Belts in Bangladesh. Best Leather Accessories in Bangladesh. Best Leather Bags in Bangladesh. Best Long wallet in Bangladesh. Best Handmade Leather Goods in Bangladesh. </h2>
      <h3 hidden>Southbridge Leather brings crafted leather goods to customers in Bangladesh, combining timeless style, practical design, and attention to detail. Explore a collection of leather bags, wallets, belts, and everyday accessories created for people who value quality and lasting use. Each piece is designed to complement daily routines while adding a classic touch to personal style. Whether you are looking for a dependable wallet, a versatile bag, or a well-finished belt, Southbridge Leather makes it easier to find leather essentials for work, travel, and everyday life. We believe good leather goods should be functional, comfortable to use, and made with care. Browse our collection, discover designs that suit your needs, and find an accessory that feels right for your lifestyle. Southbridge Leather is proud to present leather products in Bangladesh with a focus on craftsmanship, useful details, and enduring appeal. Choose practical leather essentials made to accompany you through everyday moments.</h3>
      <h4 hidden>Southbridge Leather is a Bangladesh-based brand that specializes in handmade leather goods, including bags, wallets, belts, and everyday accessories. Our products are thoughtfully crafted to combine timeless style with practical design, ensuring both functionality and aesthetic appeal. Each piece is designed to complement daily routines while adding a classic touch to personal style. Whether you are looking for a dependable wallet, a versatile bag, or a well-finished belt, Southbridge Leather makes it easier to find leather essentials for work, travel, and everyday life. We believe good leather goods should be functional, comfortable to use, and made with care. Browse our collection, discover designs that suit your needs, and find an accessory that feels right for your lifestyle. Southbridge Leather is proud to present leather products in Bangladesh with a focus on craftsmanship, useful details, and enduring appeal. Choose practical leather essentials made to accompany you through everyday moments.</h4>
      <h5 hidden> Leather has been valued for generations for its durability, natural character, and timeless appeal. From everyday essentials to stylish accessories, leather goods bring together practicality, elegance, and craftsmanship. Handcrafted leather products carry a unique charm, reflecting the skill, patience, and attention to detail involved in creating each piece. Unlike mass-produced accessories, carefully crafted leather goods are designed with thoughtful construction, functional details, and an appreciation for quality materials. At Southbridge Leather, we appreciate the beauty and versatility of leather and its place in modern everyday life. Our collection features leather bags, wallets, belts, and other accessories designed to complement different lifestyles and personal preferences. Whether you need a reliable everyday companion, a practical travel accessory, or a timeless addition to your wardrobe, leather offers a distinctive combination of style and usefulness. Handcrafted goods are more than ordinary products; they represent dedication to traditional techniques and the value of thoughtful design. With proper care, quality leather products can serve you for years, developing a distinctive character over time. Discover the world of leather goods with Southbridge Leather, where timeless inspiration meets everyday functionality and the enduring appeal of handcrafted accessories. </h5>
      <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M2NLFL75');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M2NLFL75"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
