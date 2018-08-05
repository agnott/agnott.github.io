import React from 'react';

class DynamicImport extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loaded: false };
    this.component = null;
  }

  componentDidMount() {
    console.log('mounting');
    import(/* webpackMode: "lazy" */ `../../pages/${this.props.type}/${this.props.name}`).then(d => {
      console.log(d);
      this.component = d.default;
      this.setState({ loaded: true });
    });
  }

  render() {
    return (
      <div>
        Dynamic Importer
        {
          this.state.loaded && <this.component />
        }
      </div>
    );
  }
}

export default DynamicImport;
