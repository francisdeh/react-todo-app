import './App.css';
import { TodoLogo } from './components/TodoLogo';
import { TodoForm } from './components/TodoForm';
import { TodoListTable } from './components/TodoListTable';
import { TodoEmptyView } from './components/TodoEmptyView';
import { useState } from 'react';

//props

function App() {
  // state to keep track of all todos
  // [{id: 1, name: 'eat gob3', 'date': '12th Dec, 2023'}]
  const [todos, setTodo] = useState([])

  const handleAddTodo = (todo) => {
    console.log("handling add todo", todo)
    const newTodos = [...todos, todo]
    setTodo(newTodos)
  }

  return (
    <section>
        <TodoLogo />
        <TodoForm addTodo={handleAddTodo} />
        <TodoListTable />
        <TodoEmptyView />
    </section>
  );
}

export default App;
