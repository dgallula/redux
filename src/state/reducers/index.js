import initialeState from "./initialeState";

const reducersMap= {
    'CREATE TODO': (state,payload)=>{
        
    },

    // return le state avec un nouveau todo ajoute a l interieur 


    leaveStateUnchanged: state=> state,
};

const reducers = function(state= initialeState ,action ) {
    const reducer = reducersMap[action.type] || reducersMap.leaveStateUnchanged ;
    const newState= reducer(state,action.payload);
    return newState;

}

export default reducers;