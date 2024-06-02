"use client"

import { Text } from "@medusajs/ui"
import Link from "next/link"

const FooterNav = () => {

  return (
    <>
      <div className="content-container flex flex-col lg:px-20">
        <div className="grid grid-cols-12 py-10">
          <div className="ml-10 col-span-4">
            <Link
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              Q & C
            </Link>
          </div>
          <div className="text-small-regular grid grid-cols-3 gap-x-10 md:gap-x-16 cols-span-8">
            <div className="col-span-3 flex flex-col gap-y-2 w-full">
              <span className="txt-small-plus txt-ui-fg-base">Chile</span>
              <ul className="gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <span>Camino de la Colina 1455, Huechuraba, Santiago – Chile</span>
                </li>
                
              </ul>
            </div>
          </div>
        </div>        
      </div>
      <Text className="text-center bg-black py-2 w-full">
        C&Q Revestimiento Industrial © {new Date().getFullYear()} - Todos los derechos reservados.
      </Text>
    </>
  )
}

export default FooterNav
