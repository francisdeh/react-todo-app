import { useEffect, useState } from 'react';
import './App.css';
import { TodoLogo } from './components/TodoLogo';
import { TodoEmptyView } from './components/TodoEmptyView';
import { TodoListTable } from './components/TodoListTable';
import { TodoForm } from './components/TodoForm';
import { TodoContext } from './shared/todoContext';
import { UserContext } from './shared/userContext';



function App() {
  // todo is an object: id, name, date
  // let todo = {"id": 4, "name": "watch movie", "date": 23rd December, 2023, "isComplete": true/false}
  // let todos = [todo]
  const [todos, setTodos] = useState(() => {
    let todos = localStorage.getItem("todos")
    if (todos) {
      return JSON.parse(todos)
    }

    return []
  })


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  const createHandler = taskName => {

    setTodos(currentTodos => {
      
    let todo = {
      id: currentTodos.length + 1,
      name: taskName,
      isComplete: false,
      date: new Date().toDateString()
    }

    return [...currentTodos, todo]
    })
   }

   const deleteHandler = (todoId) => {
    setTodos(currentTodos => {
      const newTodos = currentTodos.filter(todo => todo.id !== todoId)
      return newTodos
    })
   }

   const completeHandler = (todoId) => {
    let todo = todos.filter(td => todoId === td.id)[0]
    todo["isComplete"] = !todo.isComplete

    // delete it
    deleteHandler(todoId)
    
    setTodos(currentTodos => {
      return [...currentTodos, todo]
    })

    // alert(`Todo with id ${todoId} completed 🔥`)
   }

  return (
    <section>
      <UserContext.Provider value='Jane Doe'>
           <TodoLogo />
      </UserContext.Provider>
      <TodoForm onCreate={createHandler}/>
      { todos.length === 0 ? 
        <TodoEmptyView /> : 
      <TodoContext.Provider value={todos}>
        <TodoListTable 
        onDelete={deleteHandler} 
        onComplete={completeHandler}/>
      </TodoContext.Provider>
        }
      
    </section>
  );
}

export default App;
