import './CakeListItem.css';
import React from 'react';

class CakeListItem extends React.Component {
  render() {
    return (
      <a href={'/cake/' + this.props.cake.id}>
        <div className='cake-list-item col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12 col-xs-12'>
          <div className='pull-left col-lg-4 col-md-4 col-sm-4 col-xs-4'>
            <img className='cake-image' src={this.props.cake.imageUrl}/>
          </div>
          <div>
            <p className='cake-title'>{this.props.cake.name}</p>
            <p className='cake-comment'>{this.props.cake.comment}</p>
            <p>{'Yum factor: ' + this.props.cake.yumFactor}</p>
          </div>
          <br/>
        </div>
      </a>
    );
  }
}

export default CakeListItem;