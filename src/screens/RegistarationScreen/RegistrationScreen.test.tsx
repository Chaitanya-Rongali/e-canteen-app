import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { RegistrationScreen } from "./RegistrationScreen";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

const mockNavigate = jest.fn();
const mockRoute = { params: { role: "admin" } };

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));

describe("RegistrationScreen", () => {
  (useNavigation as jest.Mock).mockReturnValue({ navigate: mockNavigate });

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(Alert, "alert").mockImplementation(() => {});
  });
 test("renders the correct title for admin role", () => {
    const { getByText } = render(<RegistrationScreen route={mockRoute} />);
    expect(getByText("Create account for admin")).toBeTruthy();
  });
 test("renders the correct title for user role", () => {
    const route = { params: { role: "user" } };
    const { getByText } = render(<RegistrationScreen route={route} />);
    expect(getByText("Create account for user")).toBeTruthy();
  });
 test("displays username and password input fields", () => {
    const { getByPlaceholderText } = render(<RegistrationScreen route={mockRoute} />);
    expect(getByPlaceholderText("Please enter Username")).toBeTruthy();
    
  });

  test("navigates to LoginScreen when Sign In button is pressed", () => {
    const { getByText } = render(<RegistrationScreen route={mockRoute} />);
    fireEvent.press(getByText("Sign In"));
    expect(mockNavigate).toHaveBeenCalledWith("LoginScreen", { role: "admin" });
  });
});
