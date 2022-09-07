import './CostList.css'
import CostItem from './CostItem'

const CostList = ({ costs }) => {
  if (costs.length === 0) {
    return <h2 className="cost-list__fallback">No expenses this year</h2>
  }

  return (
    <ul className="cost-list">
      {costs.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      ))}
    </ul>
  )
}

export default CostList
