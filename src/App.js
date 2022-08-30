import React, { useState } from "react";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Filters/ExpensesFilter";
import ExpensesList from "./components/Filters/ExpensesList";
import ExpensesChart from "./components/Expenses/ExpesesChart";

const DUMMY_EXPENSES = [
  {
    id: 'el1',
    title: 'Toilet paper',
    amount: 94.65,
    date: new Date(2021, 7, 14)
  },
  {
    id: 'el2',
    title: 'Car Insurance',
    amount: 284.98,
    date: new Date(2022, 2, 14)
  },
  {
    id: 'el3',
    title: 'New Tv',
    amount: 494.65,
    date: new Date(2022, 3, 24)
  },
  {
    id: 'el4',
    title: 'food',
    amount: 194.65,
    date: new Date(2022, 4, 16)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  const [filteredYear, setFilteredYear] = useState('2022');
  const choosedYear = (year) => {
    setFilteredYear(year);
  }

  const filteredItems = expenses.filter(expense => {
    return expense.date.getFullYear() == filteredYear;
  });

  // Variable that store content for expenses content (conditional content)
  // let expensesContent = <p>No Items found</p>;
  // if (filteredItems.length> 0) {
  //   expensesContent = filteredItems.map(expense => 
  //     <ExpenseItem  
  //     key= {expense.id}
  //     title={expense.title} 
  //     amount={expense.amount} 
  //     date={expense.date} />
  //   )
  // }

  return (
    
      <Card className="expenses">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <ExpensesChart expenses={filteredItems} />
        <ExpensesFilter selected={filteredYear} onYearChange={choosedYear}/>
        <ExpensesList items={filteredItems}/>
        
        {/* { expensesContent } */}

        {/* {filteredItems.length == 0 ? <p>No Items found</p> : 
          filteredItems.map(expense => 
            <ExpenseItem  
            key= {expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date} />
          )
        } */}
      
     </Card>
  );

}

export default App;
