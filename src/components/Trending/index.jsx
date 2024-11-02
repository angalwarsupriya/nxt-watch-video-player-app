import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { HiFire } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import VideoTubnailCard from '../VideoTubnailCard';
import Header from '../Header';
import SideBar from '../SideBar';

import {
  TrendingTotalCon,
  TrendingBgCon,
  TrendingRightCon,
  TrendingLogoCon,
  DisplayBottomCon,
  LogoRoundCon,
  TrendingVideosBgCon,
  TrendingVideoUl,
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
  empty: 'EMPTY',
};

// trending vidieos list
console.log();
function Trending() {
  const isThemeLight = useSelector((store) => store.themeStatus.isThemeLight);

  const [allVideosList, setAllVideosList] = useState([]);
  const [pageStatus, setPageStatus] = useState(status.initial);

  const failureImg =
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png';

  // GET TRENDING VIDIEOS LIST
  const getTrendingVideosData = async () => {
    setPageStatus(status.loading);
    const jwtToken = Cookies.get('jwt_token');

    const apiUrl = 'https://apis.ccbp.in/videos/trending';

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
      publishedAt: eachVideo.published_at,
      thumbnailUrl: eachVideo.thumbnail_url,
      channel: eachVideo.channel,
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

  // DISPLAY LOADING VIEW
  const loadingView = () => (
    <LoadingCon data-testid="loader">
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

  // DISPLAY FAILURE VIEW

  const failureView = (isThemeLight) => {
    const failureImg = isThemeLight
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png';

    const clickRetryBtn = () => {
      getTrendingVideosData();
    };
    return (
      <FailureCon>
        <FailureImg src={failureImg} alt="failure view" />
        <FailureHea isThemeLight={isThemeLight}>
          Oops! Something Went Wrong
        </FailureHea>
        <FailurePara isThemeLight={isThemeLight}>
          We are having some trouble to complete your request. Please try again.
        </FailurePara>
        <RetryBtn onClick={clickRetryBtn}>Retry</RetryBtn>
      </FailureCon>
    );
  };

  // DISPLAY SUCCESS VIEW
  const successView = () => {
    return (
      <TrendingVideosBgCon>
        <TrendingVideoUl>
          {allVideosList.map((eachTrendingVideo) => (
            <VideoTubnailCard
              key={eachTrendingVideo.id}
              id={eachTrendingVideo.id}
              eachTrendingVideo={eachTrendingVideo}
            />
          ))}
        </TrendingVideoUl>
      </TrendingVideosBgCon>
    );
  };

  // DISPLAY VIEW BASED ON THE STATE USING SWITCH

  const displayViewBaseOnStatus = () => {
    switch (pageStatus) {
      case status.loading:
        return loadingView();
      case status.failure:
        return failureView();
      case status.success:
        return successView();
      default:
        return null;
    }
  };
  // COMPONENTDIDMOUNT METHOD WILL CALL AFTER FIRST RENDER

  useEffect(() => {
    (async function () {
      getTrendingVideosData();
    })();
  }, []);

  return (
    <TrendingTotalCon data-testid="trending" isThemeLight={isThemeLight}>
      <Header />
      <TrendingBgCon>
        <SideBar />
        <TrendingRightCon>
          <TrendingLogoCon data-testid="banner" isThemeLight={isThemeLight}>
            <LogoRoundCon isThemeLight={isThemeLight}>
              <HiFire style={{ color: '#ff0000', fontSize: '40px' }} />
            </LogoRoundCon>
            <TypeHea isThemeLight={isThemeLight}>Trending</TypeHea>
          </TrendingLogoCon>
          <DisplayBottomCon>{displayViewBaseOnStatus()}</DisplayBottomCon>
        </TrendingRightCon>
      </TrendingBgCon>
    </TrendingTotalCon>
  );
}
export default Trending;
