import React, { Component } from 'react';
import Title from './Title';
export default class TodoForm extends Component {
  render() {
    const { edit, handleadd, text, handlechange } = this.props;
    return (
      <React.Fragment>
        <Title title='Todo' />
        <div className='row justify-content-center mt-3'>
          <div className='col-lg-8 col-md-10 col-12 p-4 border border-light rounded'>
            <input
              type='text'
              className='w-100 pl-2 border-top-0 border-left-0 border-right-0 border-bottom border-warning rounded '
              value={text}
              onChange={handlechange}
              placeholder='Add item to todo list'
            />
            <button
              className={
                edit
                  ? 'btn btn-outline-success w-100 mt-3'
                  : 'btn btn-outline-primary w-100 mt-3'
              }
              onClick={handleadd}
            >
              {edit ? 'Edit Item' : 'Add Item'}
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
