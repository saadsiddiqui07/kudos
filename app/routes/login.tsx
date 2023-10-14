import { useState } from "react";
import FormField from "~/components/form-field";
import Layout from "~/components/layout";

interface InputProps {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

const Login = () => {
  const [action, setAction] = useState<"login" | "register">("login");
  const [formData, setFormData] = useState<InputProps>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };

  return (
    <Layout>
      <div
        onClick={() => setAction(action === "login" ? "register" : "login")}
        className="ml-auto bg-blue-600 w-max px-4 py-2 rounded-md cursor-pointer"
      >
        <b className="text-yellow-300">
          {action === "login" ? "Sign Up" : "Login"}
        </b>
      </div>
      <div className="h-full justify-center p-10 items-center flex flex-col gap-y-2">
        <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-300">
          Welcome to Kudos!
        </h2>
        <p className="font-semibold text-slate-300">
          {action === "login"
            ? "Log In To Give Some Praise!"
            : "Sign Up To Get Started!"}
        </p>

        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
          className="rounded-2xl bg-gray-200 p-6 md:w-96"
          method="post"
        >
          <FormField
            htmlFor="email"
            label="Email"
            value={formData.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e, "email")
            }
          />
          <FormField
            htmlFor="password"
            type="password"
            label="Password"
            value={formData.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e, "password")
            }
          />
          {action === "register" && (
            <>
              <FormField
                htmlFor="firstName"
                label="First Name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "firstName")
                }
                value={formData.firstName}
              />
              <FormField
                htmlFor="lastName"
                label="Last Name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "lastName")
                }
                value={formData.lastName}
              />
            </>
          )}

          <div className="w-full text-center">
            <input
              type="submit"
              className="rounded-xl mt-2 bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1 hover:cursor-pointer"
              value="Sign In"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
