import React, { useEffect, useState } from "react";
import "../App.css";
import Navbar from "./Navbar";
import axios from "axios";
function Userlist() {
  const [data, setData] = useState([]);

  const res = async () => {
    const response = await axios.get(`http://localhost:4000/user`);
    // console.log(response.data);
    setData(response.data);
    // console.log(data);
  };

  const click = async (user) => {
    const id = user._id;
    await axios
      .delete("http://localhost:4000/user/" + id)
      .then(console.log(id));
    res();
  };

  useEffect(() => {
    res();
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <h3>User Data</h3>
        <div className="card-deck d-flex flex-wrap justify-content-center">
          {data.map((user) => (
            <div className="card mb-3  m-3 p-2" key={user._id}>
              <div className="card-body">
                <h5 className="card-title">{user.fullname}</h5>
                <p className="card-text">
                  <strong>username:</strong> {user.username} <br />
                  <strong>email:</strong> {user.email}
                  <br />
                </p>
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    className="btn btn-primary m-1 rounded-2"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger m-1 rounded-2"
                    onClick={() => {
                      click(user);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-success m-1 rounded-2"
                  >
                    Add Page
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Userlist;
