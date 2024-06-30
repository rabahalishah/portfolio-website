import { Toaster } from 'react-hot-toast';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: 'Rabah Ali Shah',
  description: 'Portfolio Website made by Rabah Ali Shah',
  favicon: (
    <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
  ),
};

export default function RootLayout({ children }) {
  console.log("process.env.GID: ",process.env.GID)

  return (
    <>
      <Head>
        {/* <link rel="icon" href="/public/favicon.ico" sizes="any" />{' '} */}
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <html lang="en">
        <body className={inter.className}>
          <Toaster position="top-center" />
          {children}
        </body>
        <GoogleAnalytics gaId={`${process.env.GID}`} />
      </html>
    </>
  );
}
