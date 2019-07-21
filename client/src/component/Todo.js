import React, { Component } from 'react';
import Title from './Title';
export default class Todo extends Component {
  render() {
    const { items, clearList, handledelete, handleedit } = this.props;
    return (
      <div className='container'>
        <Title title='todo list' />
        <div className='row justify-content-center mt-3 text-capitalize'>
          <div className='col-lg-8 col-md-10 col-12'>
            <ul className='list-group'>
              {items.map(item => {
                return (
                  <li className='list-group-item' key={item._id}>
                    <div className='row pt-3'>
                      <div className='col-8'>
                        <h5 className='text-justify'>{item.title}</h5>
                      </div>
                      <div className='col-2'>
                        <button
                          className='btn btn-outline-light'
                          onClick={() => handleedit(item._id)}
                        >
                          <i className='fas fa-pencil-alt text-success' />
                        </button>
                      </div>
                      <div className='col-2'>
                        <button
                          className='btn btn-outline-light'
                          onClick={() => handledelete(item._id)}
                        >
                          <i className='fas fa-trash-alt text-danger' />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className='row justify-content-center mt-3'>
          <div className='col-lg-8 col-md-10 col-12 p-4'>
            <button
              className='btn btn-outline-danger w-100'
              onClick={clearList}
            >
              Clear List
            </button>
          </div>
        </div>
      </div>
    );
  }
}
