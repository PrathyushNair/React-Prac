export const intialTodosState={
    todos:[
        {
          id: 1,
          title: "Todo 1",
          complete: false,
        },
        {
          id: 2,
          title: "Todo 2",
          complete: false,
        },
      ]
}

export const todosReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return{...state,todos:[...state.todos,action.payload]};
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((el) => el.id !== action.id),
              };
        case 'COMPLETED':
            return {
                ...state,
                todos: state.todos.map((el) => {
                  if (el.id === action.id) {
                    return { ...el, complete: !el.complete };
                  } else {
                    return el;
                  }
                }),
              };
        default:
            return state;
    }
}