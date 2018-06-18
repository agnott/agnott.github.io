import React from 'react';

class AnimateIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { triggered: false };
    this.ref = React.createRef();
    this.initialized = false;
    this.handleOnScroll = this.handleOnScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleOnScroll);
    this.handleOnScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleOnScroll);
  }

  handleOnScroll(e) {
    const height = window.innerHeight;
    const bounding = this.ref.current.getBoundingClientRect();
    const isVisible = this.state.triggered;
    const inRange = bounding.bottom - bounding.height / 2 <= height;

    if ( !isVisible && inRange ) {
      this.setState({ triggered: true });
      window.removeEventListener('scroll', this.handleOnScroll);
    }
  }

  render() {
    return (
      <div className={`animation__container ${this.props.className || ''}`} style={this.props.style} ref={this.ref}>
        <div className={`animation--${this.props.animation}`} style={{ animationPlayState: this.state.triggered ? 'running' : 'paused' }}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default AnimateIn;
