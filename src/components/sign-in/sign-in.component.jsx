import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      email: "",
      password: "",
    });
  };

  const handleChange = (event) => (name) => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          value={values.email}
          name="email"
          required
          handleChange={handleChange}
          label="email"
        />
        <FormInput
          type="password"
          value={values.password}
          name="password"
          required
          handleChange={handleChange}
          label="password"
        />
        <div className="buttons">
          <CustomButton type="submit" value="Submit Form">
            Sign in
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
