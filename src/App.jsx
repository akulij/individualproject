import logo from './logo.svg';
import styles from './App.module.css';
import { start, updateMatrix } from "./gl.js";
import { MatrixBlock } from "./Matrix.jsx";

// import { createEffect, createSignal, createRenderEffect } from 'solid-js';
import React, { useState, useEffect } from 'react';


function App() {
  useEffect(() => start())
    let rotationTemplate = [
        ["cos(x)", "-sin(x)", 0],
        ["sin(x)", "cos(x)", 0],
        [0, 0, 1],
    ]
    let moveTemplate = [
        [1, 0, "x"],
        [0, 1, "y"],
        [0, 0, 1],
    ]
    let scaleTemplate = [
        ["x", 0, 0],
        [0, "y", 0],
        [0, 0, 1],
    ]
    const inputProperty = {
        rotate: {
            max: Math.PI * 2,
            min: - Math.PI * 2,
            default: 0,
            y: 0,
            calculateMatrix: (x) => [
                [Math.cos(x), -Math.sin(x), 0],
                [Math.sin(x), Math.cos(x), 0],
                [0, 0, 1],
            ],
        },
        move: {
            max: 0.775,
            min: - 0.775,
            default: 0,
            y: 0,
            calculateMatrix: (x, y) => [
                [1, 0, x],
                [0, 1, y],
                [0, 0, 1],
            ],
        },
        scale: {
            max: 2,
            min: 0.2,
            default: 0,
            y: 1,
            calculateMatrix: (x, y) => [
                [x, 0, 0],
                [0, y, 0],
                [0, 0, 1],
            ],
        },
    }
    const [rotationMatrix, setRotationMatrix] = useState([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ])
    const [moveMatrix, setMoveMatrix] = useState([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ])
    const [scaleMatrix, setScaleMatrix] = useState([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ])
    useEffect(() => {
        updateMatrix("rotationMatrix", rotationMatrix)
        updateMatrix("moveMatrix", moveMatrix)
        updateMatrix("scaleMatrix", scaleMatrix)
    })
  return (
    <div className={styles.App}>

        <div style={{display: "inline-block", marginRight: 40}}>
      <MatrixBlock array={rotationMatrix} setArray={setRotationMatrix} description={rotationTemplate} inputDesc={inputProperty.rotate} title="Rotate"/>
      <MatrixBlock array={moveMatrix} setArray={setMoveMatrix} description={moveTemplate} inputDesc={inputProperty.move} title="Move"/>
      <MatrixBlock array={scaleMatrix} setArray={setScaleMatrix} description={scaleTemplate} inputDesc={inputProperty.scale} title="Scale"/>
      </div>
        <button onClick={() => setRotationMatrix([[2,3,4], [5,6,7], [8,9,10]])} />
      <canvas id="glcanvas" width="640" height="480">Unsupported</canvas>
        {/* <div> */}
        {/*     {rotationMatrix().map(row => { */}
        {/*         console.log("row") */}
        {/*         return row.map((vale) => ( */}
        {/*             <div>{vale}</div> */}
        {/*         )) */}
        {/*     })} */}
        {/* </div> */}
    </div>
  );
}

function Test() {
    const [value, setValue] = createSignal(1)

    console.log("rerender")
    return (
        <div>
        <p>{value()}</p>
            <button onClick={() => setValue(value() + 1)}/>
        </div>
    )
}

export default App;
// export default Test;
