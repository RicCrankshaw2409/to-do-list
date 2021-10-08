import { useState } from "react";

function Todolist(props) {
  const { list } = props;

  const [complete, setComplete] = useState("false");

  function changeToComplete(e) {
    console.log(list);
    console.log(e.target.parentElement.className);
    setComplete("complete");
  }

  return (
    <div id="todolistsection">
      <ul>
        {list.map((item) => {
          return (
            <li className={complete} key={item} id={item}>
              {item}
              <button onClick={changeToComplete}>✅</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
