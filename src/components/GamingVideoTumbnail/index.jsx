import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  GamingTumbnailCon,
  GamingTumbnaiLImg,
  GamingTumbnaiDeatilsCon,
  GamingTumbnailDetailsRow,
  Title,
  Whatching,
  WorldWide,
} from './styledComponent';

const GamingVideoTumbnail = (props) => {
  const isThemeLight = useSelector((store) => store.themeStatus.isThemeLight);
  const { each } = props;
  const { id } = each;
  return (
    <Link to={`/videos/${id}`} style={{ textDecoration: 'none' }}>
      <GamingTumbnailCon>
        <GamingTumbnaiLImg src={each.thumbnailUrl} alt="video thumbnail" />
        <GamingTumbnaiDeatilsCon>
          <Title isThemeLight={isThemeLight}>{each.title}</Title>
          <GamingTumbnailDetailsRow>
            <Whatching>{each.viewCount} Whatching</Whatching>
            <WorldWide>WorldWide</WorldWide>
          </GamingTumbnailDetailsRow>
        </GamingTumbnaiDeatilsCon>
      </GamingTumbnailCon>
    </Link>
  );
};
export default GamingVideoTumbnail;
