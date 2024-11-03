import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SiYoutubegaming } from 'react-icons/si';
import { ThreeDots } from 'react-loader-spinner';

import Header from '../Header';
import SideBar from '../SideBar';
import GamingVideoTumbnail from '../GamingVideoTumbnail';

import {
  GamingRouteBgCon,
  GamingBgCon,
  GamingRightCon,
  GamingLogoCon,
  LogoRoundCon,
  DisplayBottomCon,
  GamingVideosBgCon,
  GaminVideoUl,
  TypeHea,
  FailureCon,
  FailureImg,
  FailureHea,
  FailurePara,
  RetryBtn,
  LoadingCon,
} from './styledComponent';

const status = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
};

function Gaming() {
  const isThemeLight = useSelector((store) => store.themeStatus.isThemeLight);
  const [allVideosList, setAllVideosList] = useState([]);
  const [pageStatus, setPageStatus] = useState(status.initial);

  useEffect(() => {
    (async function () {
      getGamingVideosData();
    })();
  }, []);

  const getGamingVideosData = async () => {
    setPageStatus(status.loading);
    const jwtToken = Cookies.get('jwt_token');

    const apiUrl = 'https://apis.ccbp.in/videos/gaming';

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();

    const jsData = data.videos.map((eachVideo) => ({
      id: eachVideo.id,
      thumbnailUrl: eachVideo.thumbnail_url,
      title: eachVideo.title,
      viewCount: eachVideo.view_count,
    }));

    if (response.ok) {
      setPageStatus(status.success);
      setAllVideosList(jsData);
    } else {
      setPageStatus(status.failure);
    }
  };

  const loadingView = () => (
    <LoadingCon>
      <ThreeDots
        visible={true}
        height="60"
        width="60"
        color="#64748b"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
      />
    </LoadingCon>
  );

  const failureView = (isThemeLight) => {
    const failureImg = isThemeLight
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png';

    const clickRetryBtn = () => {
      getGamingVideosData();
    };
    return (
      <FailureCon>
        <FailureImg src={failureImg} alt="failure view" />
        <FailureHea isThemeLight={isThemeLight}>
          Oops! Something Went Wrong
        </FailureHea>
        <FailurePara>
          We are having some trouble to complete your request. Please try again.
        </FailurePara>
        <RetryBtn onClick={clickRetryBtn}>Retry</RetryBtn>
      </FailureCon>
    );
  };

  const successView = () => {
    return (
      <GamingVideosBgCon>
        <GaminVideoUl>
          {allVideosList.map((each) => (
            <GamingVideoTumbnail each={each} key={each.id} />
          ))}
        </GaminVideoUl>
      </GamingVideosBgCon>
    );
  };

  const displayViewBaseOnStatus = () => {
    switch (pageStatus) {
      case status.loading:
        return loadingView();
      case status.failure:
        return failureView();
      case status.success:
        return successView();
      default:
        null;
    }
  };

  return (
    <GamingRouteBgCon data-testid="gaming" isThemeLight={isThemeLight}>
      <Header />
      <GamingBgCon>
        <SideBar />
        <GamingRightCon>
          <GamingLogoCon data-testid="banner" isThemeLight={isThemeLight}>
            <LogoRoundCon isThemeLight={isThemeLight}>
              <SiYoutubegaming style={{ color: '#ff0000', fontSize: '40px' }} />
            </LogoRoundCon>
            <TypeHea isThemeLight={isThemeLight}>Gaming</TypeHea>
          </GamingLogoCon>
          <DisplayBottomCon>{displayViewBaseOnStatus()}</DisplayBottomCon>
        </GamingRightCon>
      </GamingBgCon>
    </GamingRouteBgCon>
  );
}

export default Gaming;
