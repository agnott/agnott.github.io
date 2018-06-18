import React from 'react';

import Header from './header/Header';
import Post from './post/Post';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Post />
      </React.Fragment>
    );
  }
}

export default App;
