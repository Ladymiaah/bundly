function ExpenseDate({ date }) {
  const dateObj = new Date(date); // 👈 convert to Date object

  const month = dateObj.toLocaleString("en-US", { month: "long" });
  const day = dateObj.toLocaleString("en-US", { day: "2-digit" });
  const year = dateObj.getFullYear();

  return (
    <div className="flex flex-col w-[5.5rem] h-[5.5rem] border border-[#ececec] bg-[#2a2a2a] text-white rounded-[12px] items-center justify-center">
      <div className="text-[0.75rem] font-bold">{month}</div>
      <div className="text-[0.75rem]">{year}</div>
      <div className="text-[1.5rem] font-bold">{day}</div>
    </div>
  );
}

export default ExpenseDate;
