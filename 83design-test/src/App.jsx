import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, dicrementByAmount } from "./redux/counterSlice";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const [dicreamentAmount, setDicreamentAmount] = useState("2")
  const incre = () => dispatch(increment())
  const decre = () => dispatch(decrement())
  const increBy = () => dispatch(incrementByAmount(Number(incrementAmount)))
  const dicreBy = () => dispatch(dicrementByAmount(Number(dicreamentAmount)))

 

  return (
    <>
      <h1>Count: {count}</h1>
      <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button onClick={incre}>＋</button>
      <button onClick={decre}>ー</button>
      <button onClick={dicreBy}>追加</button>
    </>
  )
}

export default App
