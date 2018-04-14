import './CakeDetailsPage.css';
import React from 'react';
import CakeApi from '../../api/CakeApi';
import YumFactor from '../yum-factor/YumFactor';

class CakeDetailsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      cake: {
        id: '',
        name: '',
        comment: '',
        imageUrl: '',
        yumFactor: ''
      }
    };
  }

  componentWillMount() {
    this.loadCake();
  }

  loadCake() {
    CakeApi.getCake(this.props.match.params.cakeId).then(cake => {
      this.setState({cake: cake});
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.cake.name}</h1>
        <YumFactor rating={this.state.cake.yumFactor}/>
        <img className='cake-detail-image' src={this.state.cake.imageUrl} alt={this.state.cake.name}/>
        <h3>{this.state.cake.comment}</h3>
      </div>
    );
  }
}

export default CakeDetailsPage;