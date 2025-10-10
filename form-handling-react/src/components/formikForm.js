import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    username: Yup.string()
        .min(3, "Username must be at least 3 characters")
        .required("Username is required"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    password: Yup.string().required,
});

export default function FormikForm() {
    const initialaValues = {
        username: "",
        email: "",
        password: "",
    };
    const handleSubmit = (values, { resetForm}) => {
        console.log("Form data:", values);
        alert(`Welcome, ${values.username}! Registration successful. `);
        resetForm();
    };
    return(
        <div className="max-w-sm mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Formik Registration Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {/* Username Field */}
          <div className="mb-3">
            <label htmlFor="username" className="block mb-1 font-medium">
              Username
            </label>
            <Field
              type="text"
              id="username"
              name="username"
              className="w-full border px-2 py-1 rounded"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full border px-2 py-1 rounded"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="w-full border px-2 py-1 rounded"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
} 
