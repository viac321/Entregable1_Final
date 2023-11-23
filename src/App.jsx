import { useState } from 'react'
import './App.css'
import quotes from "./components/db/quotes.json"
import QuoteBox from "./components/QuoteBox";
import { getRandomElement } from "./components/utils/random";

const bgs = ["bg1", "bg2", "bg3", "bg4", "bg5"];

function App() {
  const [quote, setQuote] = useState(getRandomElement(quotes));
  const [currentBg, setCurrentBg] = useState(getRandomElement(bgs));
  
  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes));
    setCurrentBg(getRandomElement(bgs));
  }
  
  return (
    <>
      <main className={`App ${currentBg}`}>
        <QuoteBox  quote={quote} handleChangeQuote = {handleChangeQuote} />
      </main>
      
    </>
  )
}

export default App
