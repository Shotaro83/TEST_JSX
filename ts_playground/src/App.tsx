import { useEffect, ChangeEvent, FormEvent } from 'react'
import { todoStore } from './store/TodoStore';
import { observer } from 'mobx-react';
import './App.css'

function App() {


  const createTime: Date = new Date();
  const deleteTime = new Date();
  deleteTime.setFullYear(createTime.getFullYear() + 1);

  useEffect(() => {
    console.log(`現在時刻${createTime}`)
    console.log(`1年後${deleteTime}`)
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    todoStore.inputValue = e.target.value;
  }


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    todoStore.addTodo(todoStore.inputValue);
    todoStore.inputValue = "";
  };

  const handleEdit = (id: string, inputValue: string) => {
    todoStore.handleEdit(id, inputValue)
  }

  const handleDelete = (id: string) => {
    todoStore.handleDelete(id)
  }

  const handleChecked = (id: string) => {
    todoStore.handleChecked(id)
  }

  const handleSaveToFirestore = async () => {
    await todoStore.saveTodosToFirestore();
    alert('Firestoreに保存されたわ');
  };

  const handleDeleteOldTodos = async () => {
    await todoStore.deleteOldTodos().then(() => console.log("古いTodoを削除したわ"));
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className='text'
          type='text'
          value={todoStore.inputValue}
          onChange={(e) => handleChange(e)}
        />
        <input
          className='button'
          type='submit'
          value={"追加"}
        />
      </form>
      <ul>
        {todoStore.todos.map((todo) => (
          <li key={todo.id}>
            <input
              type='text'
              value={todo.inputValue}
              onChange={(e) => handleEdit(todo.id, e.target.value)}
              disabled={todo.checked}
            />
            <label>
              <input
                type='checkbox'
                onChange={() => handleChecked(todo.id)}
              />
              完了
            </label>
            <input
              type="button"
              value={"削除"}
              onClick={() => handleDelete(todo.id)}
              disabled={!todo.checked}
            />
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleSaveToFirestore}>
        Firestoreに保存する
      </button>
      <button type="button" onClick={handleDeleteOldTodos}>
        Danger!!! データ削除
      </button>

    </>
  )
}

export default observer(App);

