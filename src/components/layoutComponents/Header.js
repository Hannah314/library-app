import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="flex-justify-space flex-align-center">
        <img src="/images/bb-logo.png" alt="logo" />
        {this.props.user ? (
          <div className="flex-align-center">
            <div className="user">
              <p>{this.props.user.displayName}</p>
            </div>
            <i className="material-icons" onClick={() => this.props.logout()}>exit_to_app</i>
          </div>
        ) : (
          <div>
            <button onClick={() => this.props.login()}>Login</button>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
