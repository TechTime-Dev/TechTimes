import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginPage from "../../client/components/LoginPage.jsx";
import { render, fireEvent } from "@testing-library/react";

global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue({ message: "Login successful" }),
});

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.spyOn(global, "fetch").mockResolvedValue({
  json: jest.fn().mockResolvedValue({ message: "Login successful" }),
});

describe("LoginPage", () => {
  let useDispatchMock;
  let useNavigateMock;

  beforeEach(() => {
    useDispatchMock = jest.fn();
    useDispatch.mockReturnValue(useDispatchMock);

    useNavigateMock = jest.fn();
    useNavigate.mockReturnValue(useNavigateMock);
  });

  it("should render the login form", () => {
    const { asFragment } = render(<LoginPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should update state on input change", () => {
    const { getByLabelText } = render(<LoginPage />);
    const usernameInput = getByLabelText("Username/Email");
    const passwordInput = getByLabelText("Password");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    expect(usernameInput.value).toBe("testuser");
    expect(passwordInput.value).toBe("testpassword");
  });
});
