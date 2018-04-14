import React from 'react';

class CakeListItem extends React.Component {
  render() {
    return (
      <a href={'/cake/' + this.props.cake.id}>
        <div>
          <li>{this.props.cake.name}</li>
          <li>{this.props.cake.comment}</li>
          <li>{this.props.cake.imageUrl}</li>
          <li>{this.props.cake.yumFactor}</li>
          <br/>
        </div>
      </a>
    );
  }
}

export default CakeListItem;