import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {
  const items = props.items.map((obj, i) => (
    <ExpenseItem
      key={i}
      id={obj.id}
      title={obj.title}
      amount={obj.amount}
      date={obj.date}
    />
  ));
  return (
    // Card is a wrapper
    <Card className="expenses">{items}</Card>
  );
}

export default Expenses;
