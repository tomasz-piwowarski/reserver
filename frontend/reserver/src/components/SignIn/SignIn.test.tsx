import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SignInForm from "./SignInForm";

describe("SignIn Component", () => {
  it("renders sign in form with input fields and submit button", () => {
    const handleSubmit = jest.fn();
    const handleInput = jest.fn();

    const { getByLabelText, getByText } = render(
      <SignInForm handleSubmit={handleSubmit} handleInput={handleInput} />
    );

    const usernameInput = getByLabelText("Username");
    const passwordInput = getByLabelText("Password");
    const submitButton = getByText("submit");

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("calls handleSubmit when form is submitted", () => {
    const handleSubmit = jest.fn();
    const handleInput = jest.fn();

    const { getByTestId } = render(
      <SignInForm handleSubmit={handleSubmit} handleInput={handleInput} />
    );

    const form = getByTestId("SignIn");
    fireEvent.submit(form);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it("calls handleInput when input field changes", () => {
    const handleSubmit = jest.fn();
    const handleInput = jest.fn();

    const { getByLabelText } = render(
      <SignInForm handleSubmit={handleSubmit} handleInput={handleInput} />
    );

    const usernameInput = getByLabelText("Username");
    fireEvent.change(usernameInput, { target: { value: "testUser" } });

    expect(handleInput).toHaveBeenCalledTimes(1);
  });
});
