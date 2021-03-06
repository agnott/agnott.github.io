import React from 'react';

import AnimateLoad from '../../components/common/animation/AnimateLoad';
import IndexPageCard from '../../components/common/index/IndexPageCard';
import IndexPageContainer from '../../components/common/index/IndexPageContainer';

import data from './data';

class LabsIndex extends React.Component {
  render() {
    return (
      <IndexPageContainer title="Labs">
        {
          data.map((article, i) => (
            <AnimateLoad key={article.id} offset={i * 125}>
              <IndexPageCard {...article} />
            </AnimateLoad>
          ))
        }
      </IndexPageContainer>
    );
  }
}

export default LabsIndex;
