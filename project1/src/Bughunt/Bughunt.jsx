import React, { useState, useEffect } from 'react';
const BugHunt = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    useEffect(() => {
    fetchData();
    }, []);

    const fetchData = async () => {

        try {
            const response = await fetch('https://api.example.com/data');
            const result = response.json(); // 
            setData(result); 
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };
    const incrementCount = () => {
    setCount(count + 1);
    };
        const renderItems = () => {
        return data.map((item, index) => { 
       <li key={item.id}>{item.name}</li>;
     });
    };
    return (
        <div>
        <h1>Bug Hunt</h1>
        <button onClick={incrementCount}>Increment</button>
        <p>Count: {count}</p>
        <ul>{renderItems()}</ul>
        </div>
    );
};
export default BugHunt;