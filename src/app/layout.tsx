import { Inter } from "next/font/google";
import { PageHeader } from "~/components/page-header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jungle",
  description: "Jungle is a social network for brands and creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageHeader />

        {children}
      </body>
    </html>
  );
}
