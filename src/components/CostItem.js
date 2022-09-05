import './CostItem.css'
import CostDate from './CostDate'

function CostItem({ date, description, amount }) {
  return (
    <div className="cost-item">
      <CostDate date={date} />
      <div className="cost-item__descriotion">
        <h2>{description}</h2>
        <div className="cost-item__price">${amount}</div>
      </div>
    </div>
  )
}

export default CostItem
