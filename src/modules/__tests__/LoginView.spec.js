/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import LoginView from '../login/LoginView';

describe('Testing Login States', () => {
    it('validate login user and password', () => {
      const data = { "password": "123456", "user": "admin@123" }
      const onLogin = jest.fn();
      const  { getByTestId } = render(<LoginView login={onLogin} />);

      fireEvent.changeText(getByTestId('user'), 'admin@123');
      fireEvent.changeText(getByTestId('password'), '123456');

      expect(getByTestId('user').props.value).toEqual('admin@123');
      expect(getByTestId('password').props.value).toEqual('123456');

      const button = getByTestId('button');
      fireEvent.press(button);

      expect(onLogin).toHaveBeenCalledWith(data);
    });
});