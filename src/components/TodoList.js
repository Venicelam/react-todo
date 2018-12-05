import React, { Component } from 'react'
import TodoInput from '../containers/TodoInputContainers'
import Todos from './Todos'
import { connect } from "react-redux";

export default class TodoList extends Component {
  //state = {todos: []}
  // addNewTodo = newTodo => {
  //    this.state.todos.push(newTodo)
  //    this.setState({todos: this.state.todos})
  //   this.props.dispatch({
  //     type: "ADD_NEW_TODO",
  //     payload: newTodo
  //   });
  // }
  render() {
    return (
      <div>
        {/* <TodoInput onNewTodoAdded={this.addNewTodo}/>
        <Todos todos={this.props.todos}/> */}
        <TodoInput/>
        <Todos/>
      </div>
    )
  }
}
// const mapStateToProps = state => ({
//   todos: state.todos
// });

// export default connect(mapStateToProps)(TodoList);