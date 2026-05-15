import React from "react";

const UserCard = ({ user }) => {
  return (
    <div style={styles.card}>
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
      <p>Course: {user.course}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
    width: "200px"
  }
};

export default UserCard;