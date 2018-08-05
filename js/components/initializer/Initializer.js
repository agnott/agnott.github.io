import React from 'react';

import '../../../css/initializer.css';
class Initializer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="initializer__container">
        <div className="initializer">
          <div className="initializer__circle-container">
            <div className="initializer__circle-background" />
            <div className="initializer__circle">
              <div className="initializer__text">
                <span>A</span><span>G</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Initializer;
