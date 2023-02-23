import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'

export default interface offerCard {
  title: string
  description: string
  icon: IconProp
  iconSize: SizeProp
  minHeight: number
  iconBackground: string
  iconTextColor: string
}
