import { useState } from "react"
export default function ExpenseItem({expense, onDelete}) {
    return (
        <>
            <tr>
                <td>{expense.title}</td>
                <td>{expense.amount.toFixed(2)}</td>
                <td><button className="btn btn-danger" onClick={() => onDelete(expense.id)}>Delete</button></td>
            </tr>
        </>
    )
}