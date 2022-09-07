import { useState } from 'react'
import './CostForm.css'

const CostForm = ({ onSaveCostData }) => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value)
  }
  const amountChangeHandler = (event) => {
    setAmount(event.target.value)
  }
  const dateChangeHandler = (event) => {
    setDate(event.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const costData = {
      description,
      amount,
      date: new Date(date),
    }

    onSaveCostData(costData)

    setDescription('')
    setAmount('')
    setDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__controls">
          <label>Name</label>
          <input
            type="text"
            value={description}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className="new-cost__controls">
          <label>Summ</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-actions">
          <button type="submit">Add expense</button>
        </div>
      </div>
    </form>
  )
}

export default CostForm
