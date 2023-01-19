import React from 'react'

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  return (
    <nav className={`flex flex-wrap items-center justify-between px-2 py-3 `}>
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={`${'text-gray-800'} text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase`}
            href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
          >
            Tailwind Starter Kit
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className={`${'text-gray-800'} fas fa-bars`} />
          </button>
        </div>
        <div
          className={`lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none${
            navbarOpen ? ' block rounded shadow-lg' : ' hidden'
          }`}
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <a
                className={`${'text-gray-800 hover:text-gray-600'} px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold`}
                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing"
              >
                <i
                  className={`${'text-gray-500'} far fa-file-alt text-lg leading-lg mr-2`}
                />{' '}
                Docs1
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
