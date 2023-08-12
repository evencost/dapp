'use client'

import './globals.css'

import { Providers } from '@/app/providers'
type LayoutProps = { children: React.ReactNode }

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <div className='flex min-h-screen items-center justify-center bg-white'>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default Layout
