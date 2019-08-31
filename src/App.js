import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import RandomQuote from './RandomQuote'
import SavedQuotes from './SavedQuotes'
import NewQuote from './NewQuote'
import ListAllSavedQuotes from './ListAllSavedQuotes'

function App(props) {
    return (
        <BrowserRouter>
            <div>
                <h1>{props.title}</h1>
                <Link to="/index">Random Quote (API)</Link> &nbsp;
                <Link to="/saved-quotes">Random Quote (Local)</Link> &nbsp;
                <Link to="/new-quote">Add Quote</Link> &nbsp;
                <Link to="/list-all-saved-quotes">List All Quotes (Local)</Link> &nbsp;

                <Route path="/index" component={RandomQuote} />
                <Route path="/saved-quotes" component={SavedQuotes} />
                <Route path="/new-quote" component={NewQuote} />
                <Route path="/list-all-saved-quotes" component={ListAllSavedQuotes} />
            </div>
        </BrowserRouter>
    )
}

export default App