import { Form, Field } from "react-final-form";

export interface Idata {
  login: string;
  password: string;
  confirm: string;
}

interface IFinalForm {
  handler: (data: Idata) => void;
}

const FinalForm = ({ handler }: IFinalForm) => (
  <Form
    onSubmit={handler}
    validate={(values) => {
      const errors = {};
      if (!values.username) {
        errors.username = "Required";
      }
      if (!values.password) {
        errors.password = "Required";
      }
      if (!values.confirm) {
        errors.confirm = "Required";
      } else if (values.confirm !== values.password) {
        errors.confirm = "Must match";
      }
      return errors;
    }}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <h2>FinalForm</h2>
        <span>Проверка совпадения</span>
        <Field name="username">
          {({ input, meta }) => (
            <div>
              <label>Username</label>
              <input {...input} type="text" placeholder="Username" />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
        <Field name="password">
          {({ input, meta }) => (
            <div>
              <label>Password</label>
              <input {...input} type="password" placeholder="Password" />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
        <Field name="confirm">
          {({ input, meta }) => (
            <div>
              <label>Confirm</label>
              <input {...input} type="password" placeholder="Confirm" />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
        <div className="buttons">
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <button
            type="button"
            onClick={form.reset}
            disabled={submitting || pristine}
          >
            Reset
          </button>
        </div>
        <pre>{JSON.stringify(values, 0, 2)}</pre>
      </form>
    )}
  />
);

export default FinalForm;
