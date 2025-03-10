import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import SideBar from '../SideBar';

import Cookies from 'js-cookie';
import { IoCloseSharp } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';
import { ThreeDots } from 'react-loader-spinner';

import HomeVidoeThumbnailCard from '../HomeVidoeThumbnailCard';

import {
  VideoUl,
  VideosBgCon,
  HomeBgCon,
  HomeCon,
  HomeResult,
  SearchIconBtn,
  Input,
  InputCon,
  HomeRightCon,
  BannerBtn,
  BannerText,
  BabberRow,
  BannerCon,
  CloseBtn,
  AppLogo,
  Bottomcon,
  NoResultViewCon,
  NoVideosImg,
  NoVideosHea,
  NoVideosDis,
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

function Home() {
  const jwtToken = Cookies.get('jwt_token');
  const navigate = useNavigate();
  if (jwtToken === undefined) {
    navigate('/login');
  }
  const isThemeLight = useSelector((store) => store.themeStatus.isThemeLight);

  const [allVideosList, setAllVideosList] = useState([]);
  const [pageStatus, setPageStatus] = useState('INITIAL');
  const [searchString, changeSearchString] = useState('');
  const [isBannerConsist, setBannerConsist] = useState(true);

  const getAllViews = async () => {
    setPageStatus(status.loading);
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchString}`;

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
      if (jsData.length === 0) {
        setPageStatus(status.empty);
      } else {
        setPageStatus(status.success);
        setAllVideosList(jsData);
      }
    } else {
      setPageStatus(status.failure);
    }
  };

  // on click banner close btn

  const onClickBannerCloseBtn = () => {
    setBannerConsist(false);
  };

  // HANDLING INPUT EVENT ON EVERY CHANGE
  const onChangeInput = (event) => {
    changeSearchString(event.target.value);
  };

  // COMPONENT DIDMOUNT METHOD CALLS AFTER FIRST RENDER
  useEffect(() => {
    (async function () {
      getAllViews();
    })();
  }, []);

  // HANGLING BUTTON EVENT ON RETRY
  const onClickRetryBtn = () => {
    getAllViews();
  };

  // display loading view
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
  // NO RESULTS VIEW WHEN SEARCH RESULTS ARE EMPTHY
  const noResultView = () => {
    return (
      <NoResultViewCon>
        <NoVideosImg
          alt="no videos"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        />
        <NoVideosHea isThemeLight={isThemeLight}>
          No Search results found
        </NoVideosHea>
        <NoVideosDis>
          Try different key words or remove search filter
        </NoVideosDis>
        <RetryBtn onClick={onClickRetryBtn}>Retry</RetryBtn>
      </NoResultViewCon>
    );
  };

  // DISPLAY FAILURE VIEW
  const failureView = () => {
    const failureImg = isThemeLight
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png';

    const clickRetryBtn = () => {
      getAllViews();
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
      <VideosBgCon>
        <VideoUl>
          {allVideosList.map((each) => (
            <HomeVidoeThumbnailCard each={each} key={each.id} />
          ))}
        </VideoUl>
      </VideosBgCon>
    );
  };
  // DISPLAY VIEW BASED ON PAGE STATUS USING SWITCH
  const displayViewBasedOnStatus = () => {
    switch (pageStatus) {
      case status.loading:
        return loadingView();
      case status.empty:
        return noResultView();
      case status.failure:
        return failureView();
      case status.success:
        return successView();
      default:
        return null;
    }
  };

  return (
    <HomeBgCon data-testid="home" isThemeLight={isThemeLight}>
      <Header />
      <HomeCon>
        <SideBar />
        <HomeRightCon>
          <BannerCon data-testid="banner" heightMesure={isBannerConsist}>
            <BabberRow>
              <AppLogo
                alt="nxt watch logo"
                className="banner-logo-img"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              />
              <CloseBtn data-testid="close" onClick={onClickBannerCloseBtn}>
                <IoCloseSharp className="close-img" />
              </CloseBtn>
            </BabberRow>
            <BannerText>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerText>
            <BannerBtn>GET IT NOW</BannerBtn>
          </BannerCon>
          <Bottomcon heightMesure={isBannerConsist}>
            <InputCon>
              <Input
                type="search"
                placeholder="Search"
                onChange={onChangeInput}
                isThemeLight={isThemeLight}
              ></Input>
              <SearchIconBtn
                type="button"
                onClick={getAllViews}
                data-testid="searchButton"
              >
                <IoIosSearch style={{ color: '#909090', fontSize: '20px' }} />
              </SearchIconBtn>
            </InputCon>
            <HomeResult heightMesure={isBannerConsist}>
              {displayViewBasedOnStatus()}
            </HomeResult>
          </Bottomcon>
        </HomeRightCon>
      </HomeCon>
    </HomeBgCon>
  );
}

export default Home;
