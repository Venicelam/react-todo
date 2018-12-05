const initialState ={
    todos: []
};
export default (state = initialState, {type, payload}) => {
    switch (type){
        case "ADD_NEW_TODO":
        return {todos: state.todos.concat(payload)};

        case "TOGGLE_TODO":{
            var result = state.todos.map(todo => {
              if (todo.id === payload.id)
                return payload
              else
                return todo
            })
            return {todos: result}
          }
    default:
        return state;
    }
    
    }
