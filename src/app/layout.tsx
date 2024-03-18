import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imobiliária Carlos Tortorella",
  description: "imobiliária em vinhedo do Carlos Tortorella",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ReactQueryProvider>
          <Header />
            {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
