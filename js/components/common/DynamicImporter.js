import React from 'react';

class DynamicImport extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loaded: false };
    this.component = null;
  }

  componentDidMount() {
    const type = this.props.type || this.props.match.params.type;
    const name = this.props.name || this.props.match.params.name || '';
    const transformedName = name.replace(/(?:^|-)([a-z0-9A-Z])/g, (m, p) => p.toUpperCase());

    import(/* webpackMode: "lazy" */ `../../pages/${type}/${transformedName}`).then(d => {
      this.component = d.default;
      this.setState({ loaded: true });
    });
  }

  render() {
    return this.state.loaded ? <this.component {...this.props} /> : null;
  }
}

export default DynamicImport;
