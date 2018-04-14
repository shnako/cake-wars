import './CakeListItem.css';
import React from 'react';

class CakeListItem extends React.Component {
  render() {
    return (
      <a href={'/cake/' + this.props.cake.id}>
        <div className='cake-list-item col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-12 col-xs-12'>
          <div className='pull-left col-lg-4 col-md-4 col-sm-4 col-xs-4'>
            <img className='cake-image' src={this.props.cake.imageUrl} alt={this.props.cake.name}/>
          </div>
          <p className='cake-title'>{this.props.cake.name}</p>
          <br/>
        </div>
      </a>
    );
  }
}

export default CakeListItem;