import React from "react";

// TODO: add display name: https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging

function QueryHOC(WrappedComponent, query) {
  return class extends React.Component {
    state = { fetching: false, data: null, error: null };

    runQuery() {
      this.setState({ fetching: true });

      fetch(query)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            data: res,
            error: null,
            fetching: false,
          });
        })
        .catch((error) =>
          this.setState({ error, data: null, fetching: false })
        );
    }

    componentDidMount() {
      this.runQuery();
    }

    // componentDidUpdate(prevProps) {
    //   if (prevProps.query !== this.props.query) {
    //     this.runQuery();
    //   }
    // }

    render() {
      return <WrappedComponent data={this.state} />;
    }
  };
}

export default QueryHOC;
