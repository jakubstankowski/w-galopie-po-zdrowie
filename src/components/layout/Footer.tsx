import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {
  return (
    <footer className="relative bg-gray-900 pt-8 pb-6 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-white text-3xl font-semibold">Lorem ipsum</h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </h5>
            <div className="mt-6">
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
              </button>
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </button>
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FontAwesomeIcon icon="envelope" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div>01</div>
          <div>09</div>
        </div>
        <hr className="my-6 border-gray-400" />
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
