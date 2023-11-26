import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css'

const theme = createTheme({
  /** Your theme override here */
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <MantineProvider theme={theme} defaultColorScheme='light'>
        <App />
      </MantineProvider>
    </React.StrictMode>
  </BrowserRouter>
)
