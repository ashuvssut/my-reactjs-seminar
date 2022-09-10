import { useState } from 'react';
import './../../../html-css-js-demo/styles.css';

export function App() {
  // 1. create a variable "count"
  const [count, setCount] = useState(0);

  // 2. update the variable "count"
  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <main>
      <h1>Counter app using React</h1>

      <span>1-step Counter</span>
      <pre>{count}</pre>

      <span>5-step Counter</span>
      <pre>{count*5}</pre>

      <button onClick={increaseCount}>Click to increase the count</button>
    </main>
  );
}

export default App;
