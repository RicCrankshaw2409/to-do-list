import { useState } from "react";

function Addtodo(props) {
  const { setList } = props;
  const [newListItem, setNewListItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setList((currentList) => {
      const newList = [...currentList, newListItem];
      return newList;
    });
    setNewListItem("");
  }
  return (
    <form onSubmit={handleSubmit} id="inputsection ">
      <label id="input-label" htmlFor="new-item">
        New item:
      </label>
      <input
        type="text"
        required
        value={newListItem}
        onChange={(e) => {
          setNewListItem(e.target.value);
        }}
      />
      <button class="large-button" type="submit">Submit</button>
    </form>
  );
}

export default Addtodo;
