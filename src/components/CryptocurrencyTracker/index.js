// Write your code here
import {Component} from 'react'
// import {async} from 'rxjs'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptoCurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptoCurrencyTracker extends Component {
  state = {cryptoCurrencyData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrency()
  }

  getCryptoCurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const fetchingData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    // console.log(fetchingData)

    this.setState({cryptoCurrencyData: fetchingData, isLoading: false})

    // console.log(data)
    // console.log(data.PromiseResult)
  }

  render() {
    const {cryptoCurrencyData, isLoading} = this.state

    return (
      <div className="app-container">
        <h1 className="crypto-grapy">Cryptocurrency Tracker</h1>
        <div className="crypto-currency-img">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="crypto-currency"
          />
        </div>
        <div className="crypto-currency-img">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            <CryptoCurrenciesList cryptoCurrencyData={cryptoCurrencyData} />
          )}
        </div>
      </div>
    )
  }
}
export default CryptoCurrencyTracker
