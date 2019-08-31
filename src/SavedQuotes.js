import React from 'react'

// function SavedQuotes(props) {
//     const quotesArray = localStorage.getItem('quotes') ? JSON.parse(localStorage.getItem('quotes')) : [];

//     if(quotesArray.length === 0) {
//         return <p>Local Storage does not contain any quotes to display</p>
//     }

//     let quoteIndexNum = 0;
//     let quote = ''
//     let quoteAuthor = ''
//     function displayQuote(quoteIndex) {
//         quote = quotesArray[quoteIndex].quoteText;
//         quoteAuthor = quotesArray[quoteIndex].quoteAuthor;
//         quoteIndexNum = quoteIndex + 1
//     }

//     function handleClick(e) {
//         console.log(e)
//         console.log(quotesArray.length)
//         console.log(quoteIndexNum)
//         if(quoteIndexNum < (quotesArray.length - 1)) {
//             displayQuote(quoteIndexNum);
//         } else {
//             quoteIndexNum = 0;
//             displayQuote(quoteIndexNum);
//         }
//     }

//     displayQuote(quoteIndexNum)

//     return (
//         <div>
//             <br/>
//             <q>{quote}</q>
//             <p>~ {quoteAuthor}</p>
//             <button type="button" onClick={handleClick}>Get another Quote</button>
//         </div>
//     )

// }

// class SavedQuotes extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             quote: {}
//         }

//         this.quotesArray = localStorage.getItem('quotes') ? JSON.parse(localStorage.getItem('quotes')) : []
//         this.quoteIndexNum = 0
//     }

//     componentDidMount() {
//         const quote = this.quotesArray[this.quoteIndexNum]
//         this.setState({quote})
//         this.quoteIndexNum++
//         console.log('componet did mount quoteIndexNum',this.quoteIndexNum)
//     }

//     handleClick = () => {
//         console.log('when handle click entered', this.quoteIndexNum)
//         if(this.quoteIndexNum <= (this.quotesArray.length - 1)) {
//             const quote = this.quotesArray[this.quoteIndexNum]
//             this.setState({quote})
//             this.quoteIndexNum++
//             console.log('handleClick if quoteIndexNum',this.quoteIndexNum)
//         } else {
//             console.log('handleClick else quoteIndexNum',this.quoteIndexNum)
//             this.quoteIndexNum = 0;
//             const quote = this.quotesArray[this.quoteIndexNum]
//             this.setState({quote})
//             this.quoteIndexNum++
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {this.quotesArray.length === 0 ?  (
//                     <p>Local Storage does not contain any quotes to display</p>
//                 ) : (
//                     <div>
//                         <br/>
//                         <q>{this.state.quote.quoteText}</q>
//                         <p>~ {this.state.quote.quoteAuthor}</p>
//                         <button type="button" onClick={this.handleClick}>Get another Quote</button>
//                     </div>
//                 )}
//             </div>
//         )
//     }
// }


class SavedQuotes extends React.Component {
    constructor() {
        super()
        this.state = {
            quote: {}
        }

      //  this.quotesArray = localStorage.getItem('quotes') ? JSON.parse(localStorage.getItem('quotes')) : []
        this.quoteIndexNum = 0
    }

    componentDidMount() {
        if(JSON.parse(localStorage.getItem('quotes')).length !== 0) {
            const quote = JSON.parse(localStorage.getItem('quotes'))[this.quoteIndexNum]
            this.setState({quote})
            this.quoteIndexNum++
            console.log('componet did mount quoteIndexNum',this.quoteIndexNum)
        }
    }

    handleClick = () => {
        console.log('when handle click entered', this.quoteIndexNum)
        if(this.quoteIndexNum <= (JSON.parse(localStorage.getItem('quotes')).length - 1)) {
            const quote = JSON.parse(localStorage.getItem('quotes'))[this.quoteIndexNum]
            this.setState({quote})
            this.quoteIndexNum++
            console.log('handleClick if quoteIndexNum',this.quoteIndexNum)
        } else {
            console.log('handleClick else quoteIndexNum',this.quoteIndexNum)
            this.quoteIndexNum = 0;
            const quote = JSON.parse(localStorage.getItem('quotes'))[this.quoteIndexNum]
            this.setState({quote})
            this.quoteIndexNum++
        }
    }

    render() {
        return (
            <div>
                {JSON.parse(localStorage.getItem('quotes')).length === 0 ?  (
                    <p>Local Storage does not contain any quotes to display</p>
                ) : (
                    <div>
                        <br/>
                        <q>{this.state.quote.quoteText}</q>
                        <p>~ {this.state.quote.quoteAuthor}</p>
                        <button type="button" onClick={this.handleClick}>Get another Quote</button>
                    </div>
                )}
            </div>
        )
    }
}


export default SavedQuotes