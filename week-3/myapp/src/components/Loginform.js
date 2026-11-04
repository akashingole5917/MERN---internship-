import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <div style={container}>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit} style={formStyle}>
          <h2>Login Form</h2>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
          <br /><br />
          <button type="submit" style={btn}>Login</button>
          <p>Please login to continue.</p>
        </form>
      ) : (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout} style={btn}>Logout</button>
        </div>
      )}
    </div>
  );
}

const container = { border: "1px solid #ddd", padding: "20px", margin: "20px auto", maxWidth: "300px", borderRadius: "8px" };
const formStyle = { textAlign: "center" };
const inputStyle = { padding: "8px", width: "90%" };
const btn = { padding: "8px 16px", cursor: "pointer" };

export default LoginForm;
