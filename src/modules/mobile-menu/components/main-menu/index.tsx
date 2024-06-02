import { useMobileMenu } from "@lib/context/mobile-menu-context"
import ChevronDown from "@modules/common/icons/chevron-down"
import { MagnifyingGlassMini, XMark as X } from "@medusajs/icons"
import Link from "next/link"
import ReactCountryFlag from "react-country-flag"
import { Heading } from "@medusajs/ui"

const MainMenu = () => {

  const {
    close,
    screen: [_, setScreen],
  } = useMobileMenu()

  const setScreenCountry = () => setScreen("country")
  const setScreenSearch = () => setScreen("search")

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
    <div className="flex flex-col flex-1">
      <div className="flex items-center justify-between w-full border-b border-gray-200 p-6">
        <div className="flex-1 basis-0">
          {/*<button
            className="flex items-center gap-x-2"
            onClick={setScreenCountry}
          >
            <ReactCountryFlag countryCode={"us"} svg />
            <ChevronDown />
          </button>*/}
        </div>

        <Heading className="txt-compact-xlarge-plus text-ui-fg-subtle uppercase">
          Q&C
        </Heading>

        <div className="flex-1 basis-0 flex justify-end">
          <button onClick={close}>
            <X />
          </button>
        </div>
      </div>

      <div className="space-y-6 flex-1 flex flex-col justify-between p-6">
        {process.env.FEATURE_SEARCH_ENABLED && (
          <button
            className="bg-gray-50 flex items-center px-4 py-2 gap-x-2 text-ui-fg-muted rounded-rounded"
            onClick={setScreenSearch}
          >
            <MagnifyingGlassMini />
            <span placeholder="Search products" className="text-base-regular">
              Search products
            </span>
          </button>
        )}

        <div className="flex flex-col flex-1 text-large-regular text-gray-900">
          <ul className="flex flex-col gap-y-2">
            {menuNavbar.map((menu) => {
              return (
                <li className="bg-gray-50 p-4 rounded-rounded">
                  <Link href={menu.link}>
                    <button
                      className="flex items-center justify-between w-full"
                      onClick={close}
                    >
                      <span className="sr-only">Go to company</span>
                      <span>{menu.name}</span>
                      <ChevronDown className="-rotate-90" />
                    </button>
                  </Link>
                </li>
              )
            })}
            {false ? (
              <>
                {[].map((collection) => (
                  <li
                    key={collection.id}
                    className="bg-gray-50 p-4 rounded-rounded"
                  >
                    <Link href={`/collections/${collection.handle}`}>
                      <button
                        className="flex items-center justify-between w-full"
                        onClick={close}
                      >
                        <span className="sr-only">
                          Go to {collection.title} collection
                        </span>
                        <span>{collection.title}</span>
                        <ChevronDown className="-rotate-90" />
                      </button>
                    </Link>
                  </li>
                ))}
              </>
            ) : null}
          </ul>
        </div>

        {/*<div className="flex flex-col">
          <div className="flex flex-col gap-y-8 text-small-regular">
            {false ? (
              <div className="flex flex-col gap-y-4 ">
                <span className="text-gray-700 uppercase">Account</span>
                <Link href={`/account/login`} passHref>
                  <button
                    className="flex items-center justify-between border-b border-gray-200 py-2 w-full"
                    onClick={close}
                  >
                    <span className="sr-only">Go to sign in page</span>
                    <span className="normal-case">Sign in</span>
                    <ChevronDown className="-rotate-90" />
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-y-4">
                <span className="text-gray-700 uppercase">Signed in as</span>
                <Link href={`/account`} passHref>
                  <button
                    className="flex items-center justify-between border-b border-gray-200 py-2 w-full"
                    onClick={close}
                  >
                    <span className="sr-only">Go to account page</span>
                    <span className="normal-case">{''}</span>
                    <ChevronDown className="-rotate-90" />
                  </button>
                </Link>
              </div>
            )}
            {/*<div className="flex flex-col gap-y-4">
              <span className="text-gray-700 uppercase">Delivery</span>
              <button
                className="flex items-center justify-between border-b border-gray-200 py-2"
                onClick={setScreenCountry}
              >
                <span className="sr-only">
                  Click to select shipping country
                </span>
                <div className="flex items-center gap-x-2">
                  <ReactCountryFlag countryCode={"us"} svg />
                  <span className="normal-case">
                    Shipping to{" "}
                   
                  </span>
                </div>
                <ChevronDown className="-rotate-90" />
              </button>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  )
}

export default MainMenu
