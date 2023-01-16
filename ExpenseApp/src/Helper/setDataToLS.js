const setLocalStorage = (userData, handleLoad) => {
  const lsExpenses = JSON.parse(localStorage.getItem('transaction'));
  const lsBalance = JSON.parse(localStorage.getItem('balance'));

  if (!lsExpenses && !lsBalance) {
    localStorage.setItem('transaction', JSON.stringify([userData]));
    localStorage.setItem('balance', JSON.stringify(userData.amount));
  } else {
    const balance = Number(lsBalance) + Number(userData.amount);
    lsExpenses.push(userData);
    localStorage.setItem('transaction', JSON.stringify(lsExpenses));
    localStorage.setItem('balance', JSON.stringify(balance));
  }

  handleLoad(userData);
};

export default setLocalStorage;
