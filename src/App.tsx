import FinalForm, { Idata } from "components/FinalForm3";
import FormikForm from "components/FormikForm";
import SimpleForm from "components/SimpleForm";
import { useState } from "react";

const App = (): JSX.Element => {
  const [form, setForm] = useState<"simple" | "formik" | "final">("simple");

  const formHandler = (data: Idata) => {
    console.log(data);
  };

  return (
    <main style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <h1>Hello, React Form!</h1>
        <button onClick={() => setForm("simple")}>simple</button>
        <button onClick={() => setForm("formik")}>formik</button>
        <button onClick={() => setForm("final")}>final</button>
      </div>
      {form === "simple" && <SimpleForm />}
      {form === "formik" && <FormikForm />}
      {form === "final" && <FinalForm handler={formHandler} />}
    </main>
  );
};

export default App;
