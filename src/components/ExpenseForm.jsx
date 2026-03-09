import { useState, useEffect, useRef } from 'react'
export default function ExpenseForm({onAddExpense}) {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [error, setError] = useState('')
    const refTitle = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title === '' || amount === '') {
            setError('Please fill all the fields')
            return
        }
        const newExpense = {
            id: Date.now(),
            title,
            amount: parseFloat(amount)
        };

        onAddExpense(newExpense);
        setTitle('')
        setAmount('')
        setError('')
        refTitle.current.focus()
    }

    return (
        <>
         <div className="container bg-light p-5 mt-2">
            <h1 className="text-center">Expense Manage App</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="row">
                        <p className='text-danger'>{error}</p>
                        <div className="col-lg-4">
                            <label htmlFor="title">Expense Title</label>
                            <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} ref={refTitle} />
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="amount">Amount</label>
                            <input type="number" className="form-control" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                        </div>
                        <div className="col-lg-4">
                            <button type="submit" className="btn btn-primary mt-4">Add Expense</button>
                        </div>
                    </div>
                </div>
            </form>
         </div>
        </>
    )
}