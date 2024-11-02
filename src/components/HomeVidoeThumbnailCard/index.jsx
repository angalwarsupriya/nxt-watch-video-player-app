import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  VideoCardCon,
  VideoImgCon,
  VideoImg,
  VideoDetailsCon,
  VideoChannelCon,
  VideoChannelLogo,
  VideoDetails,
  Title,
  ChannelName,
  ViewsDateRow,
  Count,
  Time,
} from './styledComponent';

const VideoCard = (props) => {
  const isThemeLight = useSelector((store) => store.themeStatus.isThemeLight);
  const { each } = props;

  const { id, publishedAt, thumbnailUrl, title, viewCount, channel } = each;
  const speficDate = new Date(publishedAt);
  const now = new Date();

  const milliSeconds = now - speficDate;
  const seconds = Math.floor(milliSeconds / 1000);
  const minuts = Math.floor(seconds / 60);
  const hours = Math.floor(minuts / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  return (
    <Link to={`/videos/${id}`} style={{ textDecoration: 'none' }}>
      <VideoCardCon isThemeLight={isThemeLight}>
        <VideoImgCon>
          <VideoImg alt="video thumbnail" src={thumbnailUrl} />
        </VideoImgCon>
        <VideoDetailsCon>
          <VideoChannelCon>
            <VideoChannelLogo
              alt="channel logo"
              src={channel.profile_image_url}
            />
          </VideoChannelCon>

          <VideoDetails>
            <Title isThemeLight={isThemeLight}>{title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <ViewsDateRow isThemeLight={isThemeLight}>
              <Count>{viewCount} Views</Count>
              <Time>.{years} years ago</Time>
            </ViewsDateRow>
          </VideoDetails>
        </VideoDetailsCon>
      </VideoCardCon>
    </Link>
  );
};
export default VideoCard;
