import styled from 'styled-components';

export const Title = styled.p`
  color: ${(props) => (props.isThemeLight ? '#181818' : '#f9f9f9')};
  font-family: Roboto;
  font-size: 10px;
  margin-bottom: 6px;
  margin-top: 6px;
`;
export const ChannelName = styled.p`
  color: #7e858e;
  font-family: Roboto;
  font-size: 15px;
  margin: 0px;
`;

export const Time = styled.p`
  font-size: 10px;
  margin: 4px;
`;
export const Count = styled.p`
  font-size: 10px;
  margin: 4px;
`;
export const ViewsDateRow = styled.div`
  display: flex;
  color: #7e858e;
`;

export const VideoDetails = styled.div``;
export const VideoChannelLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-right: 12px;
`;
export const VideoChannelCon = styled.div``;

export const VideoDetailsCon = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: flex-start;
`;
export const VideoImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const VideoImgCon = styled.div`
  width: 100%;
  height: 70%;
   @media screen and (max-width:767px){
    width:100%;
    height:70%;
  }
  @media screen and (min-width: 768px) {

  @media (orientation: portrait) {
     width:100%;
     height:70%;
  }

`;
export const VideoCardCon = styled.li`
  width: 340px;
  height: 350px;
  background-color: transparent;
  margin: 20px;
  list-style-type: none;
  margin-left: 0px;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 300px;
  }
  @media screen and (min-width: 768px) {
    @media (orientation: portrait) {
      width: 280px;
      height: 330px;
    }

    @media (orientation: landscape) {
      width: 260px;
      height: 330px;
    }
  }
`;
