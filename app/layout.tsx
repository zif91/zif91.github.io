import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://zif91.github.io'),
  title: 'Гармония — психологическая клиника',
  description: 'Подбор психолога в Москве и онлайн. Первая короткая встреча бесплатно.',
  openGraph: {
    title: 'Гармония — психологическая клиника',
    description: 'С вами всё не так сложно, как кажется. Подбор психолога в Москве и онлайн.',
    type: 'website',
    locale: 'ru_RU',
    images: [{ url: '/og.png', width: 1730, height: 909, alt: 'Гармония — психологическая клиника' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Гармония — психологическая клиника',
    description: 'С вами всё не так сложно, как кажется.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
