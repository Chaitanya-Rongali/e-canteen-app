import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { LoginScreen } from './LoginScreen.tsx';
import { useNavigation } from '@react-navigation/native';
const mockNavigate = jest.fn();
const mockRoute = { params: { role: 'admin' } };
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('LoginScreen', () => {
  (useNavigation as jest.Mock).mockReturnValue({ navigate: mockNavigate });
   beforeEach(() => {
   jest.clearAllMocks();
  });

  test('renders the correct title for admin role', () => {
    const { getByText } = render(<LoginScreen route={mockRoute} />);
    expect(getByText('Admin Login')).toBeTruthy();
  });
  test('renders the correct title for user role', () => {
    const route = { params: { role: 'user' } };
    const { getByText } = render(<LoginScreen route={route} />);
    expect(getByText('User Login')).toBeTruthy();
  });

  test('displays username and password input fields', () => {
    const { getByPlaceholderText } = render(<LoginScreen route={mockRoute} />);
    expect(getByPlaceholderText('Please enter Username')).toBeTruthy();
    expect(getByPlaceholderText('*********')).toBeTruthy();
  });

  test('navigates to RegistrationScreen when Sign Up button is pressed', () => {
    const { getByText } = render(<LoginScreen route={mockRoute} />);
    fireEvent.press(getByText('Sign Up'));
    expect(mockNavigate).toHaveBeenCalledWith('RegistrationScreen', { role: 'admin' });
  });
  
});
