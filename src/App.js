import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [num3, setNum3] = useState("");

    const findGreatest = () => {
        const max = Math.max(num1, num2, num3);
        alert("The greatest number is: " + max);
    };

    return (
        <div>
            <h2>Find Greatest Number</h2>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <input
                type="number"
                value={num3}
                onChange={(e) => setNum3(e.target.value)}
            />
            <button onClick={findGreatest}>Find Greatest</button>
        </div>
    );
}

export default App;
