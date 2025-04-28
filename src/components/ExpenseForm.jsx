import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ExpenseForm({ onAddExpense }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    const newExpense = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    onAddExpense(newExpense);

    // Clear inputs
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form
      onSubmit={submitHandler}
      className="bg-gray-800 p-6 rounded-lg space-y-4"
    >
      <div className="flex flex-col">
        <label className="text-white mb-1">Title</label>
        <input
          type="text"
          className="p-2 rounded bg-gray-700 text-white"
          value={enteredTitle}
          onChange={(e) => setEnteredTitle(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-white mb-1">Amount</label>
        <input
          type="number"
          className="p-2 rounded bg-gray-700 text-white"
          value={enteredAmount}
          onChange={(e) => setEnteredAmount(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-white mb-1">Date</label>
        <input
          type="date"
          className="p-2 rounded bg-gray-700 text-white"
          value={enteredDate}
          onChange={(e) => setEnteredDate(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded"
      >
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
