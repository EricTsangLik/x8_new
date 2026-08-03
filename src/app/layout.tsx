import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "X8 PRODUCTION | 專業活動製作",
  description: "專業活動製作，創造非凡體驗。商場 POP-UP | BACKDROP | 展覽搭建 | 噴畫及印刷 | 店鋪裝修工程",
  icons: {
    icon: '/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}