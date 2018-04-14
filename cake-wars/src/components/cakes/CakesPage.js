import React from 'react';
import CakeApi from '../../api/CakeApi';
import CakeListItem from './CakeListItem';

class CakesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      cakes: []
    };
  }

  componentWillMount() {
    this.loadCakes();
  }

  loadCakes() {
    CakeApi.getCakes().then(cakes => {
      this.setState({cakes: cakes});
    })
  }

  render() {
    return (
      <div className='col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1'>
        <h1>Cakes</h1>
        {this.state.cakes.map(cake => <CakeListItem cake={cake} key={cake.id}/>)}
      </div>
    );
  }
}

export default CakesPage;