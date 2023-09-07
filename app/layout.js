
import { Toaster } from 'react-hot-toast'
import Cart from './components/Cart'
import Nav from './components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
import Checkout from './components/Checkout'
import Head from 'next/head'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Phanox',
  description: 'E-commerce design app',
  icons: {
    icon: '/public/images/favicon.ico',
    shortcut: '/public/images/favicon.ico',
    apple: '/public/images/favicon.ico',
   
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      </Head>
      <body className={inter.className}>
      <main className="p-4 !mt-20 overflow-x-hidden main-container">
        <Nav/>
        <Cart >
          <Checkout/>
        </Cart>
        <Toaster position='top-center'/>
        
        

        
        
        {children}
        
      </main>
        </body>
    </html>
  )
}
