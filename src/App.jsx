import { useState } from "react"; //useState is used to  
import "./App.css"; 
import Count from "./Pages/Count"; //import the count from the pages
import Button from "./Component/Button"

//main component
function App() {
  const [students, setStudents] = useState([]); //given an empty array to store data

  const [name, setName] = useState(""); //update the name
  const [age, setAge] = useState(""); //update the age

  //function to add the student; (e) means event
  const addStudent = (e) => {
    //refresh the page
    e.preventDefault();
    //check name and age are not empty
    if (name && age) {
      const newStudent = {
        id: students.length + 1,
        name,
        //converted to a number using parseInt
        age: parseInt(age),
      };
      setStudents((prev) => [...prev, newStudent]); // This line ensures the new student is added to the list
      setName("");
      setAge("");
    }
  };

  const deleteStudent = (id) => {
    const newStudents = students.filter((student) => student.id !== id);
    setStudents(newStudents);
  };

  return (
    //structure of the UI
    <div className="container">
      <form onSubmit={addStudent}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          //is a text input field for the name
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your age"
          value={age}
          //is a text input field for age
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
      {/* it loops through the students array and render a div for each student */}
      {students.map((student) => (
        <div key={student.id} className="student" style={{
          display: "flex",
          justifyContent: "space-between",
          border: "2px solid black",
          padding: "5px",
          marginTop: "8px",
        }}>
          <p>{student.name}</p>
          <p>{student.age}</p>

          <Button text="Delete" bg="red" onClick={() => deleteStudent(student.id)} />
        </div>
      ))}
      <Count />
    </div>
  );
}

export default App;