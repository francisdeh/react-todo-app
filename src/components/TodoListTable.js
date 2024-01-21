import React, { useContext } from 'react'
import { TodoContext } from '../shared/todoContext'

export const TodoListTable = ({ onDelete, onComplete }) => {
  let todos = useContext(TodoContext)

  return (
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
                  { todos.map(todo => {
                    return (
                    <tr className={todo.isComplete ? 'is-completed' : ''} key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.name}</td>
                    <td>{todo.date}</td>
                    <td>
                        <button onClick={ () => onDelete(todo.id)} className="delete-btn">
                            <i className="la la-trash"></i>
                        </button>
                        <button onClick={ () => onComplete(todo.id)} className="complete-btn">
                            <i className="la la-check-circle"></i>
                        </button>
                    </td>
                </tr>)
                  }) }
                
                </tbody>
            </table>
        </div>
  )
}
