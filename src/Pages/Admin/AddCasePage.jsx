import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../../component/ui/sidebar";
import Header from "../../component/ui/Header";
import theme from "../../variables";
import arrow from "../../assets/arrowhead-left.png";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

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
  width: 12%;
  font-size: 14px;
  font-weight: 600;
  color: ${theme.blueColor};
  &.confirmPass {
    width: 27%;
  }
  &.email {
    width: 7%;
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

const Span = styled.span`
  color: #c90808;
  font-size: 14px;
  font-weight: 500;
  padding: 0 5px 5px 5px;
`;

const AddCasePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  return (
    <AdminFormWrapper>
      <Sidebar />
      <PageContent>
        <Header />
        <Wrapper>
          <Container>
            <Button to="/ManageCase">
              <ArrowIcon src={arrow} alt="" />
              Back to Manage Cases
            </Button>

            <Form onSubmit={handleSubmit()}>
              <H3>Add Case</H3>

              <InputsWrapper>
                <InputWrapper>
                  <FormRow>
                    <FormLabel>First Name</FormLabel>
                    <FormInput
                      type="text"
                      placeholder="EX: JHONAS"
                      id="firstName"
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
                    <FormLabel className="email">Age</FormLabel>
                    <FormInput
                      type="number"
                      placeholder="EX: 36"
                      id="age"
                      {...register("age", {
                        required: "Please Enter Valid Age",
                        min: {
                          value: 0,
                          message: "Please Enter Valid Age",
                        },
                      })}
                    />
                    <Span>{errors.age?.message}</Span>
                  </FormRow>
                </InputWrapper>
                <InputWrapper>
                  <FormRow>
                    <FormLabel>Last Name</FormLabel>
                    <FormInput
                      type="text"
                      placeholder="EX: JHONAS"
                      id="lastName"
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
                    <FormLabel className="email">Number</FormLabel>
                    <FormInput
                      type="number"
                      placeholder="0211581385"
                      id="phoneNo"
                      {...register("phoneNo", {
                        required: "Please Enter Valid phoneNo",
                        pattern: {
                          value: /^(?:\+?88)?01[3-9]\d{8}$/,
                          message: "Please Enter Valid phoneNo",
                        },
                      })}
                    />
                    <Span>{errors.phoneNo?.message}</Span>
                  </FormRow>

                  <FormRow>
                    <FormLabel className="email">Jop</FormLabel>
                    <FormInput
                      type="text"
                      placeholder="EX: Corporate Lawyer"
                      id="jop"
                      {...register("job", {
                        required: "Please Enter Valid Jop",
                        pattern: {
                          value: /^[a-zA-Z]+$/,
                          message: "Please Enter Valid Jop",
                        },
                      })}
                    />
                    <Span>{errors.job?.message}</Span>
                  </FormRow>
                </InputWrapper>
              </InputsWrapper>

              <FormRow style={{ width: "100%" }}>
                <FormLabel className="email">Comment</FormLabel>
                <FormInput
                  type="text"
                  placeholder="Ex: Underline outline vector select overflow flows image hand ellipse. Main list create select follower scrolling align."
                  id="Comment"
                  {...register("comment", {
                    required: "Please Enter Valid comment",
                  })}
                />
                <Span>{errors.comment?.message}</Span>
              </FormRow>
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

export default AddCasePage;
