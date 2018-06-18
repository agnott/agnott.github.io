import React from 'react';

class AbstractBackground extends React.Component {
  constructor(props) {
    super(props);
    this.element = React.createRef();
    this.state = { elements: [] };
  }

  componentDidMount() {
    const width = this.element.current.offsetWidth;
    const height = this.element.current.offsetHeight;

    const elements = [];
    for (var i = 0; i < 50 + Math.random() * 50; i++) {
      elements.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        width: width / 2 + Math.random() * width / 2,
        height: height / 2 + Math.random() * height / 2,
        angle: 360 * Math.random(),
      });
    }

    this.setState({ elements });
  }

  renderElement(el) {
    const style = {
      position: 'absolute',
      left: el.x - el.width,
      top: el.y - el.height,
      width: el.width,
      height: el.height,
      transform: `rotate(${el.angle}deg)`,
      backgroundColor: Math.random() > 0.5 ? 'rgba(200, 240, 255)' : 'rgba(150, 150, 150)',
    };

    return <div key={el.id} style={style} />;
  }

  render() {
    console.log('render');
    return (
      <div
        ref={this.element}
        className="background--abstract"
      >
        { this.state.elements.map(this.renderElement) }
      </div>
    );
  }
}

export { AbstractBackground };
