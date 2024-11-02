import styled from 'styled-components';

export const TypeHea = styled.h1`
  font-size: 25px;
  margin-left: 10px;
  color: ${(props) => (props.isThemeLight ? '#0f0f0f' : '#ffffff')};
`;

export const GaminVideoUl = styled.ul`
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;

  overflow-y: scroll;
  @media (width < 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  @media (width>= 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
export const GamingVideosBgCon = styled.div`
height:100%;
width:100%;
padding-0px;
`;

export const LogoRoundCon = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isThemeLight ? '#d7dfe94' : '#0f0f0f')};
`;
export const DisplayBottomCon = styled.div`
  height: 80%;
  width: 100%;
  padding: 30px;
`;
export const SiYoutubegaming = styled.img`
  width: 50px;
`;

export const GamingLogoCon = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  margin: 0px;
  padding-left: 4%;
  background-color: ${(props) => (props.isThemeLight ? '#f4f4f4' : '#181818')};
`;
export const GamingRightCon = styled.div`
  height: 88vh;
  width: 100vw;

  @media (width>=768px) {
    width: 80vw;
  }
`;
export const GamingBgCon = styled.div`
  height: 88vh;
  width: 100vw;
  display: flex;
`;

export const GamingRouteBgCon = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => (props.isThemeLight ? '#f9f9f9' : '#0f0f0f')};
`;
export const RetryBtn = styled.button`
  height: 30px;
  width: 100px;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 5px;
`;

export const FailureImg = styled.img`
  width: 30%;
  height: 60%;
`;

export const FailurePara = styled.p`
  font-size: 17px;
  font-family: Roboto;
  text-align: center;
  color: #7e858e;
`;

export const FailureHea = styled.h1`
  font-size: 23px;
  font-family: Roboto;
  text-align: center;
  margin-bottom: 0px;
  color: ${(props) => (props.isThemeLight ? '#383838' : '#f1f1f1')};
`;

export const FailureCon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//// loding view
export const LoadingCon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
