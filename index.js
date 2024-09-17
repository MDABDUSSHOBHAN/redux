

// this is the login of redix js 


import { createStore } from 'redux';

// constants

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const   RESET = 'RESET'     

const initialState = {

    count: 0
}
const incrementCounterActon = () =>{

    return {

        type: INCREMENT,
    }
}
const decrementCounterActon = () =>{

    return {

        type: DECREMENT,
    }
}

const resetCounterActon = () =>{

    return {

        type: RESET,
    }
}


// creating reducer:--

 const counterReducer = (state = initialState,action) =>{

switch(action.type){
    case INCREMENT:
        return {
            count: state.count+1

        };
     case DECREMENT:
        return {
            count: state.count-1

        }; 
        
       case RESET:
        return {
            count:0,
        } 
     

    default:
        state;    
}

 };

 const store =  createStore(counterReducer);


 store.subscribe(()=>{
    console.log(store.getState());
 })

 store.dispatch(incrementCounterActon())

