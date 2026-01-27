import type { Metadata } from "next";
import { Mali } from "next/font/google";
import "./globals.css";

const mali = Mali({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-mali",
});

export const metadata: Metadata = {
  title: "Green Hell Crafting",
  description: "Survival Crafting Guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mali.variable} font-sans antialiased text-[#e0e0e0]`}
      >
        <img
          src="/assets/background.png"
          alt="Background"
          className="fixed inset-0 w-full h-full object-cover -z-10 blur-[2px]"
          style={{ objectPosition: "30% 50%" }}
        />
        {children}
      </body>
    </html>
  );
}
