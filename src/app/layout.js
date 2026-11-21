import "./globals.css";

export const metadata = {
  title: "Doctor Tracker",
  description: "Manage doctors and patients efficiently.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
