import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import {store} from '../app/store'

function MyApp({ Component, pageProps }) {
  return <Provider store={store} ><Layout><Component {...pageProps} /></Layout></Provider>
}

export default MyApp