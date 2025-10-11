
import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
  pageData?: any
}

const Layout = ({ children, pageData }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer pageData={pageData} />
    </>
  )
}

export default Layout
