import React from 'react'

class NewQuote extends React.Component {
    constructor() {
        super()
        this.state = {
           quoteText: '',
           quoteAuthor: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const quote = {
            quoteText: this.state.quoteText,
            quoteAuthor: this.state.quoteAuthor
        }

        if(localStorage.getItem('quotes')) {
            localStorage.setItem('quotes', JSON.stringify([].concat(JSON.parse(localStorage.getItem('quotes')), quote)))
        } else {
            localStorage.setItem('quotes', JSON.stringify([].concat(quote)))
        }

        this.setState({
            quoteText: '',
            quoteAuthor: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        console.log('render', this.state)
        return (
            <div>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <textarea rows="20" cols="75" value={this.state.quoteText} onChange={this.handleChange} name="quoteText"/> <br />
                    <input type="text" size="74" onChange={this.handleChange} value={this.state.quoteAuthor} name="quoteAuthor"/> <br />
                    <input type="submit" value="Save" />
                </form>
            </div>
        )
    }
}

export default NewQuote