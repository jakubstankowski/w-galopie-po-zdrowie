import { CallButton } from 'src/components/layout/CallButton'
import { Footer } from 'src/components/layout/Footer'
import { Navbar } from 'src/components/layout/Navbar'
import { OfferCard } from 'src/components/layout/OfferCard'
import navElement from 'src/interfaces/navElement'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { contactDetails } from 'src/resources/contact'
import { mainText } from 'src/resources/text'
import { offerCards } from 'src/resources/cards'
import { icons } from 'src/resources/icons'
import { PricesListCard } from 'src/components/layout/PricesListCard'

export const Home = () => {
  const navigation: navElement[] = [
    { name: 'Home', id: 'home', current: true },
    { name: 'O mnie', id: 'about', current: false },
    { name: 'Cennik', id: 'price-list', current: false },
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
            <div className="container grid  mx-auto items-center justify-center align-center">
              <div className="w-full">
                <img
                  alt="Home basile photo"
                  src={require('assets/img/logo-green.webp')}
                  style={{ maxWidth: '700px' }}
                />
              </div>
            </div>
            <div className="items-center">
              <h1 className="text-white font-semibold text-3xl text-center">
                {mainText.homeTitle}
              </h1>
              <p className="mt-4 text-lg text-gray-300 text-center text-3xl">
                {mainText.homeDescription}
              </p>
              <div className="flex justify-center mt-7">
                <CallButton
                  bgColor="bg-white"
                  text="Umów wizytę"
                  phoneNumber={contactDetails.phoneNumber}
                  borderColor="border-white"
                  textColor="text-green-700"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-green-700 border-green-700">
          <h1 className="text-white font-semibold text-4xl text-center">
            Kompleksowa Opieka Dietetyczna:
          </h1>
          <div className="container relative mx-auto grid max-w-2xl grid-cols-1 items-center  sm:px-2 sm:py-8 lg:max-w-7xl lg:grid-cols-2">
            {offerCards.map((card, i) => (
              <OfferCard
                key={i}
                title={card.title}
                description={card.description}
                icon={card.icon}
                iconSize={card.iconSize}
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
              <div className="w-full md:w-2/6 ml-auto mr-auto px-4">
                <h3 className="text-3xl font-semibold text-center text-green-700 mb-10">
                  Aleksandra Nowicka
                </h3>
                <img
                  alt="..."
                  className="w-full rounded-lg"
                  src={require('assets/img/owner.webp')}
                />
                <div className="flex justify-center mt-7">
                  <a
                    href={contactDetails.facebookProfile}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      className="bg-green-700 text-white shadow-lg font-normal h-14 w-14 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                    >
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x" />
                    </button>
                  </a>
                  <a
                    href={contactDetails.instagramProfile}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      className="ml-2 bg-green-700 text-white shadow-lg font-normal h-14 w-14 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                    >
                      <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                    </button>
                  </a>
                  <button
                    onClick={() =>
                      window.open(`mailto:${contactDetails.emailAdress}`)
                    }
                    className="ml-2 bg-green-700 text-white shadow-lg font-normal h-14 w-14 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon="envelope" size="2x" />
                  </button>
                  <a href={`tel:${contactDetails.phoneNumber}`}>
                    <button
                      className="ml-2 bg-green-700 text-white shadow-lg font-normal h-14 w-14 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                    >
                      <FontAwesomeIcon icon={icons.phone} size="2x" />
                    </button>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div>
                  <p className="mt-4 text-lg leading-relaxed text-gray-900 text-left">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: mainText.aboutDescription,
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="price-list" className="relative py-20">
          <h1 className="text-green-700 font-semibold text-4xl text-center">
            Cennik
          </h1>
          <p className="mt-10  text-gray-900 text-3xl text-center">
            Indywidualny jadłospis:
          </p>
          <div className="container relative mx-auto grid  grid-cols-1 items-center  px-4 lg:grid-cols-2 mt-10">
            <div className="container grid  mx-auto items-center justify-center align-center ">
              <div
                className="max-w-sm  items-center justify-center align-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-30"
                style={{ minWidth: '500px' }}
              >
                <p className="text-2xl text-gray-900 mb-3">
                  Jadłospis 7 dni - 179 zł
                </p>
                <p className="text-gray-900 text-left">
                  Konsultacja z dietetykiem obejmująca m.in.:
                </p>
                <ul className="text-left">
                  <li>- Indywidualny jadłospis na 7 dni wraz z przepisami</li>
                  <li>
                    - Autorski poradnik żywieniowy zawierający listę produktów i
                    potraw zalecanych i niewskazanych
                  </li>
                </ul>
                <div className="container text-center  mt-10">
                  <CallButton
                    bgColor="bg-white"
                    text="Umów wizytę"
                    phoneNumber={contactDetails.phoneNumber}
                    borderColor="border-green-700"
                    textColor="text-green-700"
                  />
                </div>
              </div>
            </div>
            <div className="container grid  mx-auto items-center justify-center align-center">
              <div
                className="max-w-sm  items-center justify-center align-center p-6 bg-white border border-gray-200 rounded-lg shadow"
                style={{ minWidth: '500px' }}
              >
                <p className="text-2xl text-gray-900 mb-3">
                  Jadłospis 7 dni - 179 zł
                </p>
                <p className="text-gray-900 text-left">
                  Konsultacja z dietetykiem obejmująca m.in.:
                </p>
                <ul className="text-left">
                  <li>- Indywidualny jadłospis na 7 dni wraz z przepisami</li>
                  <li>
                    - Autorski poradnik żywieniowy zawierający listę produktów i
                    potraw zalecanych i niewskazanych
                  </li>
                </ul>
                <div className="container text-center  mt-10">
                  <CallButton
                    bgColor="bg-white"
                    text="Umów wizytę"
                    phoneNumber={contactDetails.phoneNumber}
                    borderColor="border-green-700"
                    textColor="text-green-700"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <PricesListCard title="test" /> */}
        </section>
        <hr />
        <section id="contact" className="bg-gray-300 relative block">
          <div className="container relative mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="container grid  mx-auto items-center justify-center align-center">
              <div className="w-full">
                <img
                  alt="Home basile photo"
                  src={require('assets/img/logo-gray.webp')}
                  style={{ maxWidth: '700px' }}
                />
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-900 text-2xl text-gray-500">
                <strong className="text-green-700">
                  W Galopie Po Zdrowie{' '}
                </strong>
                <br /> <br />
                Radom, Tel: 792-662-622
              </p>
              <div className="flex justify-center mt-7">
                <a
                  href={contactDetails.facebookProfile}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className="bg-green-700 text-white shadow-lg font-normal h-14 w-14 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x" />
                  </button>
                </a>

                <a
                  href={contactDetails.instagramProfile}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className="ml-2 bg-green-700 text-white shadow-lg font-normal h-14 w-14 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                  </button>
                </a>

                <button
                  onClick={() =>
                    window.open(`mailto:${contactDetails.emailAdress}`)
                  }
                  className="ml-2 bg-green-700 text-white shadow-lg font-normal h-14 w-14 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FontAwesomeIcon icon="envelope" size="2x" />
                </button>
                <a href={`tel:${contactDetails.phoneNumber}`}>
                  <button
                    className="ml-2 bg-green-700 text-white shadow-lg font-normal h-14 w-14 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={icons.phone} size="2x" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
