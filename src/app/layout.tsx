import './globals.css';
import { Inter, Roboto_Mono, Montserrat } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: {
    default: 'Ashutosh Gautam | Web Developer & Designer',
    template: '%s | Ashutosh Gautam',
  },
  description: 'Professional portfolio and templates platform by Ashutosh Gautam, specializing in web development, Next.js, and digital solutions.',
  keywords: ['web development', 'portfolio templates', 'Next.js', 'Three.js', 'Ashutosh Gautam'],
  authors: [{ name: 'Ashutosh Gautam' }],
  creator: 'Ashutosh Gautam',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashutoshgautam.com',
    title: 'Ashutosh Gautam | Web Developer & Designer',
    description: 'Professional portfolio and templates platform by Ashutosh Gautam.',
    siteName: 'Ashutosh Gautam',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashutosh Gautam | Web Developer & Designer',
    description: 'Professional portfolio and templates platform by Ashutosh Gautam',
    creator: '@ashutoshgautam',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} ${montserrat.variable}`}>
      <body className="bg-dark text-light min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
