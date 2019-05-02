import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class LoginForm extends Component {

  renderField = ({meta:{touched, error}}) => (
    <div>
      {touched && error && <span>{error}</span>}
    </div>
  )  

  render() {
    const {handleSubmit, onSubmit} = this.props;
    return (
      <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="userName">User Name</label>
        <Field
          name='userName'
          component={this.renderField}
          type='text'
          label='User Name'
          placeholder='Enter User Name'
        /><br /><br />
        <label htmlFor="password">Password</label>
        <Field
          name='password'
          component='input'
          type='password'
          label='User Name'
          placeholder='Password Please'
        /><br /><br />
        <button 
          type='submit'
          label='submit'
        >
          Submit
        </button>
      </form>
    )
  }
}


export default reduxForm({
  form: 'LOGIN',
  fields:['name'],
  enableReinitialize: true
})(LoginForm)
