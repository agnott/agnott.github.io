import React from 'react';

import '../../../css/pages/home.css';
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { parallax: 0 };

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
    this.setState({ parallax: offsetY / 5 });
  }

  render() {
    return (
      <div className="home">
        <div className="home__banner">
          <div
            className="home__banner-text"
            style={{ bottom: this.state.parallax * 6 }}
          >
            <span>SOFT</span>
            <span className="home__banner-letters--transparent">WARE </span>
            <span className="home__banner-letters--transparent">ENGI</span>
            <span className="home__banner-letters--transparent">NEER</span>
          </div>
          <div
            className="home__banner-text"
            style={{ bottom: this.state.parallax * 4 }}
          >
            <span className="home__banner-letters--transparent">SOFT</span>
            <span>WARE </span>
            <span className="home__banner-letters--transparent">ENGI</span>
            <span className="home__banner-letters--transparent">NEER</span>
          </div>
          <div
            className="home__banner-text"
            style={{ bottom: this.state.parallax * 2 }}
          >
            <span className="home__banner-letters--transparent">SOFT</span>
            <span className="home__banner-letters--transparent">WARE </span>
            <span>ENGI</span>
            <span className="home__banner-letters--transparent">NEER</span>
          </div>
          <div
            className="home__banner-text"
            style={{ bottom: this.state.parallax * 0 }}
          >
            <span className="home__banner-letters--transparent">SOFT</span>
            <span className="home__banner-letters--transparent">WARE </span>
            <span className="home__banner-letters--transparent">ENGI</span>
            <span>NEER</span>
          </div>
        </div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
        <div>sdakfjskadf</div>
      </div>
    )
  }
}

export default Home;
