import React, { useEffect, useState } from "react"

const CurrencyTable = () => {
  const [rates, setRates] = useState([])
  const API_KEY = "92998fd9108d4e6c8dd3bfd07ca8620d" // Ganti dengan API Key CurrencyFreaks
  const API_URL = `https://api.currencyfreaks.com/latest?apikey=${API_KEY}&symbols=CAD,IDR,JPY,CHF,EUR,GBP`

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const currencies = [
          { symbol: "CAD", rate: data.rates.CAD },
          { symbol: "IDR", rate: data.rates.IDR },
          { symbol: "JPY", rate: data.rates.JPY },
          { symbol: "CHF", rate: data.rates.CHF },
          { symbol: "EUR", rate: data.rates.EUR },
          { symbol: "GBP", rate: data.rates.GBP },
        ]
        setRates(currencies)
      })
  }, [])

  const calculateWeBuy = (rate) => (rate * 1.03).toFixed(4)
  const calculateWeSell = (rate) => (rate * 0.97).toFixed(4)

  return (
    <table>
      <thead>
        <tr>
          <th>Mata Uang</th>
          <th>We Buy</th>
          <th>Nilai Tukar</th>
          <th>We Sell</th>
        </tr>
      </thead>
      <tbody>
        {rates.map((currency) => (
          <tr key={currency.symbol}>
            <td>{currency.symbol}</td>
            <td>{calculateWeBuy(currency.rate)}</td>
            <td>{currency.rate}</td>
            <td>{calculateWeSell(currency.rate)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CurrencyTable
