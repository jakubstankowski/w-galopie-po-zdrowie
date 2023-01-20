import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

export const Navbar = () => {
  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]

  const [navbar, setNavbar] = useState(false)
  const [colorChange, setColorchange] = useState(false)

  const changeNavbarColor = () => {
    if (window.scrollY >= 120) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  }

  window.addEventListener('scroll', changeNavbarColor)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 fixed top-0 p-4 transition-colors ease-in-out delay-250 ${
        colorChange ? 'bg-white' : 'bg-green-700'
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="justify-between px-2 mx-auto md:items-center md:flex md:px-3">
        <div>
          <div className="flex items-center justify-between md:block">
            <a href="javascript:void(0)">
              <h2 className="text-2xl font-bold text-white">LOGO</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <XMarkIcon
                    className={`h-6 w-6 text-white outline-none ${
                      colorChange ? 'text-green-700' : 'text-white'
                    }`}
                  />
                ) : (
                  <Bars3Icon
                    className={`h-6 w-6 text-white outline-none ${
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
              {navigation.map((nav, i) => (
                <li
                  key={i}
                  className={`text-white hover:text-indigo-200 ${
                    colorChange ? 'text-green-700' : 'text-white'
                  }`}
                >
                  <a href="javascript:void(0)">{nav.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
