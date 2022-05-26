import { Form, Field } from "react-final-form";
import logIn from "./log-in.png";

type valueType = string | number | undefined;

const required = (value: valueType) => (value ? undefined : "Required");
const mustBeNumber = (value: valueType) =>
  isNaN(value) ? "Must be a number" : undefined;
const minValue = (min) => (value: valueType) =>
  !value || isNaN(value) || value >= min
    ? undefined
    : `Should be greater than ${min}`;
const minLength = (min) => (value: valueType) =>
  !value || (typeof value == "string" && value.length >= min)
    ? undefined
    : `Login must be not less than ${min} characters`;
const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined,
    );

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
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <header>
          <img width="60" src={logIn} alt="log in" />
          <h2>FinalForm</h2>
        </header>

        <Field
          name="login"
          validate={composeValidators(required, minLength(3))}
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

        <Field
          name="age"
          validate={composeValidators(required, mustBeNumber, minValue(18))}
        >
          {({ input, meta }) => (
            <div>
              <label>Age</label>
              <input {...input} type="text" placeholder="Age" />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>

        <button type="submit">Log in</button>
      </form>
    )}
  />
);

export default FinalForm;
