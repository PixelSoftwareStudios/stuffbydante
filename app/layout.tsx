import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: 'stuffbydante.net',
		template: '%s | stuffbydante.net',
	},
	description: 'Portfolio of Dante Ielpi',
	openGraph: {
		title: 'stuffbydante.net',
		description: 'Portfolio of Dante Ielpi',
		url: baseUrl,
		siteName: 'stuffbydante.net',
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'apple-mobile-web-app-title': 'stuffbydante.net',
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="en"
			className={cx(
				'text-black bg-white dark:text-white dark:bg-black',
				GeistSans.variable,
				GeistMono.variable
			)}
		>
			<body className="antialiased max-w-2xl mt-8 mx-auto px-4">
				<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
					<Navbar />
					{children}
					<Footer />
					<Analytics />
					<SpeedInsights />
				</main>
			</body>
		</html>
	)
}