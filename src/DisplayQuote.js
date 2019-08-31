import React from 'react'

function DisplayQuote(props) {
    return (
        <div>
             <q>{props.quoteText}</q>
             <p>~ {props.quoteAuthor}</p>
             <button type="button" onClick={props.handleClick}>Get another Quote</button>
        </div>
    )
}

export default DisplayQuote