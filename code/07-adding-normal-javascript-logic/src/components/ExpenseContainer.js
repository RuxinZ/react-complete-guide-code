import ExpenseItem from './ExpenseItem';
import './ExpenseCointainer.css';
export default function ExpenseContainer({ expenses }) {
  const items = expenses.map((obj, i) => (
    <ExpenseItem
      key={i}
      id={obj.id}
      title={obj.title}
      amount={obj.amount}
      date={obj.date}
    />
  ));
  return <div className="expenses">{items}</div>;
}
