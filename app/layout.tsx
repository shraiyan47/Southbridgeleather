import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Southbridge Leather — Made to be kept",
  description: "Considered leather goods, made by hand and finished with care.",
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
