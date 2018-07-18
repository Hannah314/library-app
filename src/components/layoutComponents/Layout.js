import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Header from './Header';
import Library from '../libraryComponents/LibraryContainer';
import MyAccount from '../accountComponents/MyAccount';
import firebase, {provider, auth} from '../../firebase';

class Layout extends React.Component {
  
  constructor(){
    super();

    this.state = {
      user: null,
      books: null
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.loadBooks = this.loadBooks.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
  }

  login() {
    auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
      this.loadBooks();
    });
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  loadBooks() {
    const booksRef = firebase.database().ref('books');
    booksRef.on('value', (snapshot) => {
      let books = snapshot.val();
      let newState = [];
      for (let book in books) {
        newState.push({
          id: book,
          title: books[book].title,
          author: books[book].author,
          rating: books[book].rating,
          category: books[book].category
        });
      }
      this.setState({
        books: newState
      })
    }, function (errorObject) {
      console.log("the read failed: " + errorObject.code);
    });
  }

  render() {
    return (
    <React.Fragment>
        <Header user={this.state.user} login={this.login} logout={this.logout}/>
        <Switch>
            <Route exact path={"/"} render={(props) => <Library { ...props} books={this.state.books} loadBooks={this.loadBooks} user={this.state.user} /> }/>
            <Route exact path="/my-account" component={MyAccount} />
            <Redirect path='*' to='/404' />
        </Switch>
    </React.Fragment>
    );
  }
}

export default Layout;
