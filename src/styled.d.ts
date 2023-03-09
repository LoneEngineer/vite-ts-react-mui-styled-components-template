import 'styled-components'
import {Theme} from '@mui/material'

declare module 'styled-components' {
  interface DefaultTheme extends Theme {
  }
}
