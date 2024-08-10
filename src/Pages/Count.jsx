import { useState } from "react";
import Button from "../Component/Button";
import {useEffect} from "react";

function Count() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => {
      const newCount = prev - 1;
      console.log(newCount);
      return newCount;
    });
  };

   useEffect(() => {
    if(count % 2 === 0){
      alert("Nah Even number o")
    }
   }, [count])
  return (
    <div>
      <h1>App Counter</h1>
      <p>Count value is: {count}</p>

      <div
        style={{ background: "#F4F2F3", padding: "24px", borderRadius: "8px" }}
      >
        <Button
          text="increment"
          style={{ background: "#94A7AE" }}
          onClick={increment}
        />
        <span
          style={{
            margin: "0 20px",
            color: "black",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          {count}
        </span>
        <Button
          style={{ background: "#94A7AE" }}
          text="decrement"
          onClick={decrement}
          disabled={count === 0}
        />
        <button
          style={{ background: "#64766A", margin: "0 20px" }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Count;
