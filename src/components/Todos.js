import React, { Component } from 'react'
import { connect } from "react-redux";


export default class Todos extends Component {
  render() {
    //const {todos} = this.props
    return (
      <div>
        {this.props.todos.map((todo, i) => <li key={i}>{todo.content}</li>)}
      </div>
    )
  }
}
// const mapStateToProps = state => ({
//   todos: state.todos
// });
// export default connect(mapStateToProps)(Todos);