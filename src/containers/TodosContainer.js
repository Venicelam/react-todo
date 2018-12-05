import React, { Component } from 'react'
import { connect } from "react-redux"
import Todos from '../components/Todos'

const mapStateToProps = state => ({
    todos: state.todos
  });

  const mapDispatchToProps = (dispatch) => ({
    toggleByClick: todo =>{
      var status
      if (todo.status==="completed"){
        status = "active"
      }
      else
        status = "completed"
      fetch("http://localhost:8080/api/todos/" + todo.id, { 
        method: 'PUT',
        headers: new Headers({ 
            'Content-Type': 'application/json'}), 
        mode: 'cors',
        body: JSON.stringify({
          "content": todo.content,
          "status" : status,
          "id": todo.id
        }) 
      })
      .then(res => res.json())
      .then(res => {
        dispatch({
        type: "TOGGLE_TODO",
        payload: {
            id:res.id, 
            content:res.content,
            status:res.status       
        }
      })
    })
    }
  })
export default connect(mapStateToProps, mapDispatchToProps)(Todos);