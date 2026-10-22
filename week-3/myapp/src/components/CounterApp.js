import { useState } from "react";
function CounterApp() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center", border: "1px solid #ccc", margin: "20px", padding: "15px" }}>
      <h2>Counter App</h2>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)} style={{margin: "5px", padding: "8px 15px"}}>+ Increment</button>
      <button onClick={() => setCount(count - 1)} style={{margin: "5px", padding: "8px 15px"}}>- Decrement</button>
    </div>
  );
}
export default CounterApp;
