import "./globals.css";

export const metadata = {
  title: "SilkRoute Nexus",
  description: "Arabic / Chinese import-export management platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
