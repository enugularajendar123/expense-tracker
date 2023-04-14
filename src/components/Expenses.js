// import './Expenses.css';
import ExcerciseComp from "./ExcerciseItem";

function Expenses(props) {
  return (
    <div className ='expenses'> 
      <ExcerciseComp
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].expDate}
      />
     <ExcerciseComp 
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].expDate}
      />
      <ExcerciseComp
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].expDate}
      />
      <ExcerciseComp 
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].expDate}
      />
    </div>
  );
}
export default Expenses;