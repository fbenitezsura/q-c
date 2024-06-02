import Footer from "@modules/layout/templates/footer/index"
import Nav from "@modules/layout/templates/nav/index"

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}
