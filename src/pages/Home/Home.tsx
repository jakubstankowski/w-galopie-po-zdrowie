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
      title: 'Mobilna konsultacja dietetyczna',
      description:
        'Wywiad żywieniowy, aby lepiej poznać problem, z którym się do mnie zgłaszasz, jak i Twoje preferencje oraz nawyki żywieniowe. Każda następna konsultacja obejmuje diet coaching, specjalistyczne konsultacje żywieniowe, wyjaśnienie zaistniałych problemów w trakcie stosowania diety.',
      Icon: EyeIcon,
      minHeight: 300,
      iconBackground: 'bg-green-700',
      iconTextColor: 'text-white',
    },
    {
      title: 'Jadłospis',
      description:
        'Indywidualny tygodniowy lub dwutygodniowy jadłospis, który będzie uwzględniał wszystkie Twoje upodobania oraz konkretny problem żywieniowy czy jednostkę chorobową.        ',
      Icon: HeartIcon,
      minHeight: 300,
      iconBackground: 'bg-gray-500',
      iconTextColor: 'text-white',
    },
    {
      title: '​Pomiar składu masy ciała i analiza segmentowa.',
      description:
        'Analizę składu ciała wykonuję za pomocą analizatora składu ciała TANITA MC-580M na konsultacjach mobilnych',
      Icon: HeartIcon,
      minHeight: 300,
      iconBackground: 'bg-green-700',
      iconTextColor: 'text-white',
    },
    {
      title: 'Konsultacja dietetyczna on-line',
      description:
        'Konsultacja odbywać się będzie na drodze on-line, która dla Ciebie będzie najbardziej dogodna i komfortowa. Konsultacja obejmuje diet coaching, specjalistyczne konsultacje żywieniowe, wyjaśnienie zaistniałych problemów w trakcie stosowania diety',
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

  const homeTitle =
    'Pozwól, że wskażę Ci odpowiedni kierunek, abyś mógł kroczyć prostą drogą bez zakrętów!'

  const homeDescription =
    'Nauczę Cię jeść w sposób naturalny i swobodny, tak by jedzenie nie wiązało się z poczuciem straty czy wyrzeczenia. Zaprojektuję specjalny program odżywiania pozwalający czuć się dobrze i będę Cię motywować i wspierać. Pomogę Ci uwierzyć w siebie! Ja już w Ciebie wierzę!'

  const aboutTitle = '<h1 class="text-green-700>Aleksandra Nowicka</h1>'

  const aboutDescription = `Cześć mam na imię <strong class="text-green-700">Aleksandra</strong> jestem specjalistą do spraw żywienia i chciałam zaprosić Cię w podróż po lepsze jutro.<br/><br/> Biorąc pod uwagę własne doświadczenie oraz kwalifikacje zdobyte w Instytucie Dietetyki i Promocji Zdrowia a także na innych kursach i szkoleniach, postanowiłam zmienić moje życie zawodowe.<br/><br/> Zrezygnowałam z pracy w biurze geodezyjnym ( jestem mgr inż. Geodezji) bo los wskazał mi inny kierunek. Kierunek, który stał się moją pasją i pomógł zrozumieć jak odpowiednio dobrany program żywieniowy i detoksykacyjny zmienia komfort życia.<br/><br/> Od wielu lat zapoznaję się z literaturą o zdrowym odżywianiu, ale również badaniami naukowymi, które pozwalają spojrzeć na sposób odżywiania z całkiem innej perspektywy. <br/><br/> Moją misją jest wspierać i motywować innych, pomagać aby odzyskali <strong class="text-green-700">zdrowie </strong>, poprzez zmiany w diecie, sposobie myślenia i stylu życia. Jeśli czujesz, że potrzebujesz wsparcia podczas tej podróży o lepsze i zdrowsze życie to trafiłeś w dobre miejsce. <br/><br/> Próbowałeś już chyba wszystkiego, ale nic nie działa, chcesz odpuścić! Poddać się! Nie rób tego! Nie poddawaj się! Daj mi szansę, abym mogła cię ponownie zmotywować. Pozwól, że wskażę ci odpowiedni kierunek, abyś mógł kroczyć własną drogą bez zakrętów! <br/><br/> Będę wspierać cię tak długo jak będziesz tego potrzebować. Z radością zostanę Twoim przewodnikiem na ścieżce do odzyskania spokoju i lepszego samopoczucia. Będę Twoim mentorem za każdym razem, kiedy nie będziesz wiedział, dlaczego znowu Ci nie wychodzi.<br/><br/> Będę Twoim coachem, byś w końcu zaufał sobie i osiągnął trwałe rezultaty.`

  const instagramProfile = 'https://www.instagram.com/wgalopiepozdrowie/'

  const facebookProfile =
    'https://www.facebook.com/profile.php?id=100090470464248'

  const emailAdress = 'wgalopiepozdrowie@gmail.com'

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
              <h1 className="text-white font-semibold text-3xl text-center">
                {homeTitle}
              </h1>
              <p className="mt-4 text-lg text-gray-300 text-center">
                {homeDescription}
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
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold text-center text-green-700">
                    Aleksandra Nowicka
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600 text-left">
                    <span
                      dangerouslySetInnerHTML={{ __html: aboutDescription }}
                    />
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
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="w-full rounded-lg"
                  src={require('assets/img/woman-2.jpg')}
                />
                <div className="flex justify-center mt-7">
                  <a href={facebookProfile} target="_blank" rel="noreferrer">
                    <button
                      className="bg-green-700 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                    >
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    </button>
                  </a>
                  <a href={instagramProfile} target="_blank" rel="noreferrer">
                    <button
                      className="ml-2 bg-green-700 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                    >
                      <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </button>
                  </a>
                  <button
                    onClick={() => window.open(`mailto:${emailAdress}`)}
                    className="ml-2 bg-green-700 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon="envelope" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section
          id="contact"
          className="bg-gray-300 relative block"
          style={{ minHeight: '75vh' }}
        >
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
                Radom, Tel: 792-662-622
              </h5>
              <div className="flex justify-center mt-7">
                <a href={facebookProfile} target="_blank" rel="noreferrer">
                  <button
                    className="bg-green-700 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                  </button>
                </a>

                <a href={instagramProfile} target="_blank" rel="noreferrer">
                  <button
                    className="ml-2 bg-green-700 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                  </button>
                </a>

                <button
                  onClick={() => window.open(`mailto:${emailAdress}`)}
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
