"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import useToggleState from "@lib/hooks/use-toggle-state"
import Hamburger from "@modules/common/components/hamburger/index"
import SideMenu from "@modules/layout/components/side-menu/index"
import MobileMenu from "@modules/mobile-menu/templates/index"
import Link from "next/link"

const Nav = () => {
  const { toggle } = useMobileMenu()
  const {
    state: searchModalState,
    close: searchModalClose,
    open: searchModalOpen,
  } = useToggleState()

  const menuNavbar = [{
    name: 'Empresa',
    link: '/empresa'
  }, {
    name: 'Servicios',
    link: '/servicios'
  }, {
    name: 'Proyectos',
    link: '/proyectos'
  },
  {
    name: 'Contacto',
    link: '/contacto'
  }]

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 px-8 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="text-ui-fg-subtle flex items-center 
        justify-between lg:justify-around w-full h-full text-small-regular">

          <div className="flex items-center h-full">
            <Link
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
            >
              Q & C
            </Link>
          </div>

          <div className="basis-0 h-full flex items-center">
            <div className="block small:hidden">
            </div>
            
            <ul className="hidden lg:flex">
              {menuNavbar.map((menu) => {
                return (
                  <Link className="hover:text-ui-fg-base" href={menu.link} >
                    <li className="ml-6">{menu.name}</li>
                  </Link>
                )
              })}
            </ul>
            <div className="block lg:hidden">
              <Hamburger setOpen={toggle}/>
            </div>
          </div>

        </nav>
        <MobileMenu />
      </header>
    </div >
  )
}

export default Nav
