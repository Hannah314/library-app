import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="flex-justify-space flex-align-center">
        <p>Library</p>
        {this.props.user ? (
          <div className="flex-align-center">
            <div className="user">
              <img src={this.props.user.image} />
              <p>{this.props.user.name}</p>
            </div>
            <i className="material-icons">exit_to_app</i>
          </div>
        ) : (
          <div>
            <button>Sign In</button>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
