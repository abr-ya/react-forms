import { useFormik } from "formik";
import * as Yup from "yup";
import logIn from "./log-in.png";

const FormikForm = () => {
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        login: "",
        password: "",
      },
      validationSchema: Yup.object({
        login: Yup.string()
          .max(10, "Login must be shorter than 10 characters")
          .min(3, "Login must be not less than 3 characters")
          .required("Required"),
        password: Yup.string()
          .min(6, "Password should be longer than 6 characters")
          .required(),
      }),
      onSubmit: ({ login, password }) => {
        console.log(`FormikSubmit! Login: ${login}, password: ${password}`);
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <header>
        <img width="60" src={logIn} alt="log in" />
        <h2>FormikForm</h2>
      </header>
      <label htmlFor="login">Login</label>
      <input
        value={values.login}
        onChange={handleChange}
        onBlur={handleBlur}
        id="login"
        name="login"
        type="text"
      />
      {touched.login && errors.login ? <div>{errors.login}</div> : null}

      <label htmlFor="password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        name="password"
        type="password"
      />
      {touched.password && errors.password ? (
        <div>{errors.password}</div>
      ) : null}

      <button type="submit">Log in</button>
    </form>
  );
};

export default FormikForm;
