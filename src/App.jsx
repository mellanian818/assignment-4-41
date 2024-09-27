import React from "react"
import CurrencyTable from "./components/CurrencyTable"
import "./App.css" // Untuk styling

function App() {
  return (
    <div className="App">
      <h1>Currency Exchange Rates</h1>
      <CurrencyTable />
    </div>
  )
}

export default App
