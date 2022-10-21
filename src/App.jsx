import { useState } from 'react'
import './style.css'
import quotes from './quotes.json'
import QuoteBox from './components/QuoteBox'


function App() {
  console.log(quotes);


  return (
    <div className="App">
      <QuoteBox/>
    </div>
  )
}

export default App
