const createStore  = require('redux').createStore;


const initialState = {

    result:1,
    previousValues:[]
}

const reducer = (state=initialState,action)=>{
 
    switch(action.type){

        case "ADD" :
        state.result = state.result + action.payload;
        break;
        case "divide" :
        state = state / action.payload;
        break;
        
    }

    return state;

}


const store = createStore(reducer);

store.subscribe(()=>{

    console.log("hello",store.getState());
})


store.dispatch({
    type:"ADD",
    payload:10
})

store.dispatch({
    type:"ADD",
    payload:11
})


