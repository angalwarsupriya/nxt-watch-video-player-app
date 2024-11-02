import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  LoginBg,
  LoginCard,
  LoginCon,
  Logo,
  Form,
  LoginInputCon,
  Label,
  Input,
  PasswordInput,
  CheckBoxCon,
  CheckBoxInput,
  Button,
} from './styledComponents';
function Login() {
  const isThemeLight = useSelector((store) => store.themeStatus.isThemeLight);
  const navigate = useNavigate();

  const logoUrl = isThemeLight
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png';

  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangeCheckbox = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',

      body: JSON.stringify({
        username: name,
        password,
      }),
    };
    const url = 'https://apis.ccbp.in/login';
    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok === false) {
      setErrorMsg(data.error_msg);
      setIsError(true);
    } else {
      const jwtToken = data.jwt_token;

      Cookies.set('jwt_token', jwtToken, { expires: 30 });
      console.log('set');
      setIsError(false);
      navigate('/');
    }
  };

  return (
    <LoginBg isThemeLight={isThemeLight}>
      <LoginCard isThemeLight={isThemeLight}>
        <LoginCon>
          <Logo alt="website logo" src={logoUrl} />
          <Form onSubmit={onSubmitForm}>
            <LoginInputCon>
              <Label htmlFor="username">USERNAME</Label>
              <Input
                id="username"
                type="text"
                className="login-input"
                placeholder="Username"
                value={name}
                onChange={onChangeName}
              />
            </LoginInputCon>
            <LoginInputCon>
              <Label htmlFor="password">PASSWORD</Label>
              <PasswordInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder="Password"
                onChange={onChangePassword}
              />
            </LoginInputCon>
            <CheckBoxCon>
              <CheckBoxInput
                id="show"
                className="login-checkbox-input"
                type="checkbox"
                onChange={onChangeCheckbox}
              />
              <Label htmlFor="show">Show Password</Label>
            </CheckBoxCon>
            <Button type="submit">Login</Button>

            {isError && (
              <p style={{ color: '#ff0000', fontSize: '10px' }}>*{errorMsg}</p>
            )}
          </Form>
        </LoginCon>
      </LoginCard>
    </LoginBg>
  );
}

export default Login;
