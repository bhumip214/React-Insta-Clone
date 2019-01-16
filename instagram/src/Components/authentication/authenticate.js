import React from "react";

const authenticate = App => LoginPage =>
  class extends React.Component {
    render() {
      return <App />;
    }
  };

export default authenticate;
