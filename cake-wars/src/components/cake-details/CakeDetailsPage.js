import React from 'react';

class CakeDetailsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Cake Details</h1>
        <h2>Cake {this.props.match.params.cakeId}</h2>
      </div>
    );
  }
}

export default CakeDetailsPage;