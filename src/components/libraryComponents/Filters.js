import React from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';

class Filters extends React.Component {
  search = e => {
    const searchTerm = e.currentTarget.value.toLowerCase();
    this.props.searchBooks(searchTerm);
  };

  filter = e => {
    const category = e.currentTarget.value;
    this.props.filterBooks(category);
  }

  render() {
    return (
      <div className="filters">
        <div className="search-container">
            <input type="text" placeholder="Type book name or author" onChange={this.search} />
            <i className="material-icons">search</i>
        </div>
        <select onChange={this.filter}>
            <option>Category</option>
            <option value="business">Business</option>
            <option value="personal growth">Personal Growth</option>
            <option value="ux/ui design & product management">UX/UI Design and Product Management</option>
        </select>
      </div>
    );
  }
}

export default Filters;