import "./App.css";
import Header from "./components/Header";
import Addtodo from "./components/Addtodo";
import Todolist from "./components/Todolist";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <Header />
      <Addtodo setList={setList} />
      <Todolist list={list} />
    </div>
  );
}

export default App;
