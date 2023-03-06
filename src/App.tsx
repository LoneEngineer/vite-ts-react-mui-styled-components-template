import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {TButton} from '@components/TButton'
import {Typography} from "@mui/material";

const baseUrl: string = import.meta.env.BASE_URL
const mode: string = import.meta.env.MODE
const devMode: boolean = import.meta.env.DEV
const apiUrl: string = import.meta.env.VITE_PUBLIC_URL

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
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
          H1 themed
        </Typography>
        <Typography id="h2" variant='h2'>
          H2 themed - base: {baseUrl}, mode: {mode}, dev: {devMode.toString()}, api: {apiUrl}
        </Typography>
        <Typography id="h3" variant='h3'>
          H3 themed in global
        </Typography>
        <Typography id="h4" variant='h4'>
          H4 themed inline
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

export default App
