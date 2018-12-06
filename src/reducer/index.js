const initialState ={
    todos: [],
    isOnlyActive: false
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
          case "SET_FILTER":
          return{...state, isOnlyActive: payload}
    default:
        return state;
    }
    
    }
