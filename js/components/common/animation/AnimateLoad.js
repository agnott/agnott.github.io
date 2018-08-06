import React from 'react';

import '../../../../css/animation/animate-load.css';
class AnimateLoad extends React.Component {
  render() {
    return (
      <div className="animate__container--load" style={{ animationDelay: `${this.props.offset / 1000}s` }}>
        {this.props.children}
      </div>
    );
  }
}

export default AnimateLoad;
