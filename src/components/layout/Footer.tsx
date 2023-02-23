export const Footer = () => {
  return (
    <footer className="relative bg-gray-900 pt-8 pb-6 text-white text-center align-center">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full  px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()} by{' '}
              <a
                href="https://github.com/jakubstankowski"
                className="text-gray-600 hover:text-gray-900"
              >
                Standev
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
