import React from 'react';

import Time from '../../../lib/time';

import '../../../../css/pages/index/card.css';
class IndexPageCard extends React.Component {
  render() {
    return (
      <div className="index-page__card">
        <div className="index-page__card-title">{this.props.title}</div>
        <div className="index-page__card-subtitle">{this.props.subtitle}</div>
        <div className="index-page__card-date">{this.props.createdAt && Time.since(this.props.createdAt)}</div>
      </div>
    );
  }
}

export default IndexPageCard;
