import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css'

const theme = createTheme({
  /** Your theme override here */
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme} defaultColorScheme='light'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MantineProvider>
)
