import {useState} from 'react'
import reactLogo from '@assets/react.svg'
import {TButton} from '@components/TButton'
import {GlobalStyles, Stack, Switch, Theme, Typography} from '@mui/material'
import {createGlobalStyle, css} from 'styled-components'
import {useTranslation} from 'react-i18next'

// todo: how to override DefaultTheme types correcly for IDEA ??? (see also styled.d.ts)
const StyledGlobalStyles = createGlobalStyle`
  ${({theme}) => css`
    .MuiTypography-h1 {
      font-size: 24px;
      background-color: ${theme.palette.success.main};
    }
  `}
`

const H2Style = (theme: Theme) => css`
    .MuiTypography-h2 {
      background-color: ${theme.palette.background.paper};
      ${({theme}) => ({ fontSize: theme.typography.h6.fontSize })};
      font-size: 28px;
    }
  `

const H3Style = (theme: Theme) => css`
    .MuiTypography-h3 {
      font-size: 32px;
      background-color: ${theme.palette.background.default};
      border-style: dashed;
      border-width: 2px;
      border-color: ${theme.palette.success.main};
    }
  `

type Lang = 'en' | 'la'

function Page() {
  const [count, setCount] = useState(0)
  const {t, i18n} = useTranslation()

  const toggleLanguage = async () => {
    if (i18n.language === 'en')
      await i18n.changeLanguage('la')
    else
      await i18n.changeLanguage('en')
  }

  return (
    <div className="App">
      <StyledGlobalStyles /> {/* h1 styled */}
      <GlobalStyles styles={(theme) => H2Style(theme)}/>
      <GlobalStyles styles={H3Style}/>
      <GlobalStyles styles={(theme) => ({
        '.MuiTypography-h4': {
          backgroundColor: theme.palette.error.main,
          fontSize: theme.typography.h6.fontSize,
          borderStyle: 'dashed',
          borderColor: '#646cff',
          borderWidth: '2px'
        }
      })} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Typography variant='h1'>
          H1 via createGlobalStyle (styled-components)
        </Typography>
        <Typography variant='h2'>
          H2 themed via GlobalStyle with function
        </Typography>
        <Typography variant='h3'>
          H3 themed via GlobalStyle with functional parameter
        </Typography>
        <Typography variant='h4'>
          H4 themed via inline
        </Typography>
        <Typography variant='h5'>
          H5 configured by theme
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Latin</Typography>
          <Switch checked={i18n.language === 'en'} onChange={toggleLanguage}/>
          <Typography>English</Typography>
        </Stack>
        <Typography variant='body1' gutterBottom>
          {t('text')}
        </Typography>
        <TButton onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </TButton>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default Page
