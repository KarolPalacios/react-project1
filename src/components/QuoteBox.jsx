import React from 'react';
import quotes from '../quotes.json'
import {useState} from 'react'


const QuoteBox = () => {

    const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length ))

    const next = () => {
    setIndex(Math.floor(Math.random() * quotes.length ))
    }


    const colors = [
        "#e76f51",
        "#1d3557",
        "#9b5de5",
        "#bb3e03",
        "#ae2012",
        "#006466",
        "#3f37c9",
        "#240046"
    ]

    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColor]}`


    return (
            <div className="card" style={{color: colors[randomColor]}}>
                <p>
                    <i className="fa-solid fa-quote-left fa-3x"></i> 
                    {quotes[index].quote}
                </p>
                <p className='author'>{quotes[index].author}</p>

                <button onClick={next} style={{background: colors[randomColor]}}>
                <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
    );
};

export default QuoteBox;