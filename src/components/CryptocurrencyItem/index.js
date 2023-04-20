// Write your JS code here
import './index.css'

const CryptoCurrencyItem = props => {
  const {blogData} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = blogData

  return (
    <li className="currency-container">
      <div className="coin-type">
        <img src={currencyLogo} alt={currencyName} className="coin-logo" />
        <p className="coin-name">{currencyName}</p>
      </div>
      <div className="income-type">
        <div className="usd-value">
          <p className="usd">{usdValue}</p>
        </div>
        <p className="euro">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptoCurrencyItem
