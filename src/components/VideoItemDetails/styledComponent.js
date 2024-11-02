import styled from 'styled-components';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { RiMenuAddLine } from 'react-icons/ri';

export const SavedIcon = styled(RiMenuAddLine)`
  font-size: 16px;
  @media screen (min-width) {
    font-size: 20px;
  }
`;
export const Span = styled.span`
  font-size: 15px;
  margin-top: 10px;
  margin-left: 5px;
  @media screen (min-width) {
    font-size: 20px;
  }
`;
export const LikeIcon = styled(AiOutlineLike)`
  font-size: 16px;
  @media screen (min-width) {
    font-size: 20px;
  }
`;
export const DislikeIcon = styled(AiOutlineDislike)`
  font-size: 16px;
  @media screen (min-width) {
    font-size: 20px;
  }
`;
export const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0px;
  margin-right: 20px;
`;

export const DislikButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0px;
  margin-right: 10px;
`;

export const SaveButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const Logo = styled.img`
  margin-right: 10px;
`;
export const BottomDetailsCon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
export const Saved = styled.div`
  color: #7e858e;
  font-family: Roboto;
  font-size: 12px;
  margin-bottom: 0px;
`;
export const Dislike = styled.div`
  color: #7e858e;
  font-family: Roboto;
  font-size: 12px;
  margin-bottom: 6px;
  margin-bottom: 0px;
`;
export const Like = styled.div`
  color: #7e858e;
  font-family: Roboto;
  font-size: 12px;
  margin-bottom: 0px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;
export const RightCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LeftCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ViwsLikesCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 20%;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const HorizontalLine = styled.hr`
  width: 100%;
  color: #7e858e;
  height: 5px;
`;
export const Text = styled.p`
  font-family: Roboto;
  font-size: 13px;
  margin-right: 6px;
  margin-bottom: 0px;
  color: #7e858e;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const Title = styled.p`
  font-family: Roboto;
  font-size: 13px;
  margin-bottom: 5px;
  margin-top: 0px;
  color: ${(props) => (props.isThemeLight ? '#231f20' : '#f1f1f1')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
export const Video = styled.video`
  height: 50%;
  width: 80%;
`;
export const VideoItemDetailsBg = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;

export const VideoItemDetailsRightCon = styled.div`
  height: 88vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    width: 80vw;
  }
`;
export const VideoItemDetailsCon = styled.div`
  height: 88vh;
  width: 100vw;
  display: flex;
`;
export const BottomCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const VideoItemDetailsPage = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => (props.isThemeLight ? '#f9f9f9' : '#181818')};
  box-sizing: border-box;
`;
export const RetryBtn = styled.button`
  padding: 8px;
  width: 80px;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 5px;
`;

export const FailureImg = styled.img`
  width: 25%;
  height: 50%;
`;

export const FailurePara = styled.p`
  font-size: 17px;
  font-family: Roboto;
  text-align: center;
  color: #7e858e;
  margin-top: 10px;
`;

export const FailureHea = styled.h1`
  font-size: 23px;
  font-family: Roboto;
  text-align: center;
  margin-bottom: 0px;
  margin-top: 30px;
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
