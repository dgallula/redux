import initialeState from "./initialeState";

const reducersMap= {
    'CREATE_TODO': (state,payload)=>{
        
    },

    'CHECk_TODO': (state,payload)=>{
       const newState= {
       ...state,
       todo:[],
       };

       console.log('reducer');

       state.todo.forEach(todo => {
           if (todo.id===payload.id) {
               (todo.checked=!todo.checked);
           }
           newState.todo.push(todo);

           
       });

       


        return newState;
        
    },

    // return le state avec un nouveau todo ajoute a l interieur 


    leaveStateUnchanged:(state)=> state,
};

const reducers = function(state= initialeState ,action ) {
    const reducer = reducersMap[action.type] || reducersMap.leaveStateUnchanged ;
    const newState= reducer(state,action.payload);
    return newState;

}

export default reducers;