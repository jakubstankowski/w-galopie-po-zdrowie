import { contactDetails } from 'src/resources/contact'
import { CallButton } from './CallButton'

type PricesListCardProps = {
  title: string
}

export const PricesListCard = ({ title }: PricesListCardProps) => {
  return (
    <div className=" mt-10 container grid  gap-4  items-center justify-center align-center relative text-center mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-12 lg:px-6 px-6 lg:max-w-7xl">
      <div
        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
        style={{ minWidth: '500px' }}
      >
        <p className="text-2xl text-gray-900 mb-3">Jadłospis 7 dni - 179 zł</p>
        <p className="text-gray-900 text-left">
          Konsultacja z dietetykiem obejmująca m.in.:
        </p>
        <ul className="text-left">
          <li>- Indywidualny jadłospis na 7 dni wraz z przepisami</li>
          <li>
            - Autorski poradnik żywieniowy zawierający listę produktów i potraw
            zalecanych i niewskazanych
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
  )
}
