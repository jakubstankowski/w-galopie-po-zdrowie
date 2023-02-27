import offerCard from 'src/interfaces/offerCard'
import { icons } from './icons'

export const offerCards: offerCard[] = [
  {
    title: 'Mobilna konsultacja dietetyczna',
    description:
      'Dojazd do klienta. Szczegółowy wywiad żywieniowy, aby lepiej poznać problem, z którym się do mnie zgłaszasz, jak i Twoje preferencje oraz nawyki żywieniowe. Każda następna konsultacja obejmuje diet coaching, specjalistyczne konsultacje żywieniowe, wyjaśnienie zaistniałych problemów w trakcie stosowania diety.',
    icon: icons.phone,
    iconSize: '2x',
    minHeight: 270,
    iconBackground: 'bg-gray-500',
    iconTextColor: 'text-white',
  },
  {
    title: 'Jadłospis',
    description:
      'Indywidualny tygodniowy lub dwutygodniowy jadłospis, który będzie uwzględniał wszystkie Twoje upodobania oraz konkretny problem żywieniowy czy jednostkę chorobową.        ',
    icon: icons.utensils,
    iconSize: '2x',
    minHeight: 270,
    iconBackground: 'bg-gray-500',
    iconTextColor: 'text-white',
  },
  {
    title: '​Pomiar składu masy ciała i analiza segmentowa.',
    description:
      'Analizę składu ciała wykonuję za pomocą analizatora składu ciała TANITA MC-580M na konsultacjach mobilnych',
    icon: icons.scaleBalanced,
    iconSize: '2x',
    minHeight: 270,
    iconBackground: 'bg-gray-500',
    iconTextColor: 'text-white',
  },
  {
    title: 'Konsultacja dietetyczna on-line',
    description:
      'Konsultacja odbywać się będzie na drodze on-line, która dla Ciebie będzie najbardziej dogodna i komfortowa. Konsultacja obejmuje diet coaching, specjalistyczne konsultacje żywieniowe, wyjaśnienie zaistniałych problemów w trakcie stosowania diety',
    icon: icons.comments,
    iconSize: '2x',
    minHeight: 270,
    iconBackground: 'bg-gray-500',
    iconTextColor: 'text-white',
  },
]
