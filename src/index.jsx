/* @refresh reload */
import { render } from 'solid-js/web';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

import './index.css';
import App from './App';

// render(() => <App />, document.getElementById('root'));

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}


const root = createRoot(document.getElementById("root"))
root.render(<App />)
// root.render(<Counter />)
