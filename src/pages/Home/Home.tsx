import {
  EyeIcon,
  HeartIcon,
  PhoneIcon,
  ChatBubbleBottomCenterIcon,
} from '@heroicons/react/24/solid'
import { CallButton } from 'src/components/layout/CallButton'
import { Footer } from 'src/components/layout/Footer'
import { Navbar } from 'src/components/layout/Navbar'
import { OfferCard } from 'src/components/layout/OfferCard'
import offerCard from 'src/interfaces/offerCard'

export const Home = () => {
  const offerCards: offerCard[] = [
    {
      title: 'Konsultacja dietetyczna',
      description:
        'Wywiad żywieniowy, aby lepiej poznać problem, z którym się do mnie zgłaszasz, jak i Twoje preferencje oraz nawyki żywieniowe',
      Icon: EyeIcon,
      minHeight: 250,
      iconBackground: 'bg-green-700',
      iconTextColor: 'text-white',
    },
    {
      title: 'Jadłospis',
      description:
        'Indywidualny dwutygodniowy jadłospis, który będzie uwzględniał wszystkie Twoje upodobania oraz konkretny problem żywieniowy czy jednostkę chorobową',
      Icon: HeartIcon,
      minHeight: 250,
      iconBackground: 'bg-gray-500',
      iconTextColor: 'text-white',
    },
    {
      title: 'Konsultacja online',
      description:
        'Konsultacja odbywać się będzie na drodze on-line, która dla Ciebie będzie najbardziej dogodna i komfortowa',
      Icon: ChatBubbleBottomCenterIcon,
      minHeight: 250,
      iconBackground: 'bg-green-700',
      iconTextColor: 'text-white',
    },
    {
      title: 'Konsultacja dietetyczna',
      description:
        'Wywiad żywieniowy, aby lepiej poznać problem, z którym się do mnie zgłaszasz, jak i Twoje preferencje oraz nawyki żywieniowe',
      Icon: EyeIcon,
      minHeight: 250,
      iconBackground: 'bg-green-700',
      iconTextColor: 'text-white',
    },
    {
      title: 'Jadłospis',
      description:
        'Indywidualny dwutygodniowy jadłospis, który będzie uwzględniał wszystkie Twoje upodobania oraz konkretny problem żywieniowy czy jednostkę chorobową',
      Icon: HeartIcon,
      minHeight: 250,
      iconBackground: 'bg-gray-500',
      iconTextColor: 'text-white',
    },
    {
      title: 'Konsultacja online',
      description:
        'Konsultacja odbywać się będzie na drodze on-line, która dla Ciebie będzie najbardziej dogodna i komfortowa',
      Icon: ChatBubbleBottomCenterIcon,
      minHeight: 250,
      iconBackground: 'bg-green-700',
      iconTextColor: 'text-white',
    },
  ]

  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-6 pb-30 flex content-center items-center justify-center">
          <div className="absolute top-0 w-full h-full bg-center  bg-green-700">
            <span id="blackOverlay" className="w-full h-full absolute" />
          </div>
          <div className="container relative mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="items-center">
              <h1 className="text-white font-semibold text-5xl text-center">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="mt-4 text-lg text-gray-300 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex justify-center mt-7">
                <CallButton
                  bgColor="bg-white"
                  text="Umów wizytę"
                  phoneNumber="tel:+48792662662"
                  borderColor="border-white"
                  textColor="text-green-700"
                  hoverTextColor="hover:text-green-700"
                  hoverBackgroundColor="hover:bg-white"
                />
              </div>
            </div>
            <div className="container grid  mx-auto">
              <div className="w-full">
                <img
                  alt="Home basile photo"
                  src={require('assets/img/home-photo.png')}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-green-700 border-green-700 mb-10">
          <h1 className="text-white font-semibold text-4xl text-center">
            Kompleksowa Opieka Dietetyczna:
          </h1>
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-1 mb-10">
            {offerCards.map((card, i) => (
              <OfferCard
                key={i}
                title={card.title}
                description={card.description}
                Icon={card.Icon}
                minHeight={card.minHeight}
                iconBackground={card.iconBackground}
                iconTextColor={card.iconTextColor}
              />
            ))}
          </div>
        </section>
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="w-full rounded-lg"
                  src={require('assets/img/woman.png')}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">Lorem Ipsum</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="mt-6">
                    <button
                      className="bg-green-700 text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                      type="button"
                    >
                      <i className="flex fab fa-twitter" />
                    </button>
                    <button
                      className="ml-2 bg-green-700 text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                      type="button"
                    >
                      <i className="flex fab fa-facebook-square" />
                    </button>
                    <button
                      className="ml-2 bg-green-700 text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                      type="button"
                    >
                      <i className="flex fab fa-dribbble" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-300 border-green-700">
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full  px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-300">
                        <PhoneIcon className="h-6 w-6 outline-none text-white" />
                      </div>
                      <h6 className="text-xl font-semibold">Lorem Ipsum</h6>
                      <p className="mt-2 mb-4 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full  px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-300">
                        <PhoneIcon className="h-6 w-6 outline-none text-white" />
                      </div>
                      <h6 className="text-xl font-semibold">Lorem Ipsum</h6>
                      <p className="mt-2 mb-4 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full  px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-300">
                        <PhoneIcon className="h-6 w-6 outline-none text-white" />
                      </div>
                      <h6 className="text-xl font-semibold">Lorem Ipsum</h6>
                      <p className="mt-2 mb-4 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full  px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-300">
                        <PhoneIcon className="h-6 w-6 outline-none text-white" />
                      </div>
                      <h6 className="text-xl font-semibold">Lorem Ipsum</h6>
                      <p className="mt-2 mb-4 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full  px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-300">
                        <PhoneIcon className="h-6 w-6 outline-none text-white" />
                      </div>
                      <h6 className="text-xl font-semibold">Lorem Ipsum</h6>
                      <p className="mt-2 mb-4 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full  px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-300">
                        <PhoneIcon className="h-6 w-6 outline-none text-white" />
                      </div>
                      <h6 className="text-xl font-semibold">Lorem Ipsum</h6>
                      <p className="mt-2 mb-4 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white border-green-700">
          <div className="container relative mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="items-center">test</div>
            <div className="container grid  mx-auto">test</div>
          </div>
        </section>
        {/* <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: '80px' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl" />
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl" />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl" />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style={{ transition: 'all .15s ease' }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: 'all .15s ease' }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: 'all .15s ease' }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  )
}
