// import Vote from "./Vote";
// import Novote from "./Novote";

// function Result(props){
//     let age=parseInt(props.status);
//     if(age>=18){
//         return <Vote></Vote>
//     }
//     else {
//         return <Novote></Novote>
//     }
// }
// export default Result;



import React, { useState } from "react";

// export default function Result(){

    // const checkstatus=(event)=>{
    //     const age= parseInt(event.target.elements.age.value);
    //     if(age>=18){
    //         alert("U Can Vote")
    //     }
    //     else{
    //         alert("U Cant Vote")
    //     }
    // }

// 1. ******  Displaying a Message Based on a Condition: Create a React component that displays a message based on a condition. For example, if a user is logged in, display a welcome message; otherwise, display a login prompt.


    // const checkstatus=(event)=>{
    //     const password =parseInt(event.target.elements.password.value)
    //     if(password === 1234){
    //         alert("Welcom You");
    //     }else{
    //         alert("Sorry wrong password");
    //     }
    // }
    // return(
    //     <div>
    //         <form onSubmit={checkstatus}>
    //             <label>Enter Your Email</label>
    //             <input type="email" placeholder="Enter Your Email"required></input>
    //             <br></br>
    //             <label>Enter Your password</label>
    //             <input type="number" id="password" placeholder="password" required></input><br>
    //             </br>
    //             <button type="submit">Login</button>
    //         </form>
    //     </div>
    // )


    // 2. ********* Rendering Components Conditionally: Build a React component that conditionally renders different components based on a condition. For instance, if the user is an admin, render an admin dashboard component; otherwise, render a regular user dashboard component.
    // const checkstatus=(event)=>{
    //         const password =parseInt(event.target.elements.password.value)
    //         if(password === 1234){
    //             alert("Welcom You");
    //         }else{
    //             alert("Sorry wrong password");
    //         }
    //     }
    //     return(
    //         <div>
    //             <form onSubmit={checkstatus}>
    //                 <label>Enter Your Email</label>
    //                 <input type="email" placeholder="Enter Your Email"required></input>
    //                 <br></br>
    //                 <label>Enter Your password</label>
    //                 <input type="number" id="password" placeholder="password" required></input><br>
    //                 </br>
    //                 <button type="submit">Login</button>
    //             </form>
    //         </div>
    //     )
   


//  3. ******  Handling Conditional Styling: Design a React component with conditional styling. For example, if a form field is empty, apply a red border to indicate an error; otherwise, display a green border.

//     const [isError, setIsError] =useState('');
//     const handle=(event)=>{
//         setIsError(event.target.value);
//     }
           
//             const style={
//                 border: isError ? '2px solid red' : '2px solid green',
//             }
    
//     return(
//     <div>
        
//         <input type="text"  value={isError} onChange={handle} style={style}  ></input>
//         <button type="submit">check</button>
//    </div>
//     )


// 4.  *****  Conditional Rendering of List Items: Create a React component that renders a list of items conditionally. For instance, if the list is empty, display a "No items found" message; otherwise, render each item in the list.

    // const students=
    // [{id:1, name:"sachin"},
    // {id:2, name:"pooja"},
    // {id:3, name:"rohit"},
    // {id:4, name: "Ankit"}
    // ];


    // return (
    //     <div>
    //         <h1>List of Students of My Class</h1>
    //         <ol>
    //             {students.map((s)=>(
    //                 <li k={s.id}>{s.name}</li>
    //             ))}
                
    //         </ol>
    //     </div>
    // )



    // 5. ****Conditional Rendering with Ternary Operator: Write a React component that utilizes the ternary operator for conditional rendering. For example, if a user is subscribed, display a "Subscribe" button; otherwise, show an "Unsubscribe" button.

   
    
    
    // function SubscribeButton(props) {
    //     const isSubscribed = props.isSubscribed;
    //     return (
    //         <button>
    //     {isSubscribed ? 'Subscribe' : 'Unsubscribe'}
    //     </button>
    //     );

    // }
    // return(
    //     <div>
    //         <button onClick={SubscribeButton}>Upload</button>
    //     </div>
    // )



// import React, { useState } from 'react';




const Result = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => {

    setIsVisible(!isVisible);
  };
  let button;
        if(isVisible ){
     button= <button onClick={handleToggle}>Subscribe</button>
        }
      else{
        button= <button onClick={handleToggle}>UnSubscribe</button>
      }
     return<div>
      {button}
      </div>
}
export default Result;