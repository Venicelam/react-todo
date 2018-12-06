import TodoList from '../components/TodoList';
import React, { Component } from 'react'
import { connect } from "react-redux"

 const mapStateToProps = state => ({
  isOnlyActive: state.isOnlyActive,
  todos: state.todos.filter(_ => {
    return state.isOnlyActive ? _.status === 'active' : true
  })
})
 export default connect(mapStateToProps)(TodoList)