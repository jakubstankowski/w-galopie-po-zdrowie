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
import navElement from 'src/interfaces/navElement'
import offerCard from 'src/interfaces/offerCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Home = () => {
  const offerCards: offerCard[] = [
    {
      title: 'Konsultacja dietetyczna',
      description:
        'Wywiad żywieniowy, aby lepiej poznać problem, z którym się do mnie zgłaszasz, jak i Twoje preferencje oraz nawyki żywieniowe',
      Icon: EyeIcon,
      minHeight: 300,
      iconBackground: 'bg-green-700',
      iconTextColor: 'text-white',
    },
    {
      title: 'Jadłospis',
      description:
        'Indywidualny dwutygodniowy jadłospis, który będzie uwzględniał wszystkie Twoje upodobania oraz konkretny problem żywieniowy czy jednostkę chorobową',
      Icon: HeartIcon,
      minHeight: 300,
      iconBackground: 'bg-gray-500',
      iconTextColor: 'text-white',
    },
    {
      title: 'Konsultacja online',
      description:
        'Konsultacja odbywać się będzie na drodze on-line, która dla Ciebie będzie najbardziej dogodna i komfortowa',
      Icon: ChatBubbleBottomCenterIcon,
      minHeight: 300,
      iconBackground: 'bg-green-700',
      iconTextColor: 'text-white',
    },
    {
      title: 'Konsultacja dietetyczna',
      description:
        'Wywiad żywieniowy, aby lepiej poznać problem, z którym się do mnie zgłaszasz, jak i Twoje preferencje oraz nawyki żywieniowe',
      Icon: EyeIcon,
      minHeight: 300,
      iconBackground: 'bg-green-700',
      iconTextColor: 'text-white',
    },
    {
      title: 'Jadłospis',
      description:
        'Indywidualny dwutygodniowy jadłospis, który będzie uwzględniał wszystkie Twoje upodobania oraz konkretny problem żywieniowy czy jednostkę chorobową',
      Icon: HeartIcon,
      minHeight: 300,
      iconBackground: 'bg-gray-500',
      iconTextColor: 'text-white',
    },
    {
      title: 'Konsultacja online',
      description:
        'Konsultacja odbywać się będzie na drodze on-line, która dla Ciebie będzie najbardziej dogodna i komfortowa',
      Icon: ChatBubbleBottomCenterIcon,
      minHeight: 300,
      iconBackground: 'bg-green-700',
      iconTextColor: 'text-white',
    },
  ]

  const navigation: navElement[] = [
    { name: 'Home', id: 'home', current: true },
    { name: 'O mnie', id: 'about', current: false },
    { name: 'Kontakt', id: 'contact', current: false },
  ]

  function handleScrollEvent(id: string) {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Navbar navElements={navigation} emitScrollEvent={handleScrollEvent} />
      <main>
        <section
          id="home"
          className="relative pt-6 pb-30 flex content-center items-center justify-center"
        >
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
        <section className="bg-green-700 border-green-700">
          <h1 className="text-white font-semibold text-4xl text-center">
            Kompleksowa Opieka Dietetyczna:
          </h1>
          <div className="container relative mx-auto grid max-w-2xl grid-cols-1 items-center  sm:px-2 sm:py-8 lg:max-w-7xl lg:grid-cols-3">
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
        <section id="about" className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="w-full rounded-lg"
                  src={require('assets/img/woman.png')}
                />
                <div className="flex justify-center mt-7">
                  <button
                    className="bg-green-700 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                  </button>
                  <button
                    className="ml-2 bg-green-700 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                  </button>
                  <button
                    onClick={() => window.open('mailto:test@example.com')}
                    className="ml-2 bg-green-700 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon="envelope" />
                  </button>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-center">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">Lorem Ipsum</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="mt-10 text-center align-center">
                    <CallButton
                      bgColor="bg-white"
                      text="Umów wizytę"
                      phoneNumber="tel:+48792662662"
                      borderColor="border-green-700"
                      textColor="text-green-700"
                      hoverTextColor="hover:text-green-700"
                      hoverBackgroundColor="hover:bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-300 border-green-700">
          <div className="container relative mx-auto grid max-w-2xl grid-cols-1 items-center  sm:px-2 sm:py-8 lg:max-w-7xl lg:grid-cols-3">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full  px-4 text-center">
                  <div
                    style={{ minHeight: '250px' }}
                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                  >
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl font-semibold">post instagram</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full  px-4 text-center">
                  <div
                    style={{ minHeight: '250px' }}
                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                  >
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl font-semibold">post instagram</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full  px-4 text-center">
                  <div
                    style={{ minHeight: '250px' }}
                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                  >
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl font-semibold">post instagram</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full  px-4 text-center">
                  <div
                    style={{ minHeight: '250px' }}
                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                  >
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl font-semibold">post instagram</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full  px-4 text-center">
                  <div
                    style={{ minHeight: '250px' }}
                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                  >
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl font-semibold">post instagram</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full  px-4 text-center">
                  <div
                    style={{ minHeight: '250px' }}
                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                  >
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl font-semibold">post instagram</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="relative block bg-white">
          <div className="container relative mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="container grid  mx-auto items-center justify-center align-center">
              <div className="w-full">
                <img
                  alt="Home basile photo"
                  src={require('assets/img/logo-green.png')}
                  style={{ maxWidth: '300px' }}
                />
              </div>
            </div>
            <div className="text-center">
              <h5 className="text-gray-700">
                <strong>W Galopie Po Zdrowie </strong>
                <br />
                ul. Ulicowa 17 <br />
                26-600 Radom <br />
                NIP 111 222 333 <br />
                Tel. 555 666 777
              </h5>
              <div className="flex justify-center mt-7">
                <button
                  className="bg-green-700 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                </button>
                <button
                  className="ml-2 bg-green-700 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FontAwesomeIcon icon={['fab', 'instagram']} />
                </button>
                <button
                  onClick={() => window.open('mailto:test@example.com')}
                  className="ml-2 bg-green-700 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FontAwesomeIcon icon="envelope" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
