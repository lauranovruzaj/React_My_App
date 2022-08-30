import react, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [isSubmited, setIsSubmited] = useState(false);

    // Multi state approach
    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');

    // -------- One state approach ---------
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)

         // -------- One state approach ---------
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        // ---- We should use this when depemding on orevious state
        // setUserInput((prevState)=> {
        //     return {...prevState, enteredTitle: event.target.value}
        // })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    }

    const submitHandler = (event) => {
        // Stop page reload (default behauvre of submit)
        event.preventDefault();

        // Object that hold the data
        const expenseData =  {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        } 
 
        // We use this prop to execute the eventhenfler function from the parent component
        props.onSaveExpenseData(expenseData);
       
        // Clear input after form is submited
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('')
        setIsSubmited(true);
    }


    if (isSubmited == true) {
        return <button type="button" onClick={() => setIsSubmited(false)}>Add New Expensive</button>
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' 
                    value={enteredTitle} 
                    onChange={titleChangeHandler}
                    />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" 
                    value= {enteredAmount}
                    onChange={amountChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2030-12-30" 
                    value = {enteredDate}
                    onChange={dateChangeHandler}/>
                </div>
                
                <div className="new-expense__actions">
                    <button type="submit">Add Expensive</button>
                    <button type="button" onClick={() => setIsSubmited(true)}>Cancle</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;