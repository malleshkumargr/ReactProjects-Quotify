import React from 'react'
import ListQuote from './ListQuote'

// function ListAllSavedQuotes(props) {
//     return (
//         <div>
//             {localStorage.getItem('quotes') === null ? (
//                 <p>No Quotes available to display</p>
//              ) : (
//                 <ul>
//                     {JSON.parse(localStorage.getItem('quotes')).map((quote,index) => {
//                         return <ListQuote key={index} quoteText={quote.quoteText} quoteAuthor={quote.quoteAuthor} />
//                     })}
//                 </ul>
//              )
//             }
//         </div>
//     )
// }

class ListAllSavedQuotes extends React.Component {
    constructor() {
        super()
        this.state = {
            quotes: JSON.parse(localStorage.getItem('quotes'))
        }
    }

    handleEditClick = (id) => {
        console.log('Clicked on Edit button in list quotes ' + id)
    }

    handleDeleteClick = (id) => {
        // console.log('Clicked on Delete button in list quotes ' + id)
        // const quotes = JSON.parse(localStorage.getItem('quotes')).filter((quote, index) => index !== id)
        // JSON.stringify(localStorage.setItem('quotes', this.state.quotes))
        this.setState(prevState => {
            const quotes = prevState.quotes.filter((quote, index) => index !== id)
            localStorage.setItem('quotes', JSON.stringify(quotes))
            return {
                quotes: quotes
            }
        })
    }

    render() {
        console.log('render', this.state)
        console.log(this.state.quotes.length === 0)
        
        return (
            <div>
                {(this.state.quotes === null || this.state.quotes.length === 0) ? (
                  <p>No Quotes available to display</p>
                ) : (
                   <ul>
                       {this.state.quotes.map((quote, index) => {
                           return <ListQuote key={index} id={index}
                                             quoteText={quote.quoteText} 
                                             quoteAuthor={quote.quoteAuthor} 
                                             handleEditClick={this.handleEditClick}
                                             handleDeleteClick={this.handleDeleteClick} />
                       })}
                   </ul>
                )}
           </div>
        )
        
    }

}

export default ListAllSavedQuotes