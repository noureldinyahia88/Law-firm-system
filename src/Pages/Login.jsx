import React, { useState } from "react";
import styled from "styled-components";
import img from "../assets/loginImage.png";
import theme from "../variables";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { LoginFun } from "../component/Https/Login";
import { jwtDecode } from "jwt-decode";
import { queryClient } from "../component/Https/dashboard";

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
  width: fit-content;
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
const Button = styled.button`
  background-color: ${theme.blueColor};
  color: ${theme.whiteColor};
  font-size: 15px;
  font-weight: 600;
  width: 100%;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  cursor: pointer;
  margin-top: 20px;
`;
const Button2 = styled(NavLink)`
  color: ${theme.blueColor};
  font-size: 15px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FormCheck = styled.div`
  width: 30%;
  display: flex;
  gap: 10px;
`;
const CheckLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
`;
const FormInputCheckbox = styled.input``;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();
  const navigate = useNavigate();
  // login
  const [profileType, setProfileType] = useState([]);

  const { mutate, isPending } = useMutation({
    mutationFn: LoginFun,
    onSuccess: (data) => {
      // to refetch the data
      queryClient.invalidateQueries({ queryKey: ["data"] });
      console.log("success");
      console.log(data);

      const decodedToken = jwtDecode(data);

      setProfileType(decodedToken.role[0]);

      localStorage.setItem("usrName", decodedToken.name)
      localStorage.setItem("token", data);
      localStorage.setItem("profileType", decodedToken.role[0]);
      localStorage.setItem("ProfileID", decodedToken.sub);

      if (decodedToken.role[0] === "ROLE_ADMIN") {
        navigate("/dashboard");
      } else if (decodedToken.role[0] === "ROLE_LAWYER") {
        navigate("/ManageCase");
      } else if (decodedToken.role[0] === "ROLE_EMPLOYEE") {
        navigate("/manageTaskEmplyee");
      }

      console.log(decodedToken.role[0]);
    },
  });

  async function handleSubmitLogin(formData) {
    // mutate({
    //   email: formData.email,
    //   password: formData.password,
    // });
    navigate("/dashboard")
  }

  return (
    <LoginPage>
      <LoginWrapper>
        <H1>Welcome To Our Law Firm System</H1>
        <P>You Are Unique With Us</P>

        <Form onSubmit={handleSubmit(handleSubmitLogin)}>
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
                // pattern: {
                //   value:
                //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                //   message:
                //     "Please Enter Valid password which contains upper case and lower case letters, numbers, and special characters",
                // },
              })}
            />
            <Span>{errors.password?.message}</Span>
          </FormRow>
          <Wrapper>
            <FormCheck>
              <FormInputCheckbox type="checkbox" />
              <CheckLabel>remember me</CheckLabel>
            </FormCheck>

            <Button2>Forget Your password ?</Button2>
          </Wrapper>
          <Button>Login</Button>
        </Form>
      </LoginWrapper>
    </LoginPage>
  );
};

export default Login;
