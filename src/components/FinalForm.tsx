import { FormEvent } from "react";
import logIn from "./log-in.png";

const FinalForm = () => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <header>
        <img width="60" src={logIn} alt="log in" />
        <h2>FinalForm</h2>
      </header>
      <label htmlFor="login">Login</label>
      <input id="login" name="login" type="text" />
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" />
      <button type="submit">Log in</button>
    </form>
  );
};

export default FinalForm;
