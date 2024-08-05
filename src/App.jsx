import { useState } from "react";
import "./App.css";
import Count from "./Pages/Count";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Akame ", age: 34 },
  ]);
  return (
    <div>
      <form>
        <input type="text" placeholder="Enter your name" />
        <input type="text" placeholder="Enter your age" />
      </form>
      {students.map((student) => (
        <div
          key={student.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid grey",
            marginTop: "5px",
          }}
        >
          <p>{student.name}</p>
          <p>{student.age}</p>
        </div>
      ))}
      <Count />
    </div>
  );
}

export default App;
