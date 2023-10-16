// import { render } from "@testing-library/react";
import React from "react";



    // const students=
    // [{id:1, name:"sachin"},
    // {id:2, name:"pooja"},
    // {id:3, name:"rohit"}
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


// 1. ***** Create a React component that receives an array of objects as a prop. Use the map function to render a table with three columns: "Name," "Age," and "Email." Each row should represent one object in the array

    // const Students=[
    //     {id:1, name:"sahcin", Age:"20", Email:"xyz@gmail.com"},
    //     {id:2, name:"ankit", Age:"18",Email:"xyz@gmail.com" },
    //     {id:3, name:"Akash", Age:"24", Email:"xyz@gmail.com"}
    // ];

    // return( 
    //     <div>
    //         <h1>Students</h1>
    //         <div  className="k">
    //         <table>
    //             <tr>
    //                 <th>Name</th>
    //                 <th>Age</th>
    //                 <th>Email</th>
    //             </tr>

    //             {Students.map((val, key)=>{
    //                 return(
    //                     <tr key={key}>{val.name}
    //                         <td>{val.Age}</td>
    //                         <td>{val.Email}</td>
    //                     </tr>
    //                 )
    //             })}
    //         </table>
    //         </div>
    //     </div>
    // )


    // 2. ****** Write a React component that takes an array of numbers as a prop. Use the map function to render a list of <li> elements, each containing one number from the array


    // const List = ({ numbers }) => {
    //     return (
    //       <ul>
    //         {numbers.map((number, index) => (
    //           <li key={index}>{number}</li>
    //         ))}
    //       </ul>
    //     );
    //   };

    //   export default List;



    // 3. ******** Implement a React component that receives an array of strings as a prop. Use the map function to render a dropdown select box (<select>) with each string as an option. When an option is selected, display the selected value below the select box.


    // export default function List() {
    //     const img=[
    //         {id:1, image:"img1"},
    //         // {id:1, image:<img src={require('./Img/sr1.png').default} width={200} height={100}></img>},
    //         {id:3, image:"img3"},
    //         {id:4, image:"img4"}
    //         ];


    //     return(
    //         <div >
    //                 <select className="A" >
    //                         {img.map((s)=>(
    //                             <option >
    //                                 <li k={s.id}>{s.image}</li>
    //                             </option>
    //                         ))}
    //                 </select>
    //         </div>
    //     )
    // }


    // 4.  ******  Build a React component that takes an array of images as a prop. Use the map function to render a gallery with each image displayed in a <div> element. Add a click event handler to each image so that when clicked, it opens the image in a larger view.

    
   
    // import Gallery from './Gallery';
    
    // const List = () => {
    //     // let url='https://picsum.photos/200'
    //   const images = [
    //     'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
    //     'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
    //     'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        
    //   ];
    
    //   return (
    //     <div>
    //       <h1>Image Gallery</h1>
    //       <Gallery images={images} />
         
    //     </div>
    //   );
    // };
    
    // export default List;
    



    // 5.  ******* Develop a React component that receives an array of user objects as a prop. Use  the map function to render a list of user profiles, including their name, profile picture, and a short bio. Style each profile card using CSS to create a visually appealing layout.

import Gallery from './Gallery';
export default function List(){

    return(
        <div id="container">
            <div id="leftbox">
            <h1>hello</h1> 
            </div>

            <div id="middlebox">
            <h1>Hello</h1>
            </div>

            <div id="rightbox">
            <h1>Hello</h1>
            </div>

        </div>
    )
}