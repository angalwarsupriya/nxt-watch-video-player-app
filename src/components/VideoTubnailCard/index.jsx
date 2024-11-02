import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  TrendingVideoTubnailCon,
  TrendingVideoTubnailImg,
  TrendingVideoTubnailTitle,
  ChannelName,
  Con,
  Views,
  Row,
  Time,
} from './styledComponent';

const VideoTubnailCard = (props) => {
  const isThemeLight = useSelector((store) => store.themeStatus.isThemeLight);
  const { eachTrendingVideo } = props;
  const { id } = eachTrendingVideo;
  const speficDate = new Date(eachTrendingVideo.publishedAt);
  const now = new Date();

  const milliSeconds = now - speficDate;
  const seconds = Math.floor(milliSeconds / 1000);
  const minuts = Math.floor(seconds / 60);
  const hours = Math.floor(minuts / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  return (
    <Link
      to={`/videos/${id}`}
      style={{ height: '100%', width: '100%', textDecoration: 'none' }}
    >
      <TrendingVideoTubnailCon>
        <TrendingVideoTubnailImg
          src={eachTrendingVideo.thumbnailUrl}
          alt="video thumbnail"
        />
        <Con>
          <TrendingVideoTubnailTitle isThemeLight={isThemeLight}>
            {eachTrendingVideo.title}
          </TrendingVideoTubnailTitle>

          <ChannelName style={{ color: '#7e858e' }}>
            {eachTrendingVideo.channel.name}
          </ChannelName>
          <Row>
            <Views style={{ color: '#7e858e' }}>
              {eachTrendingVideo.viewCount} views
            </Views>
            <Time style={{ color: '#7e858e' }}>
              {eachTrendingVideo.publishedAt}
            </Time>
          </Row>
        </Con>
      </TrendingVideoTubnailCon>
    </Link>
  );
};
export default VideoTubnailCard;
