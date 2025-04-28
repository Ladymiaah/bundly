import ExpenseItem from "./ExpenseItem";

function Expenses({ expenses }) {
  return (
    <div className="mt-8 space-y-4 bg-[#2a2a2a] rounded-[12px] p-4">
      {expenses.length === 0 ? (
        <p className="text-center text-gray-400">No expenses yet. Add one!</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </div>
  );
}

export default Expenses;
