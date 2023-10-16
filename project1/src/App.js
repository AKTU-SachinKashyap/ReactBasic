// import Cart from './Addcart/Cart';
import './App.css';
// Router 
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';

// import About from './Route/Contact';
// import Home from './Route/Home'
// import Contact from './Route/About'
// import BugHunt from './Bughunt/Bughunt';
import PaginationMain from './Pagination/PaginationMain'
// import Home from './Pagination/Home'






// import Todo from './Component/Todo';
// import Result from './Component1/Result';
// import List from './Component/List.js';

function App(){
  // const numbers = [1, 2, 3, 4, 5];
  //   return <List numbers={numbers}></List>

  
  

  return (
    <div className="App">
      {/* <Todo></Todo> */}
      {/* <Result></Result> */}
      {/* <List></List> */}

      {/* <img src='https://picsum.photos/200'></img> */}





      {/* Route */}
    {/* <BrowserRouter> */}
    {/* <Routes>
      <Route path="/about" element={<About></About>}></Route>
      <Route index element={<Home></Home>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
    </BrowserRouter> */}

     
     {/* <Cart></Cart> */}

     {/* <BugHunt></BugHunt> */}
     {/* <Pagination></Pagination> */}

      <PaginationMain></PaginationMain>
      {/* <Home></Home> */}
    </div>
  );
}
export default App;
