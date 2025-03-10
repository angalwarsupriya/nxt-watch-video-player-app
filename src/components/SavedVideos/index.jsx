import { HiFire } from 'react-icons/hi';
import VideoTubnailCard from '../VideoTubnailCard';
import Header from '../Header';
import SideBar from '../SideBar';

import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  TotalCon,
  RightCon,
  LogoCon,
  LogoRoundCon,
  TypeHea,
  DisplayBottomCon,
  EmptyViewCon,
  VideosBgCon,
  VideoUl,
  Con,
  Hea,
  Para,
  Img,
  BgCon,
} from './styledComponent';

const status = {
  success: 'SUCCESS',
  empty: 'EMPTY',
};

function SavedVideos() {
  const jwtToken = Cookies.get('jwt_token');
  const navigate = useNavigate();
  if (jwtToken === undefined) {
    navigate('/login');
  }
  const isThemeLight = useSelector((store) => store.themeStatus.isThemeLight);
  const savedVideosList = useSelector(
    (store) => store.savedVideosListStatus.savedVideosList,
  );
  const emptyFileView = () => {
    return (
      <EmptyViewCon>
        <Con>
          <Img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <Hea isThemeLight={isThemeLight}>No saved videos found</Hea>
          <Para>You can save your videos while watching them</Para>
        </Con>
      </EmptyViewCon>
    );
  };

  const successView = () => {
    return (
      <BgCon>
        <VideoUl>
          {savedVideosList.map((eachTrendingVideo) => (
            <VideoTubnailCard
              key={eachTrendingVideo.id}
              id={eachTrendingVideo.id}
              eachTrendingVideo={eachTrendingVideo}
            />
          ))}
        </VideoUl>
      </BgCon>
    );
  };

  const displayViewBaseOnStatus = () => {
    if (savedVideosList.length === 0) {
      return emptyFileView();
    }
    return successView();
  };

  return (
    <TotalCon data-testid="trending" isThemeLight={isThemeLight}>
      <Header />
      <VideosBgCon>
        <SideBar />
        <RightCon>
          <LogoCon data-testid="banner" isThemeLight={isThemeLight}>
            <LogoRoundCon isThemeLight={isThemeLight}>
              <HiFire style={{ color: '#ff0000', fontSize: '40px' }} />
            </LogoRoundCon>
            <TypeHea isThemeLight={isThemeLight}>Saved Videos</TypeHea>
          </LogoCon>
          <DisplayBottomCon>{displayViewBaseOnStatus()}</DisplayBottomCon>
        </RightCon>
      </VideosBgCon>
    </TotalCon>
  );
}

export default SavedVideos;
