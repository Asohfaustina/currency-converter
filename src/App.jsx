import { useState } from 'react';
import useCurrencyIfo from './hooks/useCurrencyIfo';
import { InputBox } from './components/index';


function App() {
  const [from, setFrom] = useState("btc");
  const[curamount, setAmount] = useState();
  const [to, setTo] = useState("usd");
  const [converted, setConverted] = useState();
  const currencyInfo = useCurrencyIfo(from)
  const options = Object.keys(currencyInfo)
  const convert = () => {
    setConverted(parseFloat(curamount * currencyInfo[to]));

  }
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(converted);
    setConverted(curamount)
 }
  return (
    <>
      <div
        className='w-100 h-screen bg-cover bg-no-repeat flex justify-center items-center '
        style={{
          backgroundImage: `url(https://media.istockphoto.com/id/1407983911/photo/forex-diagrams-and-stock-market-rising-lines-with-numbers.jpg?s=1024x1024&w=is&k=20&c=Cjl0_Fm2wDOQy7vuFOcDgvssIgUZ02MvIspWA4_GO_s=)`,
        }}>
        <div className='bg-white rounded-md p-4 '>
          <InputBox currencyoptions={options}
            label={'From'}
            oncurrencychange={(currency) => { setFrom(currency) }}
            selectedcurrency={from}
            onamountchange={(amount) => setAmount(amount) }
            amount={curamount}
          />

          <div className='w-full relative h-0.5'>
            <button onClick={swap} className='bg-blue-700 text-white absolute left-1/2 -translate-x-1/2 -translate-y-1/2   rounded-lg p-3'>
              {' '}
              swap
            </button>
          </div>
          <InputBox currencyoptions={options}
            label={'To'}
            amountDisabled={true}
            className={'rounded-b-none'}
            selectedcurrency={to}
            amount={converted}
            onamountchange={(amount) => setConverted(amount)}
          oncurrencychange={(currency)=> setTo(currency)}/>
          <button className='bg-blue-700 text-white  w-full rounded-b-lg  p-4' onClick={convert}>
            {' '}
            Convert {from} to {to}{' '}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
