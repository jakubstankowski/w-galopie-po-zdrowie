import { PhoneIcon } from '@heroicons/react/24/solid'

type CallButtonProps = {
  text: string
  phoneNumber: string
  bgColor: string
  textColor: string
  hoverBackgroundColor: string
  hoverTextColor: string
  borderColor: string
}

export const CallButton = ({
  text,
  phoneNumber,
  bgColor,
  textColor,
  hoverBackgroundColor,
  hoverTextColor,
  borderColor,
}: CallButtonProps) => {
  function callHandler() {}

  return (
    <a href={phoneNumber}>
      <button
        onClick={callHandler}
        className={`w-150
                    py-2 px-4 border rounded
                    ${bgColor}
                    ${textColor}
                    ${borderColor}
                    ${hoverBackgroundColor}
                    ${hoverTextColor}`}
      >
        {text}
        <PhoneIcon
          style={{ float: 'right' }}
          className={`ml-3 h-4 w-4 mt-1 outline-none"
        ${textColor}
        ${borderColor}
        ${hoverBackgroundColor}
        ${hoverTextColor}`}
        />
      </button>
    </a>
  )
}
