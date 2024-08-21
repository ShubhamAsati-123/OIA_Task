import type { Metadata } from "next";
import { Figtree, Inter as FontSans, Lato, Montserrat, Nunito } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import AuthProvider from "./provider/AuthProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "700"
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: "600",
});
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: "600",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable, montserrat.variable, lato.variable, nunito.variable, figtree.variable
        )}
      >
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen bg-primary">{children}</div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
