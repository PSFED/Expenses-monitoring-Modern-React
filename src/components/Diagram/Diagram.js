import './Diagram.css'
import DiagramBar from './DiagramBar'

const Diagram = ({ dataSets }) => {
  const dataSetsValues = dataSets.map((el) => el.value)

  const maxMonthCosts = Math.max(...dataSetsValues)

  return (
    <div className="diagram">
      {dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
        />
      ))}
    </div>
  )
}

export default Diagram
