import styled from 'styled-components';

export const Img = styled.img`
  width: 60%;
  height: 50%;
  margin-bottom: 4%;
  @media (width>=768px) {
    height: 60%;
    width: 30%;
  }
`;

export const Para = styled.p`
  font-size: 17px;
  font-family: Roboto;
  text-align: center;
  color: #7e858e;
`;

export const Hea = styled.h1`
  font-size: 23px;
  font-family: Roboto;
  text-align: center;
  margin-bottom: 5px;
  margin-top: 5px;
  color: ${(props) => (props.isThemeLight ? '#212121' : '#f1f1f1')};
`;

export const Con = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BgCon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EmptyViewCon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const VideoUl = styled.ul`
  height: 100%;
  width: 100%;
  padding-left: 0px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding-top: 3%;
  padding-bottom: 0px;
`;
export const TypeHea = styled.h1`
  font-size: 25px;
  margin-left: 10px;
  color: ${(props) => (props.isThemeLight ? '#0f0f0f' : '#ffffff')};
`;

export const DisplayBottomCon = styled.div`
  height: 80%;
  width: 100%;
`;
export const LogoRoundCon = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isThemeLight ? '#d7dfe9' : '#0f0f0f')};
`;

export const LogoCon = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  margin: 0px;
  padding-left: 30px;
  background-color: ${(props) => (props.isThemeLight ? '#f4f4f4' : '#212121')};
`;
export const RightCon = styled.div`
  height: 88vh;
  width: 100vw;

  @media (width>=768px) {
    width: 80;
  }
`;
export const VideosBgCon = styled.div`
  height: 88vh;
  width: 100vw;
  display: flex;
`;
export const TotalCon = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => (props.isThemeLight ? '#f9f9f9' : '#0f0f0f')};
`;
