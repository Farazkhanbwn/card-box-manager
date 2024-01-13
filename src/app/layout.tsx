'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthContainer from '@/context/auth-context/auth-container'
import { PropsWithChildren } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContainer>{children}</AuthContainer>
      </body>
    </html>
  )
}
