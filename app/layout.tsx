import "./globals.css"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
    title: 'Admin Dashboard',
    description: 'A dashboard for managing and visualizing your data',
}

interface Props {
    children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
