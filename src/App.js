import { useEffect, useState } from 'react';
import './App.css';
import { TodoLogo } from './components/TodoLogo';
import { TodoEmptyView } from './components/TodoEmptyView';
import { TodoListTable } from './components/TodoListTable';
import { TodoForm } from './components/TodoForm';



function App() {
  // todo is an object: id, name, date
  // let todo = {"id": 4, "name": "watch movie", "date": 23rd December, 2023}
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
      date: new Date().toDateString()
    }

    return [...currentTodos, todo]
    })
   }

   const deleteHandler = (todoId) => {
    setTodos(currentTodos => {
      const newTodos = currentTodos.filter(todo => todo.id != todoId)
      return newTodos
    })
   }

  return (
    <section>
        <TodoLogo/>
        <TodoForm onCreate={createHandler}/>
        { todos.length == 0 ? 
        <TodoEmptyView /> : <TodoListTable
        todos={todos} 
        onDelete={deleteHandler}
        />}
    </section>
  );
}

export default App;
