
function createTodo(message) {
    return {

    type:'CREATE_TODO',   // keyword unique qui sert a identifier l' action 
    payload: {
        message,
    }
  };    
}

function checkTodo(id) {
  return {
    type: 'CHECK_TODO',
    payload:{ id,
    }

  };
}
export{createTodo, checkTodo}; 