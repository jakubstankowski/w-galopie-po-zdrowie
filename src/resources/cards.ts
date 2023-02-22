import offerCard from 'src/interfaces/offerCard'
import {
  EyeIcon,
  HeartIcon,
  ChatBubbleBottomCenterIcon,
} from '@heroicons/react/24/solid'

export const offerCards: offerCard[] = [
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
