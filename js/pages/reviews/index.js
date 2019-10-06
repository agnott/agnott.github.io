import React from 'react';

import AnimateLoad from '../../components/common/animation/AnimateLoad';
import IndexPageCard from '../../components/common/index/IndexPageCard';
import IndexPageContainer from '../../components/common/index/IndexPageContainer';

import data from './data';

class ReviewsIndex extends React.Component {
  render() {
    return (
      <IndexPageContainer title="Blog">
        {data.map((article, i) => (
          <AnimateLoad key={`${i}-${article.url}`} offset={i * 125}>
            <IndexPageCard {...article} />
          </AnimateLoad>
        ))}
      </IndexPageContainer>
    );
  }
}

export default ReviewsIndex;
