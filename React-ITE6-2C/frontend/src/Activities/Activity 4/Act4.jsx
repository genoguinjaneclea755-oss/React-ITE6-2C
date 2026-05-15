import React, { useState, useEffect } from "react";
import UserCard from "./UserCard.jsx";
import "./index.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <div className="container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Act4;