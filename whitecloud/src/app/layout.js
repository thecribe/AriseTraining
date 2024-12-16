import "./globals.css";

export const metadata = {
  title: "Whitecloud Examination Software",
  description: "An Examination Software for Whitecloud school",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
