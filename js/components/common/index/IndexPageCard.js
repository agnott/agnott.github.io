import React from 'react';
import { Link } from 'react-router-dom';

import Time from '../../../lib/time';
import Tag from '../tag/Tag';

import '../../../../css/pages/index/card.css';
class IndexPageCard extends React.Component {
  render() {
    return (
      <div className="index-page__card">
        <div className="index-page__card-inner">
          <Link to={this.props.url}>
            <div className="index-page__card-title">{this.props.title}</div>
            <div className="index-page__card-subtitle">{this.props.subtitle}</div>
          </Link> 
        </div>
        {this.props.tags && this.props.tags.map(tag => <Tag key={tag} name={tag} />)}
        <div className="index-page__card-date">
          {this.props.createdAt && Time.since(this.props.createdAt)}
        </div>
      </div>
    );
  }
}

export default IndexPageCard;
