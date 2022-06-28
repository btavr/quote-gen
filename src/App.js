import { useEffect, useState, } from "react"
import './App.css';

function App() {

  const [quotes, setQuotes] = useState({})
 

  const getQuote = () => {
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then((data) => {
        let random = Math.floor(Math.random() * data.length)
        setQuotes(data[random])
        
      })
  }

  useEffect(() => {
    getQuote()
  }, [])



  return (
    <div className="App">
      
      
      <div id='wrapper' >
        <h1>Random Quote Machine</h1>
           

        <div id="quote-box">
          <div id="elements">
            <p id="text"><i id='quoteIcon' class="bi bi-quote"></i> {quotes.text}</p>
            <p id="author">- {quotes.author}</p>
            <button type="button" class="btn btn-outline-secondary" id="new-quote" onClick={getQuote}>new quote</button>
            <a type="button" class="btn btn-outline-primary"
              href={`https://twitter.com/intent/tweet?text="${quotes.text}" - ${quotes.author}`}
              id="tweet-quote"><i class="bi bi-twitter"></i> tweet</a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;