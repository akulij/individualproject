import styles from './Matrix.module.css';
import { range } from "./utils.js"

// import { createEffect } from 'solid-js';
// import { For } from 'solid-js';
// import { updateMatrix } from "./gl.js";
import { useEffect } from 'react';
import { useState } from 'react';

function handleToArray(array, e, setter) {
    console.log("Handle change")
    const [x, y, type] = e.target.id.split(" ").map((v, index) => index < 2 ? parseInt(v) : v)
    console.log(x, y)

    let new_array = [...array];
    console.log(new_array, 3)
    new_array[y][x] = e.target.value

    setter(new_array)

    // setter(new_array)
    // console.log("New array:")
    // console.log(array())
}

function Matrix({ storer, setStorer }) {
    console.log("rerender")
  return (
    <div className={styles.Matrix}>
        <div className={styles.matrix_lbracket}></div>
        {/* <For each={storer()}> */}
        {/*     {(row, y) => ( */}
        {/*       <div className={styles.matrix_row}> */}
        {/*         <For each={row}> */}
        {/*             {(value, x) => ( */}
        {/*       <input type="text" */}
        {/*         className={styles.matrix_cell} */}
        {/*         value={value} */}
        {/*         id={`${x()} ${y()} "rotationMatrix"`} */}
        {/*         onInput={(e) => handleToArray(storer, e, setStorer)} */}
        {/*         > */}
        {/*       </input> */}
        {/*             )} */}
        {/*         </For> */}
        {/*       </div> */}
        {/*     )} */}
        {/* </For> */}
        {storer.map((row, y) => (
          <div className={styles.matrix_row} key={y}>
            {row.map((value, x) => (
              <input type="text"
                className={styles.matrix_cell}
                value={value}
                id={`${x} ${y}`}
                onInput={(e) => handleToArray(storer, e, setStorer)}
                key={x}
                >
              </input>
            ))}
          </div>
        ))}
        <div className={styles.matrix_rbracket}></div>
    </div>
  );
}

function MatrixImmutable({ array }) {
  return (
    <div className={styles.Matrix}>
        <div className={styles.matrix_lbracket}></div>
        {array.map((row, index) => (
          <div className={styles.matrix_row} key={index}>
            {row.map((value, index) => (
              <div className={styles.matrix_desc} key={index}>{value}</div>
            ))}
          </div>
        ))}
        <div className={styles.matrix_rbracket}></div>
    </div>
  );
}

function updateInput(e, desc, setArray, setValue) {
            // onInput={(e) => console.log(e.currentTarget.value / (e.currentTarget.max || 100))}
    const input = e.currentTarget.value / (e.currentTarget.max || 100)
    const normalizedInput = desc.min + input * (desc.max - desc.min)
    setArray(desc.calculateMatrix(normalizedInput, desc.y))
    setValue(e.currentTarget.value)
}

export function MatrixBlock({ array, setArray, description, title, inputDesc }) {
    const [value, setValue] = useState(inputDesc.default)
    return (
      <div>
        <p>{title}</p>
          <div className="matrix-block" style={{display: "flex", "flexDirection": "row"}}>
          <MatrixImmutable array={description}/>
          <input orient="vertical" type="range" name="X" value={value} max={100}
              style={{marginLeft: 60, marginRight: 20}}
              onInput={(e) => updateInput(e, inputDesc, setArray, setValue)}
              />
          <Matrix storer={array} setStorer={setArray} />
        </div>
      </div>
    )
}

export default Matrix;
