import { useSelector } from 'react-redux';
import {
  NotFoundImg,
  NotFoundPageCon,
  NotFoundBg,
  Title,
  Text,
} from './styledComponent';
import Header from '../Header';

const NotFound = () => {
  const isThemeLight = useSelector((store) => store.themeStatus.isThemeLight);
  const imgUrl = isThemeLight
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png';
  return (
    <NotFoundPageCon isThemeLight={isThemeLight}>
      <Header />
      <NotFoundBg>
        <NotFoundImg src={imgUrl} alt="not found" />
        <Title
          isThemeLight={isThemeLight}
          //style={{color: isThemeLight ? '#231f20' : '#f1f1f1'}}
        >
          Page Not Found
        </Title>
        <Text isThemeLight={isThemeLight}>
          we are sorry, the page you requested could not be found.
        </Text>
      </NotFoundBg>
    </NotFoundPageCon>
  );
};
export default NotFound;
