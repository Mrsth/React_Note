import React from "react";

class BalanceSheet extends React.Component {
  render(props) {
    return (
      <div className="container p-4" style={{ height: "82vh" }}>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default BalanceSheet;
