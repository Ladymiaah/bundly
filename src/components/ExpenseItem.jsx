import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ title, amount, date }) {
  return (
    <div className="bg-[#2a2a2a] p-4 rounded-[12px] my-4">
      <div className="flex justify-between items-center shadow-lg p-4 rounded-[12px] bg-[#4b4b4b]">
        <ExpenseDate date={date} />

        <div className="flex flex-col-reverse md:flex-row gap-[1rem] items-end md:items-center justify-start flex-1">
          <h2 className="text-[1rem] md:text-[1.25rem] flex-1 text-white mx-4 my-0">
            {title}
          </h2>
          <div className="bg-[#40005d] text-white text-[1rem] md:text-[1.25rem] p-[0.5rem] md:px-[1.5rem] border border-white rounded-[12px] font-bold">
            ${amount}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
