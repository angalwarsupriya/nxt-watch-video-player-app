import styled from 'styled-components';

export const LoginBg = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isThemeLight ? '#ffffff' : '#212121')};
`;

export const LoginCard = styled.div`
  width: 60%;
  height: 33%;
  box-shadow:${(props) => (props.isThemeLight ? '0px 2px 6px 12px #f1f5f9;' : '')} 
  border-radius: 20px;
  background-color:${(props) => (props.isThemeLight ? '#ffffff' : '#181818')};
  @media (min-width: 768px) {
    @media  (orientation: portrait) {
    height: 35%;
    width: 46%;
  }
    @media  (orientation: landscape){
     height: 50%;
     width: 30%;
    }
}
`;
export const LoginCon = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.img`
  width: 30%;
  margin-bottom: 0%;
`;
export const Form = styled.form`
  width: 80%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const LoginInputCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
export const Label = styled.label`
  font-family: Roboto;
  margin-top: 8x;
  margin-bottom: 2px;
  color: ${(props) => (props.isThemeLight ? '#606060' : '#ffffff')};
  @media (min-width: 768px) {
    font-size: 11px;
  }
`;
export const Input = styled.input`
  height: 26px;
  width: 90%;
  font-size: 10px;
  margin-bottom: 20px;
  outline: none;
  background-color: transparent;
  color: ${(props) => (props.isThemeLight ? '#181818' : '#ffffff')};
  @media (min-width: 768px) {
    height: 32px;
    width: 100%;
    font-size: 13px;
  }
`;
export const PasswordInput = styled.input`
  height: 26px;
  width: 90%;
  font-size: 9px;
  margin-bottom: 20px;
  outline: none;
  background-color: transparent;
  @media (min-width: 768px) {
    height: 32px;
    width: 100%;
    font-size: 13px;
  }
`;
export const CheckBoxCon = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  background-color: transparent;
`;
export const CheckBoxInput = styled.input`
  height: 18px;
  width: 18px;
  outline: none;
  border: 1px solid black;
  @media (min-width: 768px) {
    height: 18px;
    width: 18px;
  }
`;
export const Button = styled.button`
  height: 30px;
  width: 100%;
  background-color: #3b82f6;
  font-size: 12px;
  font-family: Roboto;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  margin-top: 6%;
  text-align: center;
  color: '#ffffff';
  @media (min-width: 768px) {
    height: 40px;
    font-size: 10px;
  }
`;
