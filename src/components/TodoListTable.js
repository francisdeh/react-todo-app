import React from 'react'

export const TodoListTable = ({ todos, onDelete }) => {
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
                    <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.name}</td>
                    <td>{todo.date}</td>
                    <td>
                        <button onClick={ () => onDelete(todo.id)} className="delete-btn">
                            <i className="la la-trash"></i>
                        </button>
                    </td>
                </tr>)
                  }) }
                
                </tbody>
            </table>
        </div>
  )
}
