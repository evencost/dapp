'use client'

import './globals.css'

import { Providers } from '@/app/providers'
import localFont from 'next/font/local'
import { Web3Button } from '@web3modal/react'
import { Header } from '@/components/Header'

const tasaOrbiter = localFont({
  src: '../fonts/TASAOrbiterVF.woff2',
  variable: '--font-tasa-orbiter',
})

type LayoutProps = { children: React.ReactNode }

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang='en'>
      <body className={`${tasaOrbiter.variable}`}>
        <Providers>
          <Header />
          <div className='relative flex min-h-screen items-center justify-center bg-[#F3F3F3]'>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default Layout
