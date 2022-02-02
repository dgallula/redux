import {connect} from 'react-redux';
import * as ActionCreator from './state/actions';
 import { bindActionCreators } from 'redux';
import React from 'react';
import TodoItem from './TodoItem';
const TodoList = (props) => {
    const {todos,actions} = props;

    console,log(props)
  return ( 
  
          <div>
              {todos.map((todo)=> (
                  <TodoItem 
                  onCheck={()=>{
                      actions.checkTodo(todo.id);
                  }}
                  checked = {todo.checked} 
                  message={todo.message}/>
              )
   )}

          </div>
       );
      }  


export default connect(
    // cette premiere fonction sert a determiner quls sont les donnes a recuperer dans le state global et  a injecter dans le composant 
    (state)=> ({
        todos:state.todo,
        
}),
// cette deuxieme fonction sert a injecter les actions dans le composant  

    (Dispatch)=> ({
         actions: bindActionCreators(ActionCreator,Dispatch),
    })  
         )(TodoList);
