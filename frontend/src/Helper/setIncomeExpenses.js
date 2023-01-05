const setIncomeExpense = (income, type) => {
  const lsIncome = JSON.parse(localStorage.getItem(type));
  if (!lsIncome) {
    localStorage.setItem(type, JSON.stringify(income));
  } else {
    const totalIncome = Number(lsIncome) + Number(income);
    localStorage.setItem(type, JSON.stringify(totalIncome));
  }
};

export default setIncomeExpense;
