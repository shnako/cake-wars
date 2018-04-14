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
      debugger;
      this.setState({cakes: cakes});
    })
  }

  render() {
    return (
      <div>
        <h1>Cakes</h1>
        {this.state.cakes.map(cake => <CakeListItem cake={cake}/>)}
      </div>
    );
  }
}

export default CakesPage;