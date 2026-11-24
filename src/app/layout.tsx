import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-blush-phi-70.vercel.app"),
  title: "이건 · Geon Lee — Portfolio",
  description:
    "이건의 개발 포트폴리오. Snaplink 출시·운영, Pertineo 백엔드 마이그레이션, Filterify 멀티모달 실험.",
  openGraph: {
    title: "이건 · Geon Lee — Portfolio",
    description: "Snaplink · Pertineo · Filterify | Backend · Frontend · AI/ML",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
