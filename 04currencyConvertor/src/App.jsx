import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
const [amount, setAmount] = useState()
const [from, setFrom] = useState("usd")
const [to,setTo] = useState("pkr")
const [convertedAmount,setConvertedAmount] = useState()

const currencyInfo = useCurrencyInfo(from)

const currencyOptions = Object.keys(currencyInfo)


const swap = () => {
  setFrom(to)
  setTo(from)

  setConvertedAmount(amount)
  setAmount(convertedAmount)
}

const conver = () => {
  setConvertedAmount(amount * currencyInfo[to])
}



return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center"
  >
      <div className="w-full">
        <h1 className='text-4xl font-medium mb-5'>Currency Convertor</h1>
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                     conver();
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          onAmountChange={(amount) => setAmount(amount)}
                          onCurrencyChange={(currency) => setFrom(currency)}
                          currencyOptions={currencyOptions}
                          selectedCurrency={from}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedAmount}
                          onAmountChange={(convertedAmount)=> setConvertedAmount(convertedAmount)}
                          onCurrencyChange={(currency) => setTo(currency)}
                          currencyOptions={currencyOptions}
                          selectedCurrency={to}
                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      {`Convert ${from.toUpperCase()} To ${to.toUpperCase()}`} 
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
