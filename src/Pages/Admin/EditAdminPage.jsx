import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../../component/ui/sidebar";
import Header from "../../component/ui/Header";
import theme from "../../variables";
import arrow from "../../assets/arrowhead-left.png";
import { NavLink } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { editAdmin, queryClient } from "../../component/Https/dashboard";

const AdminFormWrapper = styled.div`
  display: flex;
  background-color: #f7f6f9;
  width: 100%;
  border-radius: 12px;
`;
const PageContent = styled.div`
  border-left: 1px solid ${theme.grayColor};
  width: 85%;
`;
const Wrapper = styled.div`
  padding: 20px;
`;
const Container = styled.div`
  max-width: 1550px;
  margin: 0 auto;
`;
const Button = styled(NavLink)`
  background-color: ${theme.blueColor};
  color: ${theme.whiteColor};
  max-width: 216px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
`;

const ArrowIcon = styled.img``;

// form style
const Form = styled.form`
  padding: 30px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${theme.blueColor};
  border-radius: 20px;
`;
const H3 = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #363939;
`;
const P = styled.p`
  color: #797a7b;
  font-size: 14px;
  margin-top: 15px;
`;
const AddImageWrapper = styled.div`
  margin-top: 15px;
  position: relative;
  background-color: #d1d5db;
  width: 98px;
  height: 98px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${theme.blueColor};
  gap: 5px;
`;
const PImg = styled.p`
  font-weight: 600;
  font-size: 14px;
`;
const PlusDiv = styled.input`
  position: absolute;
  bottom: 27%;
  opacity: 0;
  background-color: ${theme.blueColor};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: ${theme.whiteColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
`;
const PlusDiv2 = styled.div`
  background-color: ${theme.blueColor};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: ${theme.whiteColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
`;

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

const BtnsWrapper = styled.div`
  display: flex;
  align-self: flex-start;
  gap: 20px;
  margin-top: 30px;
`;
const Button2 = styled.button`
  background-color: ${theme.blueColor};
  color: ${theme.whiteColor};
  font-size: 15px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  &.gray {
    background-color: #d1d5db;
    color: #374151;
  }
`;

const StyledEyeSlashIcon = styled(FaEyeSlash)`
  position: absolute;
  right: 2%;
  top: 41%;
  color: #374151;
  cursor: pointer;
`;

const Span = styled.span`
  color: #c90808;
  font-size: 14px;
  font-weight: 500;
  padding: 0 5px 5px 5px;
`;

const EditAdminPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  const [showPass, setShowPass] = useState(false);
  const showPassFun = () => {
    setShowPass(!showPass);
  };

  // *******************************Edit Admin*********************************************
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: editAdmin,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["admins"] });
      console.log("success");
      console.log(data);
      reset();
    },
    onError: (data) => {
      console.log(data);
    },
  });

  async function handleSubmitEditAdmin(data) {
    // const { confirmPass, ...formData } = data;
    mutate({data, id: localStorage.getItem("ClickedAdminIdToEdit") })
  }

  return (
    <AdminFormWrapper>
      <Sidebar />
      <PageContent>
        <Header />
        <Wrapper>
          <Container>
            <Button to="/manageAdmins">
              <ArrowIcon src={arrow} alt="" />
              Back to Manage Admins
            </Button>

            <Form onSubmit={handleSubmit(handleSubmitEditAdmin)}>
              <H3>Edit Admin</H3>
              <P>
                Add a photo so other members <br /> know who you are.
              </P>
              <AddImageWrapper>
                <PImg>Add Photo</PImg>

                {/* <PlusDiv
                  type="file"
                  {...register("image", {
                    required: "Please upload a valid image file",
                    validate: {
                      validExtension: (value) => {
                        if (!value || !value.name) return true; // Skip validation if no file is selected or no file name
                        const validExtensions = ["jpg", "jpeg", "png"];
                        const extension = value.name
                          .split(".")
                          .pop()
                          .toLowerCase();
                        return validExtensions.includes(extension);
                      },
                      validSize: (value) => {
                        if (!value || !value.size) return true; // Skip validation if no file is selected or no file size
                        return value.size <= 3 * 1024 * 1024; // Convert MB to bytes
                      },
                    },
                  })}
                  accept=".jpg, .jpeg, .png"
                /> */}
                <PlusDiv2>+</PlusDiv2>
              </AddImageWrapper>

              {/* {errors.image && errors.image.type === "required" && (
                <Span>Please upload a valid image file</Span>
              )}
              {errors.image && errors.image.type === "validExtension" && (
                <Span>Invalid image format. Only JPG or PNG are allowed</Span>
              )}
              {errors.image && errors.image.type === "validSize" && (
                <Span>Image size should not exceed 3 MB</Span>
              )} */}

              <InputsWrapper>
                <InputWrapper>
                  <FormRow>
                    <FormLabel>First Name</FormLabel>
                    <FormInput
                      type="text"
                      placeholder="EX: JHONAS"
                      id="firstName"
                      name="firstName"
                      {...register("firstName", {
                        required:
                          "Please Enter Valid firstName Not Contain Space And not leave Empty",
                        pattern: {
                          value: /^[a-zA-Z]+$/,
                          message:
                            "Please Enter Valid firstName Not Contain Space And not leave Empty",
                        },
                      })}
                    />
                    <Span>{errors.firstName?.message}</Span>
                  </FormRow>

                  <FormRow>
                    <FormLabel className="email">Email</FormLabel>
                    <FormInput
                      type="email"
                      placeholder="EX: Example@gmail.com"
                      id="email"
                      name="email"
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
                      type={`${showPass ? "text" : "password"}`}
                      placeholder="0216a5416qasdq"
                      id="password"
                      name="password"
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
                    <StyledEyeSlashIcon onClick={showPassFun} />
                    <Span>{errors.password?.message}</Span>
                  </FormRow>
                </InputWrapper>
                <InputWrapper>
                  <FormRow>
                    <FormLabel>Last Name</FormLabel>
                    <FormInput
                      type="text"
                      placeholder="EX: JHONAS"
                      id="lastName"
                      name="lastName"
                      {...register("lastName", {
                        required:
                          "Please Enter Valid firstName Not Contain Space And not leave Empty",
                        pattern: {
                          value: /^[a-zA-Z]+$/,
                          message:
                            "Please Enter Valid firstName Not Contain Space And not leave Empty",
                        },
                      })}
                    />
                    <Span>{errors.lastName?.message}</Span>
                  </FormRow>

                  <FormRow>
                    <FormLabel>Number</FormLabel>
                    <FormInput
                      type="number"
                      placeholder="0211581385"
                      id="phoneNo"
                      name="phoneNo"
                      {...register("phoneNo", {
                        required: "Please Enter Valid phoneNo",
                        // pattern: {
                        //   value: /^(?:\+?88)?01[3-9]\d{8}$/,
                        //   message: "Please Enter Valid phoneNo",
                        // },
                      })}
                    />
                    <Span>{errors.phoneNo?.message}</Span>
                  </FormRow>

                  <FormRow>
                    <FormLabel className="confirmPass">
                      Confirm Password{" "}
                    </FormLabel>
                    <FormInput
                      type={`${showPass ? "text" : "password"}`}
                      placeholder="0216a5416qasdq"
                      id="confirmPass"
                      {...register("confirmPassword", {
                        required: "Confirm Password is required",
                        validate: {
                          matchesPassword: (value) =>
                            value === getValues("password") ||
                            "The passwords do not match",
                        },
                      })}
                    />
                    <StyledEyeSlashIcon onClick={showPassFun} />
                    <Span>{errors.confirmPassword?.message}</Span>
                  </FormRow>
                </InputWrapper>
              </InputsWrapper>

              <BtnsWrapper>
                <Button2>Submit</Button2>
                <Button2 className="gray" type="reset">
                  Cancel
                </Button2>
              </BtnsWrapper>
            </Form>
          </Container>
        </Wrapper>
      </PageContent>
    </AdminFormWrapper>
  );
};

export default EditAdminPage;
