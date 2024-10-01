/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // 도메인을 배열로 지정
  },
  i18n: {
 locales: ['en', 'ko'],  // 지원할 언어
    defaultLocale: 'ko',    // 기본 언어
    localeDetection: false, // 자동 감지 비활성화
  },
};

export default nextConfig;
