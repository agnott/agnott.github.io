import React from 'react';


import AnimateLoad from '../../components/common/animation/AnimateLoad';

class Contact extends React.Component {
  render() {
    return (
      <div className="page__container">
        <div className="page__title">Contact</div>
        <div className="page__content">
          <AnimateLoad offset={125}>
            <div className="page__dual-block">
              <div>EMAIL</div>
              <div>
                <a href="mailto:gnottandrew@gmail.com">
                  gnottandrew@gmail.com
                </a>
              </div>
            </div>
          </AnimateLoad>
          <div className="page__spacer" />
          <AnimateLoad offset={250}>
            <div className="page__dual-block page__dual-block--secondary">
              <div>PHONE</div>
              <div>574.215.6899</div>
            </div>
          </AnimateLoad>
        </div>
      </div>
    );
  }
}

export default Contact;
