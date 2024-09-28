// src/app/layout.tsx
import Head from 'next/head';

import './globals.css'
import { ReactNode } from 'react';
import Navbar from './components/Nav';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
              <Head>
              <title>IT 아웃소싱 전문 참참컴퍼니 Charm8Cham Co.</title>
        <meta name="description" content="Marketing page built with Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className='min-h-screen flex flex-col overflow-x-hidden'>      
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
