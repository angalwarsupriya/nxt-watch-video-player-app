import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import savedVideosListSlice from '../../reduxImplement/savedVideosListSlice';
import Cookies from 'js-cookie';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import SideBar from '../SideBar';
import Header from '../Header';

// IMPORTING STYLED COMPONENTS

import {
  VideoItemDetailsBg,
  VideoItemDetailsPage,
  VideoItemDetailsCon,
  VideoItemDetailsRightCon,
  Title,
  BottomCon,
  Text,
  LeftCon,
  RightCon,
  ViwsLikesCon,
  BottomDetailsCon,
  Logo,
  LikeButton,
  DislikButton,
  SaveButton,
  FailureCon,
  FailureImg,
  FailureHea,
  FailurePara,
  RetryBtn,
  HorizontalLine,
  LikeIcon,
  DislikeIcon,
  Span,
  SavedIcon,
} from './styledComponent';

const status = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
  empty: 'EMPTY',
};
const buttonStatus = {
  like: 'LIKE',
  dislike: 'DISLIKE',
  none: 'NONE',
};

const actions = savedVideosListSlice.actions;
const activeInactiveStatus = {
  active: true,
  inactive: false,
};
// STARTING COMPONENTS
function VideoItemDetails() {
  const isThemeLight = useSelector((store) => store.themeStatus.isThemeLight);
  const savedVideosList = useSelector(
    (store) => store.savedVideosListStatus.savedVideosList,
  );
  const dispatch = useDispatch();
  const [videoDetails, setVideoList] = useState({});
  const [pageStatus, setPageStatus] = useState(status.initial);
  const [like, setLike] = useState(buttonStatus.false);
  const [dislike, setDislike] = useState(buttonStatus.false);
  const [isSaved, setSaved] = useState(false);
  const { id } = useParams();

  const getVideoDetails = async () => {
    setPageStatus(status.loading);
    const jwtToken = Cookies.get('jwt_token');
    const apiUrl = `https://apis.ccbp.in/videos/${id}`;

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    // MODIFIENG DATA OBEJCT INTO CAMEL CASE

    const jsData = {
      id: data.video_details.id,
      publishedAt: data.video_details.published_at,
      thumbnailUrl: data.video_details.thumbnail_url,
      title: data.video_details.title,
      videoUrl: data.video_details.video_url,
      viewCount: data.video_details.view_count,
      description: data.video_details.description,
      channel: data.video_details.channel,
    };

    if (response.ok) {
      setPageStatus(status.success);
      setVideoList(jsData);
    } else {
      setPageStatus(status.failure);
    }
  };

  // DISPLAYING FAIL OR SUCCESS OR LOADING VIEWS BASED ON THE PAGE STATUS USING SWITCH DESISION MAKER

  // DISPLAY LOADING VIEW AT THE TIME DETAILS ARE FETCHING
  const loadingView = () => (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      data-testid="loader"
    >
      <ThreeDots
        visible={true}
        height="60"
        width="60"
        color="#64748b"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
      />
    </div>
  );

  // DISPLAY FAILURE VIEW WHEN FETCHING FAIL
  const failureView = () => {
    const failureImg = isThemeLight
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png';

    const clickRetryBtn = () => {
      getVideoDetails();
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

  // DISPLAY SUCCESS VIEW WHEN GETTING SUCCESSFULLY VIDIOES LIST

  const successView = () => {
    // ONCLICK EVENT HANDLING ON LIKE BUTTON
    const onClickLikeBtn = () => {
      if (like) {
        setLike(false);
      } else if (dislike) {
        setLike(true);
        setDislike(false);
      } else {
        setLike(true);
      }
    };

    // ONCLICK EVENT HANDLING ON DISLIKE BUTTON

    const onClickDislikeBtn = () => {
      if (dislike) {
        setDislike(false);
      } else if (like) {
        setDislike(true);
        setLike(false);
      } else {
        setDislike(true);
      }
    };

    // ONCLICK EVENT HANDLING ON ADD OR REMOVE  BUTTON

    const addOrRemoveVideo = () => {
      if (isSaved === false) {
        setSaved((preve) => !preve);
        var isSavedVideo = false;
        for (let i of savedVideosList) {
          if (i.id === videoDetails.id) {
            isSavedVideo = true;
          }
        }
        if (!isSavedVideo) {
          dispatch(actions.addVideoToList(videoDetails));
        }
      } else {
        setSaved((preve) => !preve);
        dispatch(actions.removeVideoFromList(videoDetails.id));
      }
    };

    // RETURNING  SUCCESS VIEW
    return (
      <VideoItemDetailsBg>
        <ReactPlayer
          controls
          url={videoDetails.videoUrl}
          height="50%"
          width="100%"
          style={{ margin: 20 }}
        />

        <BottomCon>
          <Title isThemeLight={isThemeLight}>{videoDetails.title}</Title>
          <ViwsLikesCon>
            <LeftCon>
              <Text>{videoDetails.viewCount} views</Text>
              <Text>5 years ago</Text>
            </LeftCon>
            <RightCon>
              <LikeButton
                type="button"
                onClick={onClickLikeBtn}
                style={{
                  color:
                    like === activeInactiveStatus.active
                      ? '#2563eb'
                      : '#64748b',
                }}
              >
                <LikeIcon />
                <Span>Like</Span>
              </LikeButton>

              <DislikButton
                type="button"
                onClick={onClickDislikeBtn}
            style={{
                  color:
                    dislike === activeInactiveStatus.active
                      ? '#2563eb'
                      : '#64748b',
                }}
              >
                <DislikeIcon />
                <Span>Dislike</Span>
              </DislikButton>

              <SaveButton
                type="button"
                onClick={addOrRemoveVideo}
                style={{
                  color:
                    isSaved === activeInactiveStatus.active
                      ? '#2563eb'
                      : '#64748b',
                }}
              >
                <SavedIcon /> <Span>{isSaved ? 'Saved' : 'Save'}</Span>
              </SaveButton>
            </RightCon>
          </ViwsLikesCon>
          <HorizontalLine />
          <BottomDetailsCon>
            <Logo
              src={videoDetails.channel.profile_image_url}
              height="40"
              width="40"
              alt="channel logo"
            />
            <div>
              <Title isThemeLight={isThemeLight}>
                {videoDetails.channel.name}
              </Title>
              <Text>{videoDetails.channel.subscriber_count} subscribers</Text>
              <Title isThemeLight={isThemeLight}>
                {videoDetails.description}
              </Title>
            </div>
          </BottomDetailsCon>
        </BottomCon>
      </VideoItemDetailsBg>
    );
  };
  // DISPLAYING FAIL OR SUCCESS OR LOADING VIEWS BASED ON THE PAGE STATUS USING SWITCH DESISION MAKER
  const displayBaseOnStatus = () => {
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
  useEffect(() => {
    getVideoDetails();
  }, []);

  // returning vidieo in detailed page
  return (
    <VideoItemDetailsPage isThemeLight={isThemeLight}>
      <Header />
      <VideoItemDetailsCon>
        <SideBar />
        <VideoItemDetailsRightCon>
          {displayBaseOnStatus()}
        </VideoItemDetailsRightCon>
      </VideoItemDetailsCon>
    </VideoItemDetailsPage>
  );
}

export default VideoItemDetails;
