import React from 'react';
import PageContainer from '../page/PageContainer';

class IndexPageContainer extends React.Component {
  render() {
    return (
      <PageContainer>
        <div className="page__title">{this.props.title}</div>
        { this.props.children }
      </PageContainer>
    );
  }
}

export default IndexPageContainer;
