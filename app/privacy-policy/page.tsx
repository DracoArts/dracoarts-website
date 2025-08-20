import Banner from "@/components/privacy/Banner";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import Privacy from "@/components/privacy/Privacy";
//import Footer from "@/components/home-2/Footer";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });

export const metadata: Metadata = {
  title: "Privacy Policy | DracoArts - Web3 Gaming Studio",
  description:
    "Discover how DracoArts, a leading Web3 gaming studio, protects your privacy and manages client data, advertising information, and user security. Learn about our commitment to safeguarding your personal information and ad privacy.",
  keywords: [
    "DracoArts",
    "Privacy Policy",
    "Web3 Gaming",
    "Game Studio",
    "Client Data Protection",
    "Ad Privacy",
    "User Security",
    "Blockchain Games",
    "Data Handling",
    "Advertising Policy",
    "Crypto Games",
    "NFT Games",
    "Web3 Privacy"
  ],
  robots: "index, follow",
  openGraph: {
    title: "Privacy Policy | DracoArts - Web3 Gaming Studio",
    description:
      "Read the privacy policy of DracoArts to understand how we handle client data, advertising privacy, and user security in our Web3 gaming ecosystem.",
    url: "https://dracoarts.com/privacy-policy",
    siteName: "DracoArts",
    type: "website",
    images: [
      {
        url: "https://dracoarts.com/og-image-privacy-policy.png",
        width: 1200,
        height: 630,
        alt: "DracoArts Privacy Policy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | DracoArts - Web3 Gaming Studio",
    description:
      "Learn how DracoArts protects your privacy, manages client data, and ensures ad privacy in our Web3 gaming experiences.",
    images: ["https://dracoarts.com/og-image-privacy-policy.png"]
  },
  alternates: {
    canonical: "https://dracoarts.com/privacy-policy"
  }
};

const Page = () => {
  return (
    <>
      <Header />
      <Banner />
      <Privacy />
      {/* <Footer/> */}
    </>
  );
};

export default Page;
