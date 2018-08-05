import React from 'react';

import '../../../css/header.css';
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__link header__link--bold card">
          ANDREW GNOTT
        </div>
        <div className="header__link-container">
          <div className="header__link">
            EXPERIMENTS
          </div>
          <div className="header__link">
            BLOG
          </div>
          <div className="header__link">
            CONTACT
          </div>
          <div className="header__link">
            ABOUT
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
