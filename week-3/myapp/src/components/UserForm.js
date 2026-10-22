import { useState } from "react";
function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div style={{ border: "1px solid #ccc", margin: "20px", padding: "15px" }}>
      <h2>Registration Form</h2>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        style={{margin: "5px", padding: "8px", width: "200px"}}
      />
      <br />
      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        style={{margin: "5px", padding: "8px", width: "200px"}}
      />
      <h3>Live Preview:</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}
export default UserForm;
