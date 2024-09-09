import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from 'uuid';
import "firebase/firestore"
import { db,}from "../firebase/firebase";
import { Timestamp, doc, writeBatch,  collection, getDocs, query, deleteDoc, getFirestore } from "firebase/firestore";


type Todo = {
  inputValue: string;
  id: string;
  checked: boolean;
  createTime: Date;
};

class TodoStore {
  todos: Todo[] = [];
  inputValue = "";

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(inputValue: string) {
    const newTodo: Todo = {
      inputValue: inputValue,
      id: uuidv4(),
      checked: false,
      createTime: new Date()
    };
    this.todos = [newTodo, ...this.todos];
  }

  handleEdit(id: string, inputValue: string) {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, inputValue };
      }
      return todo;
    });
  }

  handleChecked(id: string) {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        todo.checked = !todo.checked
        console.log(`${todo.inputValue}is${todo.checked}`)
      }
      return todo;
    });
  }

  handleDelete(id: string) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  async saveTodosToFirestore() {
    const batch = writeBatch(db);

    this.todos.forEach((todo) => {
      const docRef = doc(db, "todos", todo.id);
      batch.set(docRef, todo);
    });

    await batch.commit();
  }

  async deleteOldTodos() {
    const db = getFirestore();
    const todosCollection = collection(db, "todos");
    const q = query(todosCollection);
    const snapshot = await getDocs(q);
    const cutoffDate = new Date("2024-01-20");
    console.log(snapshot)
  
    snapshot.docs.forEach(async (docSnapshot) => {
      const todo = docSnapshot.data();
      const createTime = new Date(todo.createTime.seconds * 1000); // FirestoreのTimestampをDateに変換
  
      if (createTime < cutoffDate) {
        await deleteDoc(doc(db, "todos", docSnapshot.id));
      }
    });
  }
  

}

export const todoStore = new TodoStore();
