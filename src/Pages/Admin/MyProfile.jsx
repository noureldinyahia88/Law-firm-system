import React, { useState } from "react";
import Sidebar from "../../component/ui/sidebar";
import Header from "../../component/ui/Header";
import styled from "styled-components";
import theme from "../../variables";
import myimg from "../../assets/Ellipse 43.png";
import imgfill from "../../assets/image-fill.png";
import pencil from "../../assets/pencil.png";
import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import arrow from "../../assets/arrowhead-left.png";

const PageWrapper = styled.div`
  display: flex;
  background-color: #f7f6f9;
  width: 100%;
  border-radius: 12px;
`;

const DasdboardContent = styled.div`
  border-left: 1px solid ${theme.grayColor};
  width: 85%;
  margin: 0 auto;
`;

const Content = styled.div`
  height: 90vh;
  overflow-y: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
const Container = styled.div`
  max-width: 1550px;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  padding: 20px;
`;

const H2 = styled.h2`
  font-weight: 700;
  color: ${theme.blueColor};
  font-size: 24px;
  line-height: 24px;
  text-align: start;
  margin-bottom: 20px;
`;

const MyProfileWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
  width: 100%;
`;
const ImgBox = styled.div`
  padding: 50px;
  width: 30%;
  background-color: #1367c8;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
`;
const H3 = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${theme.whiteColor};
`;
const MyImg = styled.img`
  max-width: 150px;
  max-height: 150px;
`;
const ChooseImgWrapper = styled.div`
  position: relative;
  background-color: ${theme.whiteColor};
  padding: 10px;
  width: 160px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  cursor: pointer;
`;
const ChooseInput = styled.input`
  position: absolute;
  left: 14px;
  opacity: 0;
  cursor: pointer;
`;
const DeatailsBox = styled.div`
  width: 70%;
  background-color: ${theme.whiteColor};
  border-radius: 6px;
  padding: 30px 30px 30px 30px;
`;
const DetlHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 15px 0px;
  margin-bottom: 10px;
  border-bottom: 1px solid #6b7280;
`;
const H4 = styled.h4`
  font-size: 20px;
  font-weight: 700;
  color: #374151;
`;
const DetlWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 15px;
`;
const P = styled.p`
  color: #1f2937;
  font-size: 14px;
  font-weight: 600;
`;
const P2 = styled.p`
  color: #6b7280;
  font-size: 14px;
  font-weight: 600;
`;
const Btn = styled.button`
  background-color: ${theme.blueColor};
  color: ${theme.whiteColor};
  font-size: 15px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  cursor: pointer;
  text-align: center;
`;

// form style
const Form = styled.form``;
const UpdateWrapper = styled.form`
  padding: 30px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${theme.blueColor};
  border-radius: 20px;
`;

const H33 = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #363939;
`;
const P3 = styled.p`
  color: #797a7b;
  font-size: 14px;
  /* margin-top: 15px; */
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
  width: 108px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
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

const PageWrapperForm = styled.div`
  padding: 20px;
  position: absolute;
  top: 17%;
  width: 79%;
  background-color: #f7f6f9;
  height: 100%;
  overflow: hidden;
  display: none;
  &.show{
    display: block;
  }
`;

const Button3 = styled.button`
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
const ArrowIcon = styled.img``;

const ImgIcon = styled.img``;
const MyProfile = () => {
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

  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const showForm = () => {
    setShowUpdateForm(!showUpdateForm);
  }

  return (
    <PageWrapper>
      <Sidebar />
      <DasdboardContent>
        <Header />
        <Content>
          <Container>
            <Form onSubmit={handleSubmit()}>
              <Wrapper>
                <H2>My Profile</H2>

                <MyProfileWrapper>
                  <ImgBox>
                    <MyImg src={myimg} alt="" />

                    <H33>BuleHunter</H33>
                    <ChooseImgWrapper>
                      <ChooseInput type="file" />
                      <MyImg src={imgfill} alt="" />
                      Change Image
                    </ChooseImgWrapper>
                  </ImgBox>

                  <DeatailsBox>
                    <DetlHeader>
                      <H4>About Me</H4>

                      <Btn type="button" onClick={showForm}>
                        <ImgIcon src={pencil} alt="" />
                        Update
                      </Btn>
                    </DetlHeader>

                    <H2>Personal Information</H2>

                    <DetlWrapper>
                      <P3>
                        First Name{" "}
                        <span
                          style={{
                            marginLeft: "20px",
                            fontWeight: "800",
                            fontSize: "20px",
                          }}
                        >
                          :
                        </span>
                      </P3>
                      <P2>Bule</P2>
                    </DetlWrapper>

                    <DetlWrapper>
                      <P3>
                        Last Name{" "}
                        <span
                          style={{
                            marginLeft: "20px",
                            fontWeight: "800",
                            fontSize: "20px",
                          }}
                        >
                          :
                        </span>
                      </P3>
                      <P2>Hunter</P2>
                    </DetlWrapper>

                    <DetlWrapper>
                      <P3>
                        Email{" "}
                        <span
                          style={{
                            marginLeft: "20px",
                            fontWeight: "800",
                            fontSize: "20px",
                          }}
                        >
                          :
                        </span>
                      </P3>
                      <P2>BuleHunter@gmail.com</P2>
                    </DetlWrapper>

                    <DetlWrapper>
                      <P3>
                        Experience Year{" "}
                        <span
                          style={{
                            marginLeft: "20px",
                            fontWeight: "800",
                            fontSize: "20px",
                          }}
                        >
                          :
                        </span>
                      </P3>
                      <P2>3</P2>
                    </DetlWrapper>

                    <DetlWrapper>
                      <P3>
                        Phone Number{" "}
                        <span
                          style={{
                            marginLeft: "20px",
                            fontWeight: "800",
                            fontSize: "20px",
                          }}
                        >
                          :
                        </span>
                      </P3>
                      <P2>+20 1166273441</P2>
                    </DetlWrapper>

                    <DetlWrapper>
                      <P3>
                        Law Type{" "}
                        <span
                          style={{
                            marginLeft: "20px",
                            fontWeight: "800",
                            fontSize: "20px",
                          }}
                        >
                          :
                        </span>
                      </P3>
                      <P2>Civil Law</P2>
                    </DetlWrapper>
                  </DeatailsBox>
                </MyProfileWrapper>
              </Wrapper>

              {/* edit my profile */}
              <PageWrapperForm className={showUpdateForm ? "show" : ""}>
                <Button3 type="button" onClick={showForm}>
                  <ArrowIcon src={arrow} alt="" />
                  Back to My Profile
                </Button3>
                <UpdateWrapper>
                  <H4>Edit Admin</H4>

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
                        <FormLabel>Password</FormLabel>
                        <FormInput
                          type={`${showPass ? "text" : "password"}`}
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
                    <Button2>Update</Button2>
                    <Button2 className="gray" type="reset">
                      Cancel
                    </Button2>
                  </BtnsWrapper>
                </UpdateWrapper>
              </PageWrapperForm>
            </Form>
          </Container>
        </Content>
      </DasdboardContent>
    </PageWrapper>
  );
};

export default MyProfile;
