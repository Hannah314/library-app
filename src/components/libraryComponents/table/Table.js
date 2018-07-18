import React from "react";
import TableRow from "./TableRow";

class Table extends React.Component {
  render() {
    return (
      <div className="table-container">
        <div className="table">
          <div className="table-header">
            <p>Title</p>
            <p>Author</p>
            <p>Rating</p>
            <p>Category</p>
            <p>Status</p>
            <p>Actions</p>
          </div>
          {this.props.books
            ? !this.props.displayedBooks
              ? this.props.books.map((book, i) => {
                  return (
                    <TableRow
                      key={book.id}
                      index={i}
                      books={this.props.books}
                      removeBook={this.props.removeBook}
                    />
                  );
                })
              : this.props.displayedBooks.map((book, i) => {
                  return (
                    <TableRow
                      key={book.id}
                      index={i}
                      books={this.props.displayedBooks}
                    />
                  );
                })
            : ""}
        </div>
      </div>
    );
  }
}

export default Table;
