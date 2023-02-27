import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from 'src/resources/icons'

type CallButtonProps = {
  text: string
  phoneNumber: string
  bgColor: string
  textColor: string
  borderColor: string
}

export const CallButton = ({
  text,
  phoneNumber,
  bgColor,
  textColor,
  borderColor,
}: CallButtonProps) => {
  return (
    <a href={`tel:${phoneNumber}`}>
      <button
        className={`w-150
                    py-2 px-4 border rounded
                    ${bgColor}
                    ${textColor}
                    ${borderColor}
                   `}
      >
        {text}
        <FontAwesomeIcon
          size="1x"
          icon={icons.phone}
          style={{ float: 'right' }}
          className={`ml-3 mt-1 outline-none"
        ${textColor}
        ${borderColor}
        ${bgColor}
        `}
        />
      </button>
    </a>
  )
}
