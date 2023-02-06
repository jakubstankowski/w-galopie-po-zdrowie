type OfferCardProps = {
  title: string
  description: string
  Icon: React.ElementType
  minHeight: number
  iconBackground: string
  iconTextColor: string
}

export const OfferCard = ({
  title,
  description,
  Icon,
  minHeight,
  iconBackground,
  iconTextColor,
}: OfferCardProps) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <div className="lg:pt-12 pt-6 w-full  px-4 text-center">
          <div
            className="bg-white relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg"
            style={{ minHeight }}
          >
            <div className="px-4 py-5 flex-auto">
              <div
                className={`text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full ${iconBackground}`}
              >
                <Icon className={`h-8 w-8 outline-none ${iconTextColor}`} />
              </div>
              <h6 className="text-xl font-semibold">{title}</h6>
              <p className="mt-2 mb-4 text-gray-600">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
