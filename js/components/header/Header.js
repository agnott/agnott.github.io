import React from 'react';


import '../../../css/header.css';
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { background: false };

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
    if (offsetY > 150 && !this.state.background) {
      this.setState({ background: true });
    } else if (offsetY <= 150 && this.state.background) {
      this.setState({ background: false });
    }
  }

  render() {
    return (
      <header className={`header ${this.state.background ? 'header--shrunk' : ''}`}>
        <div className="header__link header__link--bold card">
          ANDREW GNOTT
        </div>
        <div className="header__link-container">
          <div className="header__link">
            LABS
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
