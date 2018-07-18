import React from "react";
import Filters from "./Filters";
import Table from "./table/Table";
import firebase from "../../firebase";

class Library extends React.Component {
  constructor() {
    super();
    this.state = {
      displayedBooks: null
    };
  }

  componentDidMount() {
    this.props.loadBooks();
  }

  searchBooks = searchTerm => {
    let displayedBooks = { ...this.props.books };
    displayedBooks = Object.values(displayedBooks).filter(book => {
      return (
        book.title
          .toString()
          .toLowerCase()
          .includes(searchTerm) ||
        book.author
          .toString()
          .toLowerCase()
          .includes(searchTerm)
      );
    });
    this.setState({ displayedBooks });
  };

  filterBooks = category => {
    let displayedBooks = { ...this.props.books };
    displayedBooks = Object.values(displayedBooks).filter(book => {
      return book.category.toString().toLowerCase().includes(category);
    });
    this.setState({ displayedBooks });
  };

  removeBook(id) {
    const bookRef = firebase.database().ref(`/books/${id}`);
    bookRef.remove();
  }

  render() {
    return (
      <div className="App">
        {this.props.user ? (
          <React.Fragment>
            <Filters
              books={this.props.books}
              searchBooks={this.searchBooks}
              filterBooks={this.filterBooks}
            />
            <Table
              books={this.props.books}
              displayedBooks={this.state.displayedBooks}
              removeBook={this.removeBook}
            />
          </React.Fragment>
        ) : (
          "You must be logged in to view the library"
        )}
      </div>
    );
  }
}

export default Library;
