import { useState, useEffect } from "react"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses')
    return savedExpenses ? JSON.parse(savedExpenses) : []
  })  

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0)

  useEffect(() => {
     localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  function addExpense(expense) {
    setExpenses((prev) => [...prev, expense])
  }

  function deleteExpense(id) {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id))

  }

  return (
    <>
      <ExpenseForm onAddExpense = {addExpense}/>
      <ExpenseList expenses={expenses} totalExpenses={totalExpenses} onDelete={deleteExpense}/>
    </>
  )
}

export default App
