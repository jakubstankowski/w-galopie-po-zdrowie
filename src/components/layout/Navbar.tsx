import { useState } from 'react'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/solid'
import navElement from 'src/interfaces/navElement'
import { CallButton } from './CallButton'

type NavbarProps = {
  navElements: navElement[]
  emitScrollEvent: (id: string) => void
}

export const Navbar = ({ navElements, emitScrollEvent }: NavbarProps) => {
  const [navbar, setNavbar] = useState(false)
  const [colorChange, setColorchange] = useState(false)

  const changeNavbarColor = () => {
    if (window.scrollY >= 120) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  }

  function handleScrollEvent(id: string): void {
    emitScrollEvent(id)
    setNavbar(false)
  }

  window.addEventListener('scroll', changeNavbarColor)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 fixed top-0 p-4 transition-colors ease-in-out delay-250 z-50 ${
        colorChange ? 'bg-white' : 'bg-green-700'
      }`}
    >
      <div className="justify-between px-2 mx-auto md:items-center md:flex md:px-3">
        <div>
          <div className="flex items-center justify-between md:block">
            <a href="javascript:void(0)">
              <h2
                className={`text-2xl font-bold ${
                  colorChange ? 'text-green-700' : 'text-white'
                }`}
              >
                W Galopie Po Zdrowie
              </h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <XMarkIcon
                    className={`h-6 w-6  outline-none ${
                      colorChange ? 'text-green-700' : 'text-white'
                    }`}
                  />
                ) : (
                  <Bars3Icon
                    className={`h-6 w-6  outline-none ${
                      colorChange ? 'text-green-700' : 'text-white'
                    }`}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navElements.map((nav, i) => (
                <li
                  onClick={() => handleScrollEvent(nav.id)}
                  key={i}
                  className={`hover:text-indigo-200 ${
                    colorChange ? 'text-green-700' : 'text-white'
                  }`}
                >
                  <a href="javascript:void(0)">{nav.name}</a>
                </li>
              ))}
              <li>
                <CallButton
                  bgColor={colorChange ? 'bg-green-700' : 'bg-white'}
                  text="Umów wizytę"
                  phoneNumber="tel:+48792662662"
                  borderColor={
                    colorChange ? 'border-green-700' : 'border-white'
                  }
                  textColor={colorChange ? 'text-white' : 'bg-green-700'}
                  hoverTextColor={
                    colorChange ? 'hover:text-white' : 'hover:text-green-700'
                  }
                  hoverBackgroundColor="hover:bg-white"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
