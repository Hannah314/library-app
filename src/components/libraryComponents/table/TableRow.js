import React from "react";

class TableRow extends React.Component {
  render() {
    const book = this.props.books[this.props.index];
    return (
      <React.Fragment>
        {book ? (
          <div className="table-row">
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.rating}</p>
            <p>{book.category}</p>
            <p>{book.status}</p>
            <p>
              <button onClick={() => this.props.removeBook(book.id)}>
                Remove Book
              </button>
            </p>
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default TableRow;
