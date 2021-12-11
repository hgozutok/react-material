
import { React, useReducer ,useState} from "react";
import { forwardRef, useRef, useImperativeHandle } from "react";

const initialState = { count: 0, lover: "Spring&Hugo" };

function init(initialCount) {
  return initialState;
}


function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "Spring&Hugo":
      return { ...state, lover: "P&H" };
    case "P&H":
      return { ...state, lover: "Spring&Hugo" };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}


function Reducerex(initialCount) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  const [durum, setDurum] = useState("hugo")

  const Increment =  ()=>{

     // console.log(Increment)
   return dispatch({ type: "increment", payload: initialCount })}
    
  
    const   Decrement = () => {
        
       dispatch({ type: "decrement", payload: initialCount })
    }
    
  

  return [ Increment, Decrement, setDurum,
    durum,dispatch,
    (
   

    <div>
      Count: {state.count} lv: {state.lover}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={Decrement}>-</button>
      <button onClick={Increment}>+</button>
      <button onClick={() => dispatch({ type: "Spring&Hugo" })}>
        {state.lover}
      </button>
      <button onClick={() => dispatch({ type: "P&H" })}>ph</button> 
     
    </div>

  )];
  

}

export default Reducerex;
