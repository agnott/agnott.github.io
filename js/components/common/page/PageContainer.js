import React from 'react';

export default function PageContainer(props) {
  return (
    <div className="page__container">
      { props.children }
    </div>
  );
}