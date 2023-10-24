export const FORM_NAME = "SignUp";

export const FIELDS = {
  username: {
    id: "username",
    label: "Username",
    type: "text",
    placeholder: "Your username",
    validators: { required: true, minLength: 3, maxLength: 100 },
  },
  password: {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Your password",
    validators: { required: true, minLength: 3, maxLength: 100 },
  },
};
