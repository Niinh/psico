import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Yanca Pina - Psicóloga | Terapia Online e Presencial',
  description: 'Psicóloga especializada em terapia cognitivo-comportamental, ansiedade e relacionamentos. Atendimento online e presencial. Agende sua consulta.',
  keywords: ['psicóloga', 'terapia', 'ansiedade', 'relacionamentos', 'terapia online', 'Yanca Pina'],
  authors: [{ name: 'Yanca Pina' }],
  creator: 'Yanca Pina',
  publisher: 'Yanca Pina',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://yancapina.com.br',
    title: 'Yanca Pina - Psicóloga | Terapia Online e Presencial',
    description: 'Psicóloga especializada em terapia cognitivo-comportamental, ansiedade e relacionamentos. Atendimento online e presencial.',
    siteName: 'Yanca Pina - Psicóloga',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yanca Pina - Psicóloga | Terapia Online e Presencial',
    description: 'Psicóloga especializada em terapia cognitivo-comportamental, ansiedade e relacionamentos.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Yanca Pina',
  jobTitle: 'Psicóloga',
  description: 'Psicóloga especializada em terapia cognitivo-comportamental, ansiedade e relacionamentos',
  url: 'https://yancapina.com.br',
  sameAs: [
    'https://instagram.com/yancapina.psi',
    'https://linkedin.com/in/yancapina'
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR'
  },
  telephone: '+55-11-99999-9999',
  email: 'contato@yancapina.com.br'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}