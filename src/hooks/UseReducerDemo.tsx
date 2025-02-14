import {useReducer} from 'react'

interface State01 {
  type: "STATE01",
}
interface State02 {
  type: "STATE02",
}
type State = State01 | State02;


interface Action01 {
  type: "ACTION01",
}
interface Action02 {
  type: "ACTION02",
}
type Action = Action01 | Action02;

export function UseReducerDemo() {

  const [state, dispatch] = useReducer(reducer, {type: "STATE01"});

  return (
    <>
      <h2>Curent state is</h2>
      <div>{state.type}</div>
      <button onClick={() => dispatch({type: "ACTION02"})}>Go to STATE02</button>
      <button onClick={() => dispatch({type: "ACTION01"})}>Go to STATE01</button>
    </>
  );
}

function reducer(state: State, action: Action): State {
  switch (state.type) {
    case "STATE01":
      switch (action.type) {
        case "ACTION01":
          console.log("We are already in STATE01");
          return state
        case "ACTION02":
          console.log("The state has changed to STATE02");
          return {type: "STATE02"};
        default:
          return state;
      }
    case "STATE02":
      switch (action.type) {
        case "ACTION01":
          console.log("The state has changed to STATE01");
          return {type: "STATE01"};
        case "ACTION02":
          console.log("We are already in STATE02");
          return state;
        default:
          return state;
      }
  }

}