import React from 'react';

const articles = [{
  id: 0,
  title: 'True Confessions of a Tech Guy',
  subtitle: 'How tech addiction affects us all.',
  createdAt: new Date('2018-08-05T21:38:47.045Z'),
  updatedAt: new Date('2018-08-05T21:38:47.045Z'),
  released: true,
}, {
  id: 1,
  title: 'Digital Democracies in the Age of Internet of Things',
  subtitle: 'This is a sample experiment',
  createdAt: new Date('2018-08-05T21:38:47.045Z'),
  updatedAt: new Date('2018-08-05T21:38:47.045Z'),
  released: true,
}, {
  id: 2,
  title: 'Digital Democracies in the Age of Internet of Things',
  subtitle: 'This is a sample experiment',
  createdAt: new Date('2018-08-01T21:38:47.045Z'),
  updatedAt: new Date('2018-08-01T21:38:47.045Z'),
  released: true,
}, {
  id: 3,
  title: 'Digital Democracies in the Age of Internet of Things',
  subtitle: 'This is a sample experiment',
  createdAt: new Date('2018-07-25T21:38:47.045Z'),
  updatedAt: new Date('2018-07-25T21:38:47.045Z'),
  released: true,
}, {
  id: 4,
  title: 'Digital Democracies in the Age of Internet of Things',
  subtitle: 'This is a sample experiment',
  createdAt: new Date('2018-08-05T21:38:47.045Z'),
  updatedAt: new Date('2018-08-05T21:38:47.045Z'),
  released: true,
}];

const released = articles.filter(a => a.released).sort((a, b) => b.createdAt - a.createdAt);

import AnimateLoad from '../../components/common/animation/AnimateLoad';
import IndexPageCard from '../../components/common/index/IndexPageCard';
import IndexPageContainer from '../../components/common/index/IndexPageContainer';

class LabsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <IndexPageContainer title="Labs">
        {
          released.map((article, i) => (
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
