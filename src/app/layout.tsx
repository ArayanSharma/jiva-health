import "./globals.css";

export const metadata = {
  title: "Jiva Health Admin",
  description: "Healthcare Admin Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}