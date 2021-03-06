import React, { Component } from 'react'
import TodoInput from '../containers/TodoInputContainer'
import Todos from '../containers/TodosContainer'
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
  boxState = (event) => {
    this.props.dispatch({
      type: "SET_FILTER",
      payload: !this.props.isOnlyActive
    })
   }
  render() {
    return (
      <div>
        {/* <TodoInput onNewTodoAdded={this.addNewTodo}/>
        <Todos todos={this.props.todos}/> */}
        <TodoInput/>
        <Todos/>
        <label>
        <input type = "checkbox" onChange={this.boxState}/> only active
        </label>
      </div>
    )
  }
}
// const mapStateToProps = state => ({
//   todos: state.todos
// });

// export default connect(mapStateToProps)(TodoList);