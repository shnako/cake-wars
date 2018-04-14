import './CakeListItem.css';
import React from 'react';

class CakeListItem extends React.Component {
  render() {
    return (
      <a href={'/cake/' + this.props.cake.id}>
        <div className='cake-list-item'>
          <div className='pull-left col-xs-4'>
            <img className='cake-image' src={this.props.cake.imageUrl} alt={this.props.cake.name}/>
          </div>
          <p className='cake-title'>{this.props.cake.name}</p>
        </div>
      </a>
    );
  }
}

export default CakeListItem;