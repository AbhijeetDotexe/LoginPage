import React, { useEffect, useState } from "react";
import "../App.css";
import Navbar from "./Navbar";
import axios from "axios";
function Pagelist() {
  const [data, setData] = useState([]);

  const res = async () => {
    const response = await axios.get(`http://localhost:4000/user`);
    console.log(response.data);
    setData(response.data);
    console.log(data);
  };

  useEffect(() => {
    res();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h2>User Data</h2>
        <div className="card-deck d-flex justify-content-center">
          {data.map((user) => (
            <div className="card mb-3  m-3 p-2">
              <div className="card-body">
                <h5 className="card-title">{user.username}</h5>
                <p className="card-text">
                  <strong>Description:</strong> {page.description} <br />
                  <strong>ID:</strong> {page.id}
                  <br />
                  <strong>Content:</strong> {page.content}
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

export default Pagelist;
