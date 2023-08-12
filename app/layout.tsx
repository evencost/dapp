'use client'

import './globals.css'

import { Providers } from '@/app/providers'
import localFont from 'next/font/local'

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
          {/* <div className='flex min-h-screen justify-center bg-[#F3F3F3]'> */}
          <div className='flex min-h-screen justify-center bg-[#4da14c]'>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default Layout
