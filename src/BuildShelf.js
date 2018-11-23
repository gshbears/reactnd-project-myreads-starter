import React, { Component } from 'react'
import BuildBook from './BuildBook'
import PropTypes from 'prop-types'

class BuildShelf extends Component {

  static propTypes =  {
    shelfBooks: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired,
    shelf: PropTypes.string.isRequired,
    shelfTitle: PropTypes.string.isRequired,
  }


  render() {

    const { moveBook , shelfBooks, shelf, shelfTitle } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title" >{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelfBooks.map(book => {
             return  <BuildBook
             book={book}
             key={book.id}
             moveBook={moveBook}
             currentShelf = {shelf}
             ribbonName = 'none'
             />
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default BuildShelf
