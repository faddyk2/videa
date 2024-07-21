import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SigninPage from "./(auth)/sign-in/[[...sign-in]]/page";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
} from '@clerk/nextjs'

const ibm_plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "VideaAI",
  description: "AI powered Video Editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(
          "font-ibm-plex antialiased", ibm_plex.variable
        )}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
