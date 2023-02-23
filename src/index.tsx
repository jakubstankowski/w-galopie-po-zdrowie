import React from 'react'
import { render } from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faCheckSquare,
  faPhone,
  faBars,
  faCircleXmark,
  faCircleChevronDown,
  faCircleChevronUp,
  faUtensils,
  faComments,
  faWeightScale,
  faScaleBalanced,
} from '@fortawesome/free-solid-svg-icons'

import { App } from './App'

library.add(
  fab,
  faEnvelope,
  faCheckSquare,
  faPhone,
  faBars,
  faCircleXmark,
  faCircleChevronDown,
  faCircleChevronUp,
  faUtensils,
  faComments,
  faWeightScale,
  faScaleBalanced,
)

const rootElement = document.getElementById('root')

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
)
