import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import '../../../css/header.css';
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { shrunk: false };

    this.onDocumentScroll = this.onDocumentScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.onDocumentScroll);
    this.onDocumentScroll();
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onDocumentScroll);
  }

  onDocumentScroll() {
    const offsetY = window.pageYOffset;
    if (offsetY > 150 && !this.state.shrunk) {
      this.setState({ shrunk: true });
    } else if (offsetY <= 150 && this.state.shrunk) {
      this.setState({ shrunk: false });
    }
  }

  render() {
    return (
      <header className={`header ${this.state.shrunk ? 'header--shrunk' : ''}`}>
        <div className="header__link header__link--bold card">
          <Link to="/blog">Andrew Gnott</Link>
        </div>
        <div className="header__link-container">
          <NavLink to="/blog" className="header__link" activeClassName="header__link--active">
            Blog
          </NavLink>
          <NavLink to="/labs" className="header__link" activeClassName="header__link--active">
            Labs
          </NavLink>
          <NavLink to="/contact" className="header__link" activeClassName="header__link--active">
            Contact
          </NavLink>
          {
            false &&
            <NavLink to="/about" className="header__link" activeClassName="header__link--active">
              About
            </NavLink>
          }
        </div>
      </header>
    );
  }
}

export default Header;
