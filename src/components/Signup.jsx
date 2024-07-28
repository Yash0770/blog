import React, { useState } from "react";
import authService from "../appwrite/auth";
import { login as authLogin } from "../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Input, Logo } from "./index";
import { useForm } from "react-hook-form";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const create = async (data) => {
    setError("");
    try {
      const session = await authService.createAccount(data);
      if (session) {
        const userData = authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="mx-auto w-full w-100 p-4 border border-black">
        <div className="mb-2 d-flex justify-content-center">
          <span className="inline-block w-full w-100">
            <Logo width="100%" />
          </span>
          <h2 className="text-center font-bold">Sign up to create account</h2>
          <p className="mt-2 text-center text-black">
            Already have an account?&nbsp;
            <Link to="/login" className="text-primary">
              Sign In
            </Link>
          </p>
          {error && <p className="text-red text-center mt-4">{error}</p>}

          <form onSubmit={handleSubmit(create)}>
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.text(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
            label='Password: '
            placeholder='Enter your password'
            type='password'
            {...register('password',{
                required: true
            })}
            />
            <Button
            type="submit"
            className="w-full w-100 "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
