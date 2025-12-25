import {Inter} from "next/font/google";
import { ConvexClientProvider } from "../components/convex-client-provider";
import Header from "../components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { UserStoreProvider } from "../components/user-store-provider";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SplitMate",
  description: "A bill splitting app to make group expenses easy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo.png" />
      </head>
      <body className={`${inter.className}`}>
        <ClerkProvider>
          <ConvexClientProvider>
            <UserStoreProvider>
              <Header />
              <main className="min-h-screen">
                <Toaster richColors />
                {children}
              </main>
            </UserStoreProvider>
          </ConvexClientProvider>
        </ClerkProvider>
        
      </body>
    </html>
  );
}
