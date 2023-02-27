import { contactDetails } from 'src/resources/contact'
import { CallButton } from './CallButton'

type PricesListCardProps = {
  title: string
  price: number
  descriptionTitle: string
  descriptionList: string[]
}

export const PricesListCard = ({
  title,
  price,
  descriptionTitle,
  descriptionList,
}: PricesListCardProps) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <div className="lg:pt-12 pt-6 w-full  px-4 text-center">
          <div
            style={{ minHeight: '300px' }}
            className="bg-white relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg"
          >
            <div className="px-4 py-5 flex-auto">
              <h6 className="text-2xl font-semibold ">
                {title} - {price} zł
              </h6>
              <p className="mt-2 mb-4 text-gray-900 text-left">
                {descriptionTitle}
              </p>
              <ul className="text-left">
                {descriptionList.map((desc, i) => (
                  <li>- {desc}</li>
                ))}
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
      </div>
    </div>
  )
}
