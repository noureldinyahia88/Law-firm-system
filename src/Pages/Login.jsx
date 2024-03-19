import React, { useState } from "react";
import styled from "styled-components";
import img from "../assets/loginImage.png";
import theme from "../variables";
import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";

const LoginPage = styled.div`
  background-color: #f7f6f9;
  width: 100%;
  height: 100vh;
  background-image: url(${img});
  background-size: center; 
  background-position: right;
  background-repeat: no-repeat;
`;
const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  justify-content: center;
  height: 100%;
  padding-left: 100px;
`;


const H1 = styled.h1`
font-size: 43px;
font-weight: 600;
margin-bottom: 20px;
`;

const P = styled.p`
font-size: 35px;
font-weight: 500;
margin-bottom: 20px;
`;

const Form = styled.form``;

const InputsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  margin-top: 30px;
`;
const InputWrapper = styled.div`
  width: 50%;
`;

const FormRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: start;
  border: 2px solid #6b7280;
  border-radius: 10px;
  margin-bottom: 30px;
  width: 500px;
`;
const FormLabel = styled.label`
  margin-top: -10px;
  margin-left: 15px;
  background-color: #f7f6f9;
  width: 15%;
  font-size: 14px;
  font-weight: 600;
  color: ${theme.blueColor};
  &.confirmPass {
    width: 27%;
  }
  &.email {
    width: 9%;
  }
`;
const FormInput = styled.input`
  background-color: transparent;
  border: none;
  padding: 14px;
  &:focus {
    outline: none;
  }
`;

const Span = styled.span`
  color: #c90808;
  font-size: 14px;
  font-weight: 500;
  padding: 0 5px 5px 5px;
`;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  return (
    <LoginPage>
      <LoginWrapper>
        <H1>Welcome To Our Law Firm System</H1>
        <P>You Are Unique With Us</P>

        <Form>
          <FormRow>
            <FormLabel className="email">Email</FormLabel>
            <FormInput
              type="email"
              placeholder="EX: Example@gmail.com"
              id="email"
              {...register("email", {
                required: "Please Enter Valid email",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please Enter Valid email",
                },
              })}
            />
            <Span>{errors.email?.message}</Span>
          </FormRow>
          <FormRow>
            <FormLabel>Password</FormLabel>
            <FormInput
              type="text"
              placeholder="0216a5416qasdq"
              id="password"
              {...register("password", {
                required:
                  "Please Enter Valid password which contains upper case and lower case letters, numbers, and special characters",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                  message:
                    "Please Enter Valid password which contains upper case and lower case letters, numbers, and special characters",
                },
              })}
            />
            <Span>{errors.password?.message}</Span>
          </FormRow>
        </Form>
      </LoginWrapper>
      {/* <ImgBox>
        <Img src={img} alt="" />
      </ImgBox> */}
    </LoginPage>
  );
};

export default Login;
