// Write your JS code here
// import {Component} from 'react'

import CryptoCurrencyItem from '../CryptocurrencyItem'

import './index.css'

const CryptoCurrenciesList = props => {
  const {cryptoCurrencyData} = props

  return (
    <div className="list-item-container">
      <div className="list-item-table-container">
        <p className="column-name coin-type-name">Coin Type</p>
        <div className="income-item-type">
          <p className="column-name align-type">USD</p>
          <p className="column-name">EURO</p>
        </div>
      </div>
      <ul>
        {cryptoCurrencyData.map(item => (
          <CryptoCurrencyItem blogData={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

export default CryptoCurrenciesList
