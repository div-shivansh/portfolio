import type { Metadata } from "next";
import { Londrina_Shadow, Space_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import GridBackground from "@/components/GridBackground";
import Navbar from "@/components/Navbar";

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

const londrinaShadow = Londrina_Shadow({
  weight: "400",
  variable: "--font-londrina",
  subsets: ["latin"]
});
const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-space"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shivanshtiwari.in"),
  title: {
    default: 'Shivansh Tiwari | Full Stack & AI Developer',
    template: '%s | Shivansh Tiwari',
  },
  description: "Portfolio of Shivansh Tiwari, a Full Stack Developer building high-performance Next.js & MERN stack web apps with Generative AI integration.",
  keywords: [
    "Shivansh Tiwari",
    "Shivansh Tiwari Portfolio",
    "Shivansh Tiwari Developer",
    "Full Stack Developer Delhi",
    "MERN Stack Developer",
    "Next.js Developer India",
    "React Developer Delhi",
    "Generative AI Web developer",
  ],
  authors: [{ name: "Shivansh Tiwari", url: "https://shivanshtiwari.in" }],
  creator: "Shivansh Tiwari",
  publisher: "Shivansh Tiwari",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shivanshtiwari.in',
    title: 'Shivansh Tiwari | Full Stack Developer ',
    description: 'Portfolio of Shivansh Tiwari, a Full Stack Developer building high-performance Next.js & MERN stack web apps with Generative AI integration.',
    siteName: 'Shivansh Tiwari Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivansh Tiwari | Full Stack Developer',
    description: 'Portfolio of Shivansh Tiwari, a Full Stack Developer building high-performance Next.js & MERN stack web apps with Generative AI integration.',
    creator: '@div_shiansh',
  },
  alternates: {
    canonical: 'https://shivanshtiwari.in',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shivansh Tiwari',
    alternateName: 'div-shivansh',
    url: 'https://shivanshtiwari.in',
    image: 'https://shivanshtiwari.in/opengraph-image',
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance / Software Engineering',
    },
    sameAs: [
      'https://github.com/div-shivansh',
      'https://www.linkedin.com/in/shivansh-tiwari03/',
      'https://x.com/div_shiansh',
      'https://www.instagram.com/div.shivansh/',
    ],
    knowsAbout: [
      'Web Development',
      'Full Stack Development',
      'MERN Stack',
      'Next.js',
      'React',
      'Node.js',
      'Generative AI Integration',
      'Data Science',
    ], 
  }
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", londrinaShadow.variable, spaceMono.variable, "font-mono", jetbrainsMono.variable)}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GridBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
