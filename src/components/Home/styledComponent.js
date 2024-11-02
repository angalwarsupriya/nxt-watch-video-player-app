import styled from 'styled-components';

// satring bg-con for home page

export const HomeBgCon = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => (props.isThemeLight ? '#f9f9f9' : '#181818')};
  box-sizing: border-box;
`;
export const HomeCon = styled.div`
  height: 90;
  width: 100vw;
  display: flex;
`;

export const HomeRightCon = styled.div`
  height: 90vh;
  width: 100vw;
  box-sizing: border-box;
  @media (width>=768px) {
    width: 80vw;
  }
`;
// banner styles
export const BannerCon = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 20vh;
  background-size: cover;
  display: ${(props) => (props.heightMesure ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;
export const BabberRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const AppLogo = styled.img`
  width: 130px;
  height: 40px;
  @media screen and (min-width: 768px) {
    @media (orientation: portrait) {
      width: 150px;
      height: 40px;
    }
    @media screen and (orientation: landscape) {
      width: 120px;
      height: 25px;
      margin-bottom: 0px;
    }
  }
`;
export const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
  color: red;
  margin-right: 50px;
  font-size: 20px;
`;

export const BannerBtn = styled.button`
  color: #1e293b;
  font-family: Roboto;
  background-color: transparent;
  padding: 9px;
  text-align: start;
  border: 1px solid black;
  border-radus: 2px;
  font-size: 10px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    @media (orientation: landscap) {
      font-size: 14px;
      padding: 29px;
      margin-top: 0px;
    }
  }
`;
export const BannerText = styled.p`
  font-size: 15px;
  color: black;
  text-align: start;
  margin: 0px;
  margin-bottom: 4px;
`;

// bottom videos result stles

export const Bottomcon = styled.div`
  box-sizing: border-box;
  height: ${(props) => (props.heightMesure ? '70vh' : '90vh')};
  width: 100%;
`;
export const Input = styled.input`
  height: 32px;
  border: 1px solid;
  width: 80%;
  border-color: ${(props) => (props.isThemeLight ? ' #94a3b8' : '#e2e8f0')};
  background-color: transparent;
  color: #909090;
  outline: none;
  @media screen and (min-width: 768px) {
    @media (orientation: portrait) {
      height: 30px;
      width: 60%;
    }
    @media (orientation: landscap) {
      height: 30px;
      width: 40%;
    }
  }
`;
export const InputCon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  height: 5vh;
  padding-left: 20px;
  width: 100%;
  outline: none;
  color: #909090;
`;
export const SearchIconBtn = styled.button`
  height: 30.5px;
  box-modla: content-box;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  padding: 0px;
  background-color: #e2e8f0;
`;
export const HomeResult = styled.div`
  height: ${(props) => (props.heightMesure ? '62vh' : '82vh')};
  width: 100%;
  background-color: transparent;
  padding: 20px;
  box-sizing: border-box;
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

// no videos view styles

export const NoResultViewCon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const NoVideosImg = styled.img`
  width: 50%;
  height: 30%;
  margin-bottom: 4%;
  @media (width>=768px) {
    height: 40%;
    width: 30%;
  }
`;
export const NoVideosHea = styled.h1`
  font-size: 19px;
  font-family: Roboto;
  margin-bottom: 2px;
  color: ${(props) => (props.isThemeLight ? '#383838' : '#f1f1f1')};
`;

export const NoVideosDis = styled.p`
  font-size: 16px;
  font-family: Roboto;
  color: #7e858e;
  margin-top: 10px;
`;

// success view styles
export const VideoUl = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  overflow-y: scroll;
  box-sizing: border-box;
`;
export const VideosBgCon = styled.div`
height:100%;
width:100%;
padding-6px;

box-sizing: border-box;
`;

//failure styles
export const FailureCon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 0px;
`;

export const FailureImg = styled.img`
  width: 50%;
  height: 40%;
  @media screen and (min-width: 768px) {
    width: 30%;
    height: 45%;
  }
`;
export const FailureHea = styled.h1`
  font-size: 23px;
  font-family: Roboto;
  text-align: center;
  margin-bottom: 0px;
  color: ${(props) => (props.isThemeLight ? '#383838' : '#f1f1f1')};
`;
export const FailurePara = styled.p`
  font-size: 17px;
  font-family: Roboto;
  text-align: center;
  color: #7e858e;
  margin-top: 10px;
`;

export const RetryBtn = styled.button`
  padding: 6px;
  background-color: #3b82f6;
  color: #ffffff;
  width: 80px;
  border: none;
  border-radius: 5px;
`;
