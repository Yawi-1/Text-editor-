import { useEffect, useState } from "react";

function NewFunction() {
    const ShowInConsole=(()=>{
        console.log("Text In Console");
    })
    const [count,setcount] = useState(0);
    const increment = ()=> {
        setcount(count+1);
    }
    // map() Function is used to iterate over arrays and perform specific operation.
    const fruits =["Apple","Banana","Mango"];
    const capital =fruits.map((name)  => {
    return name.toUpperCase();
    });
console.log(capital);
//filter() function is used to create a new array which  satisfy the specific given conditon. 
    const Marks =[35,50,15,85,65];
    const Result = Marks.filter((num) => {
       return num%2==0;
    });
   console.log("Number of students who marks is >=33 : " + Result.length);


    useEffect(()=> {
        console.log("hello");
    },[count]);
    
    
    return(
        <div className="classname">
      <ShowInConsole/>
      <button onClick={increment}>{count}</button>
    </div>
)
}
export default NewFunction;


// export function Header() {
//     return (
//     <div className="header">
//         <h1 id="h1">It is a header</h1>
//     </div>
//     );
// }

// filter() : It is used to create a new 
// array containing only the elements that pass a specified condition. 



















// export function Name() {
//     const [name,setname] = useState('abc');


//      const myfunction = ()=>{
// setname('def');
//     }
//     const oldfunction = ()=>{
//         setname('abc');
//     }
    
//     return (
//     <div className="NM">
//         <h1 > {name} </h1>
//         <button onClick={myfunction}>click to change</button>
//         &nbsp;
//         <button onClick={oldfunction} >Click to initial text</button>
//             </div>
//     )
   // }
//use effect works in background
//page load and change the value of variable on which it depend.
