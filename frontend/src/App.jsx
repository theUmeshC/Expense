import { useState } from 'react';
import ExpenseTracker from './Pages/ExpenseTracker';

function App() {
  const [load, setLoad] = useState([]);
  const handleLoad = (x) => {
    setLoad([x]);
  };
  return (
    <div className="App">
      <ExpenseTracker load={load} handleLoad={handleLoad} />
    </div>
  );
}

export default App;
