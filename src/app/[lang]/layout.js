import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { getDictionary } from "./dictionaries";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-7xl mx-auto">
          <Header dict={dict} lang={lang} />
          {children}
          <Footer dict={dict} lang={lang} />
        </main>
      </body>
    </html>
  );
}