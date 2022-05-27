import { Form, Field } from "react-final-form";
import logIn from "./log-in.png";

export interface Idata {
  login: string;
  password: string;
  age: number;
}

interface IFinalForm {
  handler: (data: Idata) => void;
}

const FinalForm = ({ handler }: IFinalForm) => (
  <Form
    onSubmit={handler}
    validate={(values) => {
      console.log("validate");
      const errors = {};
      if (!values.username) {
        errors.username = "Required";
      }
      if (!values.password) {
        errors.password = "Required";
      }
      return errors;
    }}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <header>
          <img width="60" src={logIn} alt="log in" />
          <h2>FinalForm</h2>
          <span>Валидация всей формы</span>
        </header>

        <Field
          name="login"
          render={({ input, meta }) => (
            <div>
              <label htmlFor="login">Login</label>
              <input {...input} type="text" />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />

        <Field
          name="password"
          render={({ input, meta }) => (
            <div>
              <label htmlFor="password">Password</label>
              <input {...input} type="password" />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />

        <Field name="age">
          {({ input }) => (
            <div>
              <label>Age</label>
              <input {...input} type="text" placeholder="Age" />
            </div>
          )}
        </Field>

        <button type="submit" onClick={() => console.log("!")}>
          Log in
        </button>
        <pre>{JSON.stringify(values, 0, 2)}</pre>
      </form>
    )}
  />
);

export default FinalForm;
