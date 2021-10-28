import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
function ManageUsers() {
  const [UserDetails, setUserDetails] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/webapiadmin/fetchusers").then((res) => {
      setUserDetails(res.data);
    });
  }, [setUserDetails]);

  function manageuserstatus(regid, status) {
    axios
      .post("http://localhost:3000/webapiadmin/manageuserstatus", {
        _id: regid,
        status: status,
      })
      .then((res) => {
        console.log(res.data);
        alert("User " + status + " successfully....");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <AdminNavbar />
      <div className="container">
        <h1>View & Manage Users</h1>
        <br />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Information</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {UserDetails.map((s, index) => {
              return (
                <tr key={index}>
                  <td>{s.name}</td>

                  <td>{s.username}</td>

                  <td>{s.info}</td>
                  <td>
                    {s.status ? (
                      <span onClick={() => manageuserstatus(s._id, "block")}>
                        <img
                          src="images/block.jpg"
                          height="50"
                          width="50"
                          alt="block user"
                        />
                      </span>
                    ) : (
                      <span onClick={() => manageuserstatus(s._id, "verify")}>
                        <img
                          src="images/unblock.jpg"
                          height="50"
                          width="50"
                          alt="unblock user"
                        />
                      </span>
                    )}
                  </td>
                  <td
                    onClick={() => manageuserstatus(s._id, "delete")}
                    title="Delete User"
                  >
                    <img
                      src="images/delete.png"
                      height="50"
                      width="50"
                      alt="delete"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageUsers;
