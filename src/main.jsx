import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/lakki-reddy';
import './index.css'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  global: {
    fonts: {
      heading: `font-family: 'Lakki Reddy', sans-serif;`,
      body: `'Raleway', sans-serif`,
    },
    'html, body': {
      bg: 'blackAlpha.900',
      lineHeight: 'tall',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
