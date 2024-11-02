import styled from 'styled-components';

export const WorldWide = styled.p`
  font-size: 12px;
  margin-left: 10px;
`;

export const Whatching = styled.p`
  font-size: 12px;
`;
export const Title = styled.p`
  font-size: 14px;
  color: black;
  margin-top: 2px;
  margin-bottom: 0px;
  color: ${(props) => (props.isThemeLight ? '#231f20' : '#f1f1f1')};
`;
export const GamingTumbnailDetailsRow = styled.div`
  height: 10%;
  width: 100%;
  color: #7e858e;
  @media (width>= 768px) {
    display: flex;
  }
`;
export const GamingTumbnaiDeatilsCon = styled.div`
  height: 20%;
  width: 100%;
`;
export const GamingTumbnaiLImg = styled.img`
  height: 80%;
  width: 100%;
`;

export const GamingTumbnailCon = styled.li`
  height: 30%px;
  width: 90%;
  margin: 10px;
  @media (width>=768px) {
    width: 17vw;
  }
`;
