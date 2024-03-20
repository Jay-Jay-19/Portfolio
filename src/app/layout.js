import { Inter, Gothic_A1, Arsenal, Tenor_Sans } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });
const gothicA1 = Gothic_A1({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '600', '800'],
});
const arsenal = Arsenal({
  subsets: ["latin"],
  weight: ['400', '700'],
});
const tenor = Tenor_Sans({
  subsets: ["latin"],
  weight: ['400'],
});

export const metadata = {
  title: "The portfolio of Jay",
  description: "Hire me !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gothicA1.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}