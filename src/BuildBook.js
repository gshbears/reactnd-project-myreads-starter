import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BuildBook extends Component {
  static propTypes =  {
    book: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired,
    currentShelf: PropTypes.string.isRequired
  }
  render() {
    const { book, moveBook, currentShelf } = this.props

    if ( typeof (book.imageLinks) !== 'undefined' && typeof (book.title) !== 'undefined' && typeof (book.authors) !== 'undefined' ){
      return (

         <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                <div className="book-shelf-changer">
                  <select onChange={e => moveBook(book,e.target.value)} value={currentShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              {book.authors.map(author => {
                return <div className="book-authors" key={author}>{author}</div>
              })}
            </div>
          </li>
      )
    }else{
      return (<div></div>)
    }
  }
}

export default BuildBook
