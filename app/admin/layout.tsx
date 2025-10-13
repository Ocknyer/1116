import { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: '관리페이지',
  description: '공연 예매 관리페이지',
  icons: {
    icon: '/icon.png',
    apple: {
      url: '/apple-icon.png',
      sizes: '180x180',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <head>
        <title>관리페이지</title>
        <meta property='og:description' content='공연 예매 관리페이지' />
        <script
          defer
          type='text/javascript'
          src='https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=aejuu1jw3l'
        />
      </head>
      <body className={`relative bg-white`}>{children}</body>
    </html>
  );
}
