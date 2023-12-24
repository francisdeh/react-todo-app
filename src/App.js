import { useState } from 'react';
import './App.css';



function App() {
  // todo is an object: id, name, date
  // let todo = {"id": 4, "name": "watch movie", "date": 23rd December, 2023}
  // let todos = [todo]
  const [todos, setTodos] = useState([])

  const [taskName, setTaskName] = useState("")

   const submitEventHandler = event => {
    event.preventDefault()

    setTodos(currentTodos => {
      
    let todo = {
      id: currentTodos.length + 1,
      name: taskName,
      date: new Date().toDateString()
    }

    return [...currentTodos, todo]
    })

    setTaskName("")
   }

   const deleteHandler = (todoId) => {
    console.log(todoId)
    setTodos(currentTodos => {
      const newTodos = currentTodos.filter(todo => todo.id != todoId)
      return newTodos
    })
   }

  return (
    <section>
        <img id="logo" src="todo-logo.png" width="150" height="150" />
        <div>
            <form id="task-form" onSubmit={submitEventHandler}>
            <input type="text" name="task-name" id="task-name-input" placeholder="Enter your task" value={taskName} required autoComplete="off" autoFocus 
            onChange={event => setTaskName(event.target.value)} />
            <button type="submit" id="add-task-btn">
                <i className="la la-plus"></i> Add Task
            </button>
            </form>
        </div>
        { todos.length != 0 && 
        <div className="table-div">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                  { todos.map((todo, index) => {
                    return (
                    <tr key={index}>
                    <td>{todo.id}</td>
                    <td>{todo.name}</td>
                    <td>{todo.date}</td>
                    <td>
                        <button onClick={ () => deleteHandler(todo.id)} className="delete-btn">
                            <i className="la la-trash"></i>
                        </button>
                    </td>
                </tr>)
                  }) }
                   
                </tbody>
            </table>
        </div>
        }

        { todos.length == 0 && 
        <img className="empty-view" src="https://img.freepik.com/free-vector/pandas-concept-illustration_114360-7484.jpg?w=740&t=st=1686770802~exp=1686771402~hmac=719874c25a90d68af3260a4d08ee9de2f01774d3b77efa7a0e043a8ed8e83514" alt="Empy Task list" title="Empty tasks" />
      }
    </section>
  );
}

export default App;
