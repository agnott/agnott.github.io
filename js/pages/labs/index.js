import React from 'react';

const index = [{
  id: 0,
  title: 'Sample Experiment',
  subtitle: 'This is a sample experiment',
  createdAt: new Date('2018-08-05T21:38:47.045Z'),
}];

import IndexPageContainer from '../../components/common/index/IndexPageContainer';

class LabsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <IndexPageContainer title="Labs Index">
      </IndexPageContainer>
    );
  }
}

export default LabsIndex;
