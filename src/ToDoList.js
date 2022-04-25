import { useState } from "react";
import "./ToDoList.css";
const ToDo = () => {
  const [list, setList] = useState([]);
  const [listItem,setListItem]=useState("")
  const change=(e)=>{
    setListItem(e.target.value);
  }
  const listAdd = (e) => {
    if (e.key === "Enter") {
      let storedItems = [...list];
      storedItems.push(listItem);
      setList(storedItems);
      setListItem("")
    }
  };
  const removeHandler = (index) => {
    let storedList = [...list];
    storedList.splice(index, 1);
    setList(storedList);
  };
  const strikeThrough = (e) => {
    const element = e.target;
    element.classList.toggle("strikeThrough");
};
  return (
    <div className="content">
      <h1>To Do</h1>
      <input value={listItem} onChange={change} onKeyPress={listAdd} placeholder="Add a task here"/>
      <div className="list">
      {list.map((item, i) => {
        return (
          <div className="item">
            <h2 key={i} onClick={strikeThrough}>{item}</h2>
            <button onClick={()=> removeHandler(i)}>Remove</button>
          </div>
      )})}
      </div>
    </div>
  );
};
export default ToDo;
