import Footer from "@modules/layout/templates/footer/index"
import Nav from "@modules/layout/templates/nav/index"
import React from "react"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
