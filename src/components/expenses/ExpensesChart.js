import Chart from "../chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoint = [
    { label: "Gen", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "Mag", value: 0 },
    { label: "Giu", value: 0 },
    { label: "Lug", value: 0 },
    { label: "Ago", value: 0 },
    { label: "Set", value: 0 },
    { label: "Ott", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dic", value: 0 },
  ];

  for (const expense of props.expenses) {
    //Mesi gen = 0, ...
    const date = new Date(expense.date);
    const expenseMonth = date.getMonth();
    chartDataPoint[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoint} />;
};

export default ExpensesChart;
