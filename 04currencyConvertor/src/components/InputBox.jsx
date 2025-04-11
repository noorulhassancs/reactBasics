import React, {useId, useState} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "pkr",
    // amountDisable = false,
    // currencyDisable = false,    
    className = "",
}) {

    const inputId = useId()
   
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                
                    className="outline-none w-full bg-transparent py-1.5 text-black"
                    type="number"
                    placeholder={`Enter amount in ${selectedCurrency}`}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-700 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {
                        currencyOptions.map((currency) => (<option key={currency} value={currency}>{currency}</option>) )
                    }
                </select>
            </div>
        </div>
    );
}

export default InputBox;
