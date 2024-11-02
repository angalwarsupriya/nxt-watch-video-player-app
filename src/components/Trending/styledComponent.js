import styled from 'styled-components';

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;
export const TypeHea = styled.h1`
  font-size: 25px;
  margin-left: 10px;
  color: ${(props) => (props.isThemeLight ? '#0f0f0f' : '#ffffff')};
`;

export const TrendingVideoUl = styled.ul`
  height: 100%;
  width: 100%;
  margin: 0px;
  padding-left: 0px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;

  padding-top: 3%;
  padding-bottom: 0px;
`;
export const TrendingVideosBgCon = styled.div`
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
`;
export const TrendingLogoCon = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  margin: 0px;
  padding-left: 30px;
  background-color: ${(props) => (props.isThemeLight ? '#f4f4f4' : '#181818')};
`;

export const TrendingRightCon = styled.div`
  height: 88vh;
  width: 100vw;

  @media (width>=768px) {
    width: 80vw;
  }
`;

export const TrendingBgCon = styled.div`
  height: 88vh;
  width: 100vw;
  display: flex;
`;

export const TrendingTotalCon = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => (props.isThemeLight ? '#f9f9f9' : '#0f0f0f')};
`;
export const RetryBtn = styled.button`
  padding: 10px;
  width: 100px;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    width: 130px;
  }
`;
export const LoadingCon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
export const FailureImg = styled.img`
  width: 50%;
  height: 30%;
  @media screen and (min-width: 768px) {
    width: 30%;
    height: 50%;
  }
`;

export const FailurePara = styled.p`
  font-size: 17px;
  font-family: Roboto;
  text-align: center;
  color: ${(props) => (props.isThemeLight ? 'black' : '#e2e8f0')};
`;

export const FailureHea = styled.h1`
  font-size: 23px;
  font-family: Roboto;
  text-align: center;
  margin-bottom: 0px;
  color: ${(props) => (props.isThemeLight ? 'black' : 'black')};
`;

export const FailureCon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
