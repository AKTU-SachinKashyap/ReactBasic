import React, { useState } from "react";
import Mockdata from './Mock-data.json'



const PaginationMain = () => {
  const[currentPage, setCurrentPage] =useState(1)
  const recordsPerPage =5;
  const lastIndex = currentPage * recordsPerPage;
  const fristIndex = lastIndex - recordsPerPage;
  const records = Mockdata.slice(fristIndex,lastIndex);
  const npage = Math.ceil(Mockdata.length/recordsPerPage)


  return (
    <div>
      <div>
        <table>
            <thead>
                <th>ID</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>Email</th>
            </thead>
            <tbody>
                {Mockdata.map((d,i)=>(
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.first_name}</td>
                        <td>{d.last_name}</td>
                        <td>{d.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default PaginationMain
