import React from 'react';

import '../../../css/pages/home.css';
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bannerText: 'Software Engineer',
    };
  }

  render() {
    return (
      <div className="home">
        <div className="home__banner">
          <div className="home__banner-text">
            SOFTWARE ENGINEER
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
