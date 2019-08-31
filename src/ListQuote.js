import React from 'react'

function ListQuote(props) {
    return (
        <li>
            <q>{props.quoteText}</q>
            <p>~ {props.quoteAuthor}</p>
            <button type="button" onClick={() => {props.handleEditClick(props.id)}}>Edit</button>
            <button type="button" onClick={() => {props.handleDeleteClick(props.id)}}>Delete</button>
            <hr />
        </li>
    )
}

export default ListQuote