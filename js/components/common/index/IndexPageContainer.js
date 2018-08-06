import React from 'react';


import '../../../../css/pages/index/container.css';
class IndexPageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="index-page__container">
        <div className="index-page__title">{this.props.title}</div>
        { this.props.children }
      </div>
    );
  }
}

export default IndexPageContainer;