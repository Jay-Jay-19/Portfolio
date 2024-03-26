import { Barlow } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: "The portfolio of Jay",
  description: "Hire me !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}