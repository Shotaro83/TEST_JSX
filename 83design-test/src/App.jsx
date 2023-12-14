import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counterSlice";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("")
  const RDcount = useSelector((state) => state.counter.count);

  const showMessage = () =>{
    if(message == ""){
      setMessage("Hello 83Design")
    }
    else{
      setMessage("")
    }
  }

  return (
    <>
      <button onClick={()=>showMessage()}>
        push!
      </button>
      <input type="date" value="2017-06-01" style={{fontFamily:"sans-serif", border:"none"}}/>
      <p>
        {message}
        {console.log(RDcount)}
      </p>
    </>
  )
}

export default App
