// import { Inter } from "next/font/google";
import "@/styles/global.scss";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Calculadora financiera",
  description: "Calculadora financiera",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">{children}</body>
    </html>
  );
}
