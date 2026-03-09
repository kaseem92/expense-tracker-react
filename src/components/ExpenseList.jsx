import { useState } from "react"
import ExpenseItem from "./ExpenseItem"
export default function ExpenseForm({expenses, totalExpenses, onDelete}) {
    return (
        <>
         <div className="container bg-light p-4 mt-2">
            <div className="row">
                <div className="col-lg-6">
                    <h2>Expense List</h2>
                </div>
                <div className="col-lg-6">
                    <h2>Total Expenses : {totalExpenses.toFixed(2)}</h2>
                </div>
                <div className="col-lg-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.length === 0 && <tr>
                                <td colSpan={3} className="text-center">No Expenses Found</td>
                                </tr>}
                            {expenses.map((expense) => (
                                <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
         </div>
        </>
    )
}