import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();

  const handleLogin = () => {
    login({
      name: "Demo User",
      email: "demo@example.com",
    });

    alert("Login Successful");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login Page</h1>

      <input type="email" placeholder="Enter Email" />
      <br />
      <br />

      <input type="password" placeholder="Enter Password" />
      <br />
      <br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;