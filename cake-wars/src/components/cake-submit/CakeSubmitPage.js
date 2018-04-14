import './CakeSubmitPage.css';
import React from 'react';
import CakeApi from '../../api/CakeApi';
import {Redirect} from 'react-router-dom';
import YumFactor from '../yum-factor/YumFactor';

class CakeSubmitPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: '',
      comment: '',
      imageUrl: '',
      yumFactor: 3
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onYumFactorChange = this.onYumFactorChange.bind(this);
    this.submitCake = this.submitCake.bind(this);
  }

  onInputChange(event) {
    debugger;
    this.setState({[event.target.id]: event.target.value});
  }

  onYumFactorChange(newYumFactor) {
    this.setState({yumFactor: newYumFactor});
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
      <div
        className='col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1'>
        <h1>Submit Cake</h1>
        <form onSubmit={this.submitCake}>
          <div className='row'>
            <label htmlFor='name'>Name:</label>
            <input id='name'
                   type='text'
                   className='form-control'
                   required
                   onChange={this.onInputChange}/>
          </div>
          <div className='row'>
            <label htmlFor='imageUrl'>Image URL:</label>
            <input id='imageUrl'
                   type='url'
                   className='form-control'
                   required
                   onChange={this.onInputChange}/>
          </div>
          <div className='row'>
            <label htmlFor='yumFactor'>YUM factor:</label>
            <YumFactor id='yumFactor' rating={this.state.yumFactor} onChange={this.onYumFactorChange}/>
          </div>
          <div className='row'>
            <label htmlFor='comment'>Comment:</label>
            <textarea id='comment'
                      className='form-control'
                      required
                      onChange={this.onInputChange}/>
          </div>
          <div className='row'>
            <input className='btn btn-primary col-xs-12' type='submit'/>
          </div>
        </form>
      </div>
    );
  }
}

export default CakeSubmitPage;