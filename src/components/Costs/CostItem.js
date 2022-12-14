import './CostItem.css'
import CostDate from './CostDate'
import Card from '../UI/Card'

function CostItem({ date, description, amount }) {
  return (
    <li>
      <Card className="cost-item">
        <CostDate date={date} />
        <div className="cost-item__descriotion">
          <h2>{description}</h2>
          <div className="cost-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  )
}

export default CostItem
