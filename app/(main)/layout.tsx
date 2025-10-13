import BottomNav from '@/components/BottomNav';
import { METADATA_JSON } from '@/constant';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import '../globals.css';

export const metadata: Metadata = {
  title: METADATA_JSON.title,
  description: METADATA_JSON.description,
  openGraph: {
    title: METADATA_JSON.title,
    description: METADATA_JSON.description,
    images: [
      {
        url: '/og/opengraph-image.png',
        alt: `${METADATA_JSON.title} 오픈그래프 이미지`,
      },
    ],
    siteName: METADATA_JSON.title,
    locale: 'ko_KR',
    type: 'website',
  },
  icons: {
    icon: '/icon.png',
    apple: {
      url: '/apple-icon.png',
      sizes: '180x180',
    },
  },
};

const capsSmall = localFont({
  src: '../../public/fonts/Capsmall.ttf',
  display: 'swap',
  variable: '--font-capsmall',
});

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <head>
        <title>{METADATA_JSON.title}</title>
        <meta property='og:description' content={METADATA_JSON.description} />
        <script
          defer
          type='text/javascript'
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID}`}
        />
      </head>
      <body className={`relative bg-gray-200 ${capsSmall.variable} ${pretendard.variable}`}>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
