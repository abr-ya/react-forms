import { useState, FormEvent } from "react";
import logIn from "./log-in.png";

const SimpleForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("submitForm", login, password);
  };

  return (
    <form onSubmit={onSubmit}>
      <header>
        <img width="60" src={logIn} alt="log in" />
        <h2>SimpleForm</h2>
      </header>
      <label htmlFor="login">Login</label>
      <input
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        id="login"
        name="login"
        type="text"
      />
      <label htmlFor="password">Password</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        name="password"
        type="password"
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default SimpleForm;
