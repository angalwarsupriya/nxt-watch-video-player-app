import styled from 'styled-components';

export const Time = styled.p`
  font-size: 15px;
  color: black;
  margin-left: 8px;
  margin-top: 0px;
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
`;
export const Views = styled.p`
  font-size: 12px;
  line-height: 3px;
  margin-top: 0px;
  color: #ffffff;

  @media (width >= 768px) {
    font-size: 14px;
  }
`;
export const ChannelName = styled.p`
  font-size: 12px;
  line-height: 10px;
  color: #ffffff;
  @media (width >= 768px) {
    font-size: 14px;
  }
`;

export const Con = styled.div`
  padding-left: 5%;
`;
export const TrendingVideoTubnailTitle = styled.p`
  font-size: 13px;
  color: #ffffff;
  color: ${(props) => (props.isThemeLight ? '#231f20' : '#f1f1f1')};
  @media (width >= 768px) {
    font-size: 16px;
  }
`;

export const TrendingVideoTubnailImg = styled.img`
  width: 100vw;
  height: 60%;
  @media (width >= 768px) {
    width: 340px;
    height: 100%;
  }
`;

export const TrendingVideoTubnailCon = styled.li`
  margin-left: 0px;
  width: 100%;
  height: 25vh;
  margin: 10px;
  display: flex;
  flex-direction: column;
  @media (width >= 768px) {
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 30vh;
  }
`;
