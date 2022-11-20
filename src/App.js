
import { useSelector,useDispatch } from 'react-redux'
import './App.css';
import {increment,decrement} from './toolkit/CounterSlice'

function App() {
  const counter= useSelector(state=>state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>{counter}</div>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;
