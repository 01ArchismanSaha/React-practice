import './ExpenseItem.css';

export function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <div>{props.date.toDateString()}</div>
            <div>{props.location}</div>
            <div className='expense-item__description'></div>
            <div>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;