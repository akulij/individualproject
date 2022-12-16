import logo from './logo.svg';
import styles from './App.module.css';
import { start } from "./gl.js";

import { createEffect } from 'solid-js';

function App() {
  createEffect(() => start())
  return (
    <div class={styles.App}>
        <input type="range" name="X" onInput={(e) => console.log(e.currentTarget.value)}/>
          <canvas onload={() => start()} id="glcanvas" width="640" height="480">Unsupported</canvas>
    </div>
  );
}

export default App;
