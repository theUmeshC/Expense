import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import ExpenseTracker from './Pages/ExpenseTracker';

function App() {
  const [load, setLoad] = useState([]);

  const handleLoad = (x) => {
    setLoad([x]);
  };

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ExpenseTracker load={load} handleLoad={handleLoad} />
    </div>
  );
}

export default App;
