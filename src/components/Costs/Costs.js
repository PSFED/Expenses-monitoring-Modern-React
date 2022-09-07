import { useState } from 'react'
import Card from '../UI/Card'
import './Costs.css'
import CostsFilter from './CostsFilter'
import CostList from './CostList'

function Costs({ costs }) {
  const [selectedYear, setSelectedYear] = useState('2021')

  const yearChangeHandler = (year) => {
    setSelectedYear(year)
  }

  const filteredCosts = costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear
  })

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  )
}

export default Costs
