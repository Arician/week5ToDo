import { useState } from "react";

const Common = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);
  const addHandler = () => {
    let storedNums = [...numbers];
    storedNums.push(storedNums[storedNums.length - 1] + 1);
    setNumbers(storedNums);
  };
  const removeHandler = (index) => {
    let storedNums = [...numbers];
    storedNums.splice(index, 1);
    setNumbers(storedNums);
  };
  const [text,setText]=useState("")
  const inputhandler=(e)=>{
      setText(e.target.value);
  }
  return (
    <div>
      <h1>I'm common</h1>
      <p>{text}</p>
      <input onChange={inputhandler}></input>
      <button onClick={addHandler}>add one</button>
      {numbers.map((number, i) => {
        return (
          <h2 key={i} onClick={() => removeHandler(i)}>
            {number}
          </h2>
        );
      })}
    </div>
  );
};
export default Common;
