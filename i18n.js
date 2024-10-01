import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'ko',
  otherLanguages: ['en'],
  localePath: 'public/locales',  // 번역 파일 경로
});

export default NextI18NextInstance;
export const { appWithTranslation, withTranslation } = NextI18NextInstance;
