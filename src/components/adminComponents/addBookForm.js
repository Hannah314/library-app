import React from "react";
import firebase from '../../firebase';

class addBookForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      rating: "",
      category: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
        [e.currentTarget.name] : [e.currentTarget.value]
    })
  }

  handleSubmit(e){
      e.preventDefault();
      const booksRef = firebase.database().ref('books');
      const book = {
          title: this.state.title,
          author: this.state.author,
          rating: this.state.rating,
          category: this.state.category
      }
      booksRef.push(book);
      this.setState({
          title: '',
          author: '',
          rating: '',
          category: ''
      })
  } 

  render() {
    return (
      <React.Fragment>
        <div>Add Book</div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={this.state.author}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="rating"
            placeholder="Rating"
            value={this.state.rating}
            onChange={this.handleChange}
          />
          <select
            type="text"
            name="category"
            placeholder="Category"
            value={this.state.category}
            onChange={this.handleChange}
          >
            <option selected hidden>Category</option>
            <option value="Business">Business</option>
            <option value="Personal Growth">Personal Growth</option>
            <option value="UX/UI Design & Product Management">UX/UI Design and Product Management</option>
          </select>
          <button>Add Book</button>
        </form>
      </React.Fragment>
    );
  }
}

export default addBookForm;
