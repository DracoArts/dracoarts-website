import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


//  export const metadata: Metadata = {
//    title: "test test",
//    description: "test test",
//  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />

    </>
  );
}
