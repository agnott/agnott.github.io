import React from 'react';

class IndexPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { controlsOpen: false };
  }

  render() {
    const { controlsOpen } = this.state;

    return (
      <div className="page__container">
        <div className="page__title">{this.props.title}</div>
        { this.props.children }
      </div>
    );
  }
}

export default IndexPageContainer;
