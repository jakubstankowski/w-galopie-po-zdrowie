import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { contactDetails } from 'src/resources/contact'

export const Footer = () => {
  return (
    <footer className="relative bg-gray-900 pt-8 pb-6 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap" />
        <div className="container  grid max-w-2xl grid-cols-1 items-center  lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <div className="w-full lg:w-6/12 px-4">
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                „Najlepszymi lekarzami na świecie są: doktor dieta, doktor
                spokój i doktor dobry humor”
              </h5>
              <div className="mt-6">
                <div className="flex justify-center mt-7" />
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
          <div className="text-right">
            <h5 className="text-right text-gray-700">
              W Galopie Po Zdrowie <br />
              Radom, Tel: {contactDetails.phoneNumber}
            </h5>
          </div>
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
