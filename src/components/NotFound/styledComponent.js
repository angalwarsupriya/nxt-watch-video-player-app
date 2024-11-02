import styled from 'styled-components';

export const Text = styled.p`
  font-family: Roboto;
  font-size: 14px;
  margin-bottom: 6px;
  margin-top: 10px;
  color: ${(props) => (props.isThemeLight ? '#181818' : '#cbd5e1')};
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-size: 19px;
  margin-bottom: 6px;
  margin-top: 15px;
  text-align: center;
  color: ${(props) => (props.isThemeLight ? '#231f20' : '#f1f1f1')};
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 30px;
  }
`;
export const NotFoundImg = styled.img`
  width: 55%;
  height: 40%;
  @media screen and (min-width: 992px) {
    width: 30%;
    height: 50%;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 50%;
  }
`;

export const NotFoundBg = styled.div`
  height: 88vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NotFoundPageCon = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => (props.isThemeLight ? '#f9f9f9' : '#181818')};
`;
