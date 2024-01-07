import React, { useState } from 'react'

export const TodoForm = ({ onCreate }) => {
  const [taskName, setTaskName] = useState("")

  const submitHandler = event => {
    event.preventDefault()
    onCreate(taskName)
    setTaskName("")
  }

  return (
    <div>
        <form id="task-form" onSubmit={submitHandler}>
            <input type="text" name="task-name" id="task-name-input" placeholder="Enter your task" value={taskName} required autoComplete="off" autoFocus 
            onChange={event => setTaskName(event.target.value)} />
            <button type="submit" id="add-task-btn">
                <i className="la la-plus"></i> Add Task
            </button>
          </form>
        </div>
  )
}
