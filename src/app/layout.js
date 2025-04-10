import { Inter } from "next/font/google";
import "./globals.css";
import "rsuite/dist/rsuite.min.css";


// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({
  subsets: ["latin"],
  weights: [400, 500, 700],
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}
