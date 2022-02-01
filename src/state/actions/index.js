function createTodo(message) {
    return {

    type:'CREATE TODO',   // keyword unique qui sert a identifier l' action 
    payload: {
        message
    },
  };    
}
