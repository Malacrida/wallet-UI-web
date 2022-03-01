import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  //const dataPointValue = props.dataPoints.map((dp) => dp.value);
  const max = Math.max(...props.dataPoints.map((dp) => dp.value));

  return (
    <div className="chart">
      {props.dataPoints.map((el) => (
        <ChartBar
          key={el.label}
          value={el.value}
          maxValue={max}
          label={el.label}
        />
      ))}
    </div>
  );
};

export default Chart;
