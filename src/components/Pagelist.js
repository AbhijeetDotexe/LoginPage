import React from 'react';
import '../App.css'
import Navbar from './Navbar';
function Pagelist() {
  const array = [
    {
      name: "Abhijeet",
      email: "abhijeet@gmail.com",
      No_of_Pages: 1
    },
    {
      name: "Karan",
      email: "Karan@gmail.com",
      No_of_Pages: 2
    },
    {
      name: "Aditya",
      email: "Aditya@gmail.com",
      No_of_Pages: 3
    },
  ];

  return (
    <>
    <Navbar/>
      <div>
      <h2>User Data</h2>
      <div className="card-deck d-flex justify-content-center">
        {array.map((user, index) => (
          <div className="card mb-3  m-3 p-2" key={index}>
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">
                <strong>Email:</strong> {user.email} <br />
                <strong>No. of Pages:</strong> {user.No_of_Pages}
              </p>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary m-1 rounded-2" >Edit</button>
                <button type="button" className="btn btn-danger m-1 rounded-2" >Delete</button>
                <button type="button" className="btn btn-success m-1 rounded-2" >Add Page</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</>
  );
}

export default Pagelist;
