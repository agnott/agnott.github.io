import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="animation__container">
        <div className="header__background" />
        <div className="header__logo animation--rise-in">
          Andrew Gnott
        </div>
        <div className="animation--rise-in">
          <span className="header__link">Home</span>
          <span className="header__link">Blog</span>
          <span className="header__link">About</span>
        </div>
      </header>
    );
  }
}

export default Header;
