import react from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {

    const onSaveExpenseDataHandler = (enterExpenseDate) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enterExpenseDate 
        }
        props.onAddExpense(expenseData);
    }


    return <div className="new-expense">

        {/*
         onSaveExpenseData is a propd that we use to pas data from children to parent 
         The prop point to a function that we execute on the child component
        */}
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>
}

export default NewExpense;