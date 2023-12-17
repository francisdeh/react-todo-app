import React from 'react'

export const TodoListTable = () => {
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
                    <tr>
                        <td>1</td>
                        <td>Cook breakfast</td>
                        <td>12th June, 2023</td>
                        <td>
                            <button className="delete-btn">
                                <i className="la la-trash"></i>
                            </button>
                        </td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Watch Movie</td>
                        <td>12th June, 2023</td>
                        <td>
                            <button className="delete-btn">
                                <i className="la la-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  )
}
