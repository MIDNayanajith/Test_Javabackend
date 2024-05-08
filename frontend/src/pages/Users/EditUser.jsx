import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUsers] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUsers({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/userupdate/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:8080/getuser/${id}`);
    setUsers(res.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
          <h2 className="text-center mb-4">Edit User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3 row">
              <label htmlFor="name" className="col-sm-3 col-form-label">
                Name
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="username" className="col-sm-3 col-form-label">
                User Name
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your user name"
                  name="username"
                  value={username}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="email" className="col-sm-3 col-form-label">
                Email
              </label>
              <div className="col-sm-9">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-end">
              <button type="submit" className="btn btn-primary me-sm-2">
                Save
              </button>

              <Link className="btn btn-outline-danger mx-2" to="/">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
