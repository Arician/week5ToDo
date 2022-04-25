// import { useState } from "react";
// const State = () => {
//   //     value ,function
//   const [persons, setPersons] = useState([
//     { name: "Tom", age: 30 },
//     { name: "Bob", age: 34 },
//     { name: "Jim", age: 42 },
//   ]);
//   const handleClick = (name) => {
//     alert("hello"+name);
//   };
//   return (
//     <div>
//       <Person
//         name={persons[0].name}
//         age={persons[0].age}
//         clickMe={handleClick}
//       />
//       <Person
//         name={persons[1].name}
//         age={persons[1].age}
//         clickMe={handleClick}
//       />
//       <Person
//         name={persons[2].name}
//         age={persons[2].age}
//         clickMe={handleClick}
//       />
//     </div>
//   );
// };

// const Person = (props) => {
//   return (
//     <p onClick={()=>props.clickMe(props.name)}>
//       My name is {props.name} and my age is {props.age}
//     </p>
//   );
// };

// export default State;
