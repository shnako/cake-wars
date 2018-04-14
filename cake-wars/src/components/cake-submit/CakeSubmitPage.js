import React from 'react';
import CakeApi from '../../api/CakeApi';
import {Redirect} from 'react-router-dom';

class CakeSubmitPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: '',
      comment: '',
      imageUrl: '',
      yumFactor: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.submitCake = this.submitCake.bind(this);
  }

  onInputChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  submitCake(event) {
    event.preventDefault();
    CakeApi.submitCake(this.state).then(submittedCake => {
      if (submittedCake && submittedCake.id) {
        this.setState({id: submittedCake.id});
      }
    });
  }

  render() {
    if (this.state.id) {
      return <Redirect to={'/cake/' + this.state.id}/>;
    }

    return (
      <div>
        <h1>Submit Cake</h1>
        <form onSubmit={this.submitCake}>
          <div className='row'>
            <label htmlFor='name'>Name:</label>
            <input id='name' type='text' required onChange={this.onInputChange}/>
          </div>
          <div className='row'>
            <label htmlFor='imageUrl'>Image URL:</label>
            <input id='imageUrl' type='text' required onChange={this.onInputChange}/>
          </div>
          <div className='row'>
            <label htmlFor='yumFactor'>YUM factor:</label>
            <input id='yumFactor' type='number' required min='1' max='5' onChange={this.onInputChange}/>
          </div>
          <div className='row'>
            <label htmlFor='comment'>Comment:</label>
            <textarea id='comment' required onChange={this.onInputChange}/>
          </div>
          <input type='submit'/>
        </form>
      </div>
    );
  }
}

export default CakeSubmitPage;