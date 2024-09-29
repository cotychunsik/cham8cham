// src/app/layout.tsx
import Head from 'next/head';
import { Metadata } from 'next';

import './globals.css'
import { ReactNode } from 'react';
import Navbar from './components/Nav';
import Footer from './components/Footer';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'SI expert Charm&Cham Co',
    description: '외주개발, SI, IT아웃소싱, 퍼블리싱 외주, 백엔드 외주',
    other: {
      // 네이버 소유권 확인 메타 태그
      'naver-site-verification': '36004bd753e8793dd78e81c8a54ea173be67d4a0',
      // 구글 소유권 확인 메타 태그
      'google-site-verification': 'csLoOqnnkMTWJeRekG7X6lt7eJuuJFHbktPcBHcbd-0',
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
              <Head>
              <title>IT 아웃소싱 전문 참참컴퍼니 Charm8Cham Co.</title>
        <meta name="참참컴퍼니 SI 개발" content="비대면 외주 전문 IT 아웃소싱 참참컴퍼니" />
        <meta name="naver-site-verification" content="36004bd753e8793dd78e81c8a54ea173be67d4a0" />
        <meta name="google-site-verification" content="csLoOqnnkMTWJeRekG7X6lt7eJuuJFHbktPcBHcbd-0" />
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
