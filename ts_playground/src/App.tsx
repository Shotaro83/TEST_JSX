import { useState, useEffect } from 'react'
import Favbutton from './components/FavButton'
import './App.css'

function App() {
  const [message, setMessage] = useState("hello")
  const nextMessage: string = "goodBye"
  const [page, setPage] = useState(0)
  const note: { name: string, age?: number }[] = [
    { name: "taro" },
    { name: "hanako", age: 24 },
    { name: "takashi", age: 30 }
  ];

  const checkNextData = () => {
    console.log(note.length)
    if (page < note.length - 1) {
      setPage(page + 1)
      console.log(page)
    }
    else {
      setPage(0)
      console.log(page)
    }

  }

  const showPage = () => {
    const showName: string = note[page].name
    const showAge: any = note[page].age

    return (
      <>
        <p>
          {showName}さん
          {showAge}
        </p>
      </>
    )
  }

  const createTime: Date = new Date();
  const deleteTime = new Date();
  deleteTime.setFullYear(createTime.getFullYear() + 1);

  useEffect(() => {
    console.log(`現在時刻${createTime}`)
    console.log(`1年後${deleteTime}`)
  }, [createTime, deleteTime])



  return (
    <>
      <button onClick={() => setMessage(nextMessage)}>
        push it
      </button>
      <button onClick={() => checkNextData()}>
        next
      </button>
      <Favbutton />
      <p>
        {message}
        {showPage()}
      </p>
      <form>
        <input className='text' type='text' />
        <input className='buttom' type='submit' />
      </form>

    </>
  )
}

export default App
