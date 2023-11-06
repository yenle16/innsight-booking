import NavbarHost from "@/components/navbar/navbarhost"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function HostLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <NavbarHost />
          {children}
        </body>
      </html>
    )
  }