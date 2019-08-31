import React from 'react'
import axios from 'axios'
import DisplayQuote from './DisplayQuote'

class RandomQuote extends React.Component {
    constructor() {
        super()
        this.state = {
            quote: {},
            isSaveToLocalBtnDisabled: false,
            saveToLocalBtnText: 'Save to local',
        }
        this.quotesArr = localStorage.getItem('quotes') ? JSON.parse(localStorage.getItem('quotes')) : []
        localStorage.setItem('quotes', JSON.stringify(this.quotesArr))
    }
    componentDidMount() {
        axios.get('https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
            .then(response => {
                const quoteText = response.data.quoteText
                const quoteAuthor = response.data.quoteAuthor
                this.setState({
                    quote: {quoteText, quoteAuthor}
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleClick = () => {
        axios.get('https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
            .then(response => {
                const quoteText = response.data.quoteText
                const quoteAuthor = response.data.quoteAuthor

                this.setState({
                    quote: {quoteText, quoteAuthor},
                    isSaveToLocalBtnDisabled: false,
                    saveToLocalBtnText: 'Save to local'
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleClickSaveToLocal = () => {
        this.quotesArr.push(this.state.quote)
        localStorage.setItem('quotes', JSON.stringify(this.quotesArr))
        this.setState({
            isSaveToLocalBtnDisabled: true,
            saveToLocalBtnText: 'saved'
        })
    }

    render() {
        console.log('render', this.state)
        return (
            <div>
                <br/>
                <q>{this.state.quote.quoteText}</q>
                <p>~ {this.state.quote.quoteAuthor}</p>
                <button type="button" onClick={this.handleClick}>Get another Quote</button>
                {/* <DisplayQuote quoteText={this.state.quote.quoteText} quoteAuthor={this.state.quote.quoteAuthor} handleClick={this.handleClick} /> */}
                <button type="button" onClick={this.handleClickSaveToLocal} disabled={this.state.isSaveToLocalBtnDisabled}>{this.state.saveToLocalBtnText}</button>
            </div>
        )
    }
}

export default RandomQuote