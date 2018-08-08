import React from 'react';
import { Link } from 'react-router-dom';

import Time from '../../../lib/time';

import '../../../../css/pages/index/card.css';
class IndexPageCard extends React.Component {
  render() {
    return (
      <div className="index-page__card">
        <Link to={this.props.url}>
          <div className="index-page__card-title">{this.props.title}</div>
          <div className="index-page__card-subtitle">{this.props.subtitle}</div>
        </Link>
        <div className="index-page__card-date">{this.props.createdAt && Time.since(this.props.createdAt)}</div>
      </div>
    );
  }
}

export default IndexPageCard;
