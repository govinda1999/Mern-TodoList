import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from './component/TodoForm';
import Todo from './component/Todo';
import axios from 'axios';
export default class App extends Component {
  state = {
    items: [],
    edit: false,
    text: ''
  };
  handleadd = () => {
    axios
      .post('/todo', { title: this.state.text })
      .then(docs => {
        this.getdata();
        this.setState({
          text: '',
          edit: false
        });
      })
      .catch(error => console.log('Error ', error));
  };

  getdata = () => {
    axios
      .get('/todo')
      .then(data => {
        this.setState({ items: data.data.data });
      })
      .catch(error => console.log('Error ', error));
  };

  handlechange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handledelete = id => {
    axios
      .delete(`/todo/${id}`)
      .then(docs => {
        this.getdata();
      })
      .catch(error => console.log('Error ', error));
  };

  clearList = () => {
    axios
      .delete('/todo')
      .then(docs => {
        this.getdata();
      })
      .catch(error => console.log('Error ', error));
  };

  handleedit = id => {
    axios
      .get(`/todo/${id}`)
      .then(docs => {
        const title = docs.data[0].title;
        this.handledelete(id);
        this.setState({
          text: title,
          edit: true
        });
      })
      .catch(error => console.log('Error ', error));
  };
  componentDidMount = () => {
    this.getdata();
  };
  render() {
    return (
      <div className='container'>
        <TodoForm
          handleadd={this.handleadd}
          edit={this.state.edit}
          text={this.state.text}
          handlechange={this.handlechange}
        />
        <Todo
          items={this.state.items}
          handledelete={this.handledelete}
          clearList={this.clearList}
          handleedit={this.handleedit}
        />
      </div>
    );
  }
}
