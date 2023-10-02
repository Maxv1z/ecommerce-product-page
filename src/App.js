import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';



function App() {
  const [sneakerAmount, setSneakerAmount] = useState(0);
  const [sneakerAmountFinal, setSneakerAmountFinal] = useState(0);

  const addToCart = () => {
    setSneakerAmount(sneakerAmount + 1);
  };

  const removeToCart = () => {
    if (sneakerAmount > 0) {
      setSneakerAmount(sneakerAmount - 1);
    }
  };

  const handleAddToCart = () => {
    setSneakerAmountFinal(sneakerAmount);
    setSneakerAmount(0);
  };

  const removeFromCart = () => {
    setSneakerAmountFinal(0);
  }

  return (
    <body>
      <Navbar sneakerAmountFinal={sneakerAmountFinal}
        removeFromCart={removeFromCart} />
      <Main handleAddToCart={handleAddToCart}
        sneakerAmount={sneakerAmount}
        addToCart={addToCart}
        removeToCart={removeToCart}
      />
    </body >
  );
}

export default App;
