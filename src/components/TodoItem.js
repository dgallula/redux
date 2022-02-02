import React from 'react';

const TodoItem = (props) => {
  const {message,checked,onChecked } = props;
  return(
     <div>
          <input 
          onchange={onChecked}
          type='checkbox'
          checked={checked}/>
          <span>{message}</span>
     </div>
     )
};

export default TodoItem;
