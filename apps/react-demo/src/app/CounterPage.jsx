import { useState } from 'react';
import './../../../html-css-js-demo/styles-counter.css';

export function CounterPage() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <span>
      <main>
        <h1>Counter app using React</h1>

        <span>1-step Counter</span>
        <pre>{count}</pre>

        <span>5-step Counter</span>
        <pre>{count * 5}</pre>

        <button onClick={increaseCount}>Click to increase the count</button>
      </main>
    </span>
  );
}

export default CounterPage;
