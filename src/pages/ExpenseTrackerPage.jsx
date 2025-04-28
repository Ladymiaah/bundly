import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import ExpenseForm from "../components/ExpenseForm";
import Expenses from "../components/Expenses";

export default function ExpenseTrackerPage() {
  const [expenses, setExpenses] = useState([]);

  // Fetch expenses from Supabase when page loads
  useEffect(() => {
    async function fetchExpenses() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        console.log("No user logged in");
        return;
      }

      const { data, error } = await supabase
        .from("expenses")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false });

      if (error) {
        console.error("Error fetching expenses:", error);
      } else {
        setExpenses(data);
      }
    }

    fetchExpenses();
  }, []);

  // Add a new expense and save it in Supabase
  async function addExpenseHandler(expense) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      console.log("No user logged in");
      return;
    }

    const { data, error } = await supabase
      .from("expenses")
      .insert([
        {
          title: expense.title,
          amount: expense.amount,
          date: expense.date,
          user_id: user.id,
        },
      ])
      .select(); // 👈 important: to return the inserted data

    if (error) {
      console.error("Error adding expense:", error);
    } else {
      setExpenses((prevExpenses) => [data[0], ...prevExpenses]); // Add new expense to top
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}
