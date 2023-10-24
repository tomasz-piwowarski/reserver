// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import SignUpForm from "./SignUpForm";

// describe("SignUp Component", () => {
//   it("renders sign up form with input fields and submit button", () => {
//     const handleSubmit = jest.fn();
//     const handleInput = jest.fn();

//     const { getByLabelText, getByText } = render(<SignUpForm />);

//     const usernameInput = getByLabelText("Username");
//     const passwordInput = getByLabelText("Password");
//     const submitButton = getByText("submit");

//     expect(usernameInput).toBeInTheDocument();
//     expect(passwordInput).toBeInTheDocument();
//     expect(submitButton).toBeInTheDocument();
//   });

//   it("calls handleSubmit when form is submitted", () => {
//     const handleSubmit = jest.fn();

//     const { getByTestId } = render(<SignUpForm />);

//     const form = getByTestId("SignUp");
//     fireEvent.submit(form);

//     expect(handleSubmit).toHaveBeenCalledTimes(1);
//   });
// });
