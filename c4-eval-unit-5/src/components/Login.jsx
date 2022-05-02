import axios from "axios";
import { useEffect, useState } from "react";

export const Login = () => {
  const [user, setUser] = useState("");
  // console.log(user);
  const [pass, setPass] = useState("");
  // console.log(pass);
  const [userData, setUserData] = useState([]);
  console.log('userData:', userData)

  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => setUserData(res.data));
  }, []);

  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={(e) => setPass(e.target.value)}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={handleLogin}>Login</button>
    </div>
  );
};
