import React from "react";
import API from "./../API"

export const BookContext = React.createContext();

export class BookProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
      searchTerm: "",
      searchedList: [],
      selectedBook: ""
    };
  }

  search = (searchText) => {
    let results = this.state.bookList.filter(book => {
      return book.title.includes(searchText) || book.author.includes(searchText)
    })
    this.setState({
      searchedList: results,
      searchTerm: searchText
    })
  }

  deleteBook = (bookId) => {
    let newList = this.state.bookList.filter((bk) => bk._id !== bookId)
    API.deleteBook(bookId).then((book) => {
      this.setState({
        bookList: newList,
        searchedList: newList,
        searchTerm: ""
      })
    }).catch((err) => {
        console.log(err)
    })
  }

  selectBook = (bookId) => {
    this.setState({
     selectedBook: this.state.bookList.filter((bk) => bk._id === bookId)[0]
    })
  }

  componentWillMount() {
      API.getBooks().then((books) => {
          console.log(books.data)
          this.setState({
            bookList: books.data
          })
      }).catch((err) => {
          console.log(err)
      })
    }

  render() {
    return (
      <BookContext.Provider
        value={{
          state: this.state,
          search: this.search,
          deleteBook: this.deleteBook,
          selectBook: this.selectBook
        }}
      >
        {this.props.children}
      </BookContext.Provider>
    );
  }
}

