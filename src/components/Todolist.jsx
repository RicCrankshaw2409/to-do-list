

function Todolist(props) {
  const { list } = props;


  function changeToComplete(e) {
    console.log(e.target.parentElement.id)
    list.forEach((item) => {
      if (item === e.target.parentElement.id) {
        e.target.parentElement.className = "complete"
      }
    })
    console.log(e.target.parentElement.className)
  }

  return (
    <div id="todolistsection">
      <ul>
        {list.map((item) => {
          return (
            <li className={"false"} key={item} id={item}>
              {item}
              <button className="complete-button" onClick={changeToComplete}>✅</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
