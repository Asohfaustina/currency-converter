/* eslint-disable react/prop-types */
import { useId } from "react";

function InputBox({
    label,
    amount,
    onamountchange,
    oncurrencychange,
    currencyoptions,
    selectedcurrency = 'usd',
    amountDisabled = false,
    currencyDisabled = false,
    className ='', 

   
}) {
  const id =useId()
  return (
    <div className={`flex flex-col justify-center items-center   `}>
      <div className={`flex w-full flex-row  gap-4  bg-slate-300 rounded-lg  ${className}`}>
        <div className=' w-full flex flex-col p-4'>
          <label htmlFor={id} className='pb-1 text-black/40'>
            {label}
          </label>
          <input
            type='number'
            id={id}
            value={amount}
            className='bg-transparent pt-2 '
            disabled={amountDisabled}
            onChange={(e) => onamountchange && onamountchange(Number(e.target.value))}
          />
        </div>
        <div className=' w-full flex flex-col p-4 items-end'>
          <p className='pb-1 text-black/40'> Currency Type</p>
          <select
            name=''
            id=''
            className='outline-none pt-2'
            value={selectedcurrency}
            onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)}
            disabled={currencyDisabled}>
            {currencyoptions.map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox