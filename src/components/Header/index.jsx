import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
// themes
import { useSelector, useDispatch } from 'react-redux';
import themeSlice from '../../reduxImplement/themeSlice';
const actions = themeSlice.actions;
// importing icons from react-icins
import { useNavigate } from 'react-router-dom';
import { FiLogOut, FiSun, FiMenu } from 'react-icons/fi';
import { MdHome } from 'react-icons/md';
import { HiFire } from 'react-icons/hi';
import { SiYoutubegaming } from 'react-icons/si';
import { RiMenuAddLine } from 'react-icons/ri';
import { IoCloseSharp } from 'react-icons/io5';
import { FaMoon } from 'react-icons/fa';
//import react popup
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
//importing styles
import {
  HeaderCon,
  LogoImg,
  NavigatorItemsConInSm,
  NavigatorItemsConInLg,
  LinkBtn,
  ProfileImg,
  LogoutBtn,
  PopupContentCon,
  CloseBtn,
  PopupMenuCon,
  LinkNameCon,
  LinkName,
  LogoutPopupCon,
  LogoutPopHea,
  PopupBtntCon,
  LinkWrapCon,
} from './styledComponent';

function Header() {
  const [activeLink, setActiveLink] = useState('Home');
  const isThemeLight = useSelector((store) => store.themeStatus.isThemeLight);
  const dispatch = useDispatch();
  const popupBackgroundColor = isThemeLight ? '#ebebeb' : '#606060';
  const navigate = useNavigate();

  const imgUrl = isThemeLight
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png';

  const iconsColor = isThemeLight ? 'black' : '#ffffff';
  const confirmLogout = () => {
    Cookies.remove('jwt_token');
    navigate('/login');
  };
  const changeThemeStatus = () => {
    dispatch(actions.changeTheme());
  };

  const location = useLocation();

  const linkColor = isThemeLight ? '#616e7c' : '#f8fafc';
  const textLinkColor = isThemeLight ? 'black' : '#ffffff';
  const activeLinkColor = '#ff0b37';
  const liBgColor = isThemeLight ? ' #cccccc' : '#313131';

  useEffect(() => {
    // Set active link based on current location
    switch (location.pathname) {
      case '/':
        setActiveLink('HOME');
        break;
      case '/trending':
        setActiveLink('TRENDING');
        break;
      case '/gaming':
        setActiveLink('GAMING');
        break;
      case '/saved-videos':
        setActiveLink('SAVED_VIDEOS');
        break;
      default:
        setActiveLink('');
    }
  }, [location]);

  return (
    <HeaderCon isThemeLight={isThemeLight}>
      <Link to="/">
        <LogoImg alt="website logo" src={imgUrl} />
      </Link>
      <NavigatorItemsConInSm>
        <LinkBtn data-testid="theme" onClick={changeThemeStatus}>
          {isThemeLight ? (
            <FaMoon style={{ fontSize: '26px', color: '#000000' }} />
          ) : (
            <FiSun style={{ fontSize: '26px', color: '#ffffff' }} />
          )}
        </LinkBtn>
        <div className="popup-container">
          <Popup
            modal
            contentStyle={{
              borderRadius: '10px',
              padding: '10px',
              background: popupBackgroundColor,
            }}
            trigger={
              <LinkBtn data-testid="theme">
                <FiMenu style={{ fontSize: '29px', color: iconsColor }} />
              </LinkBtn>
            }
          >
            {(close) => (
              <PopupContentCon>
                <CloseBtn data-testid="close" onClick={() => close()}>
                  <IoCloseSharp
                    style={{
                      fontSize: '20px',
                      color: isThemeLight ? '#000000' : '#ffffff',
                    }}
                  />
                </CloseBtn>

                <PopupMenuCon>
                  <LinkNameCon
                    style={{
                      backgroundColor: activeLink === 'HOME' ? liBgColor : '',
                    }}
                  >
                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                      <LinkWrapCon>
                        <MdHome
                          style={{
                            color:
                              activeLink === 'HOME'
                                ? activeLinkColor
                                : linkColor,
                            fontSize: '19px',
                          }}
                        />
                        <LinkName
                          style={{
                            color:
                              activeLink === 'HOME' ? textLinkColor : linkColor,
                          }}
                        >
                          Home
                        </LinkName>
                      </LinkWrapCon>
                    </NavLink>
                  </LinkNameCon>

                  <LinkNameCon
                    style={{
                      backgroundColor:
                        activeLink === 'TRENDING' ? liBgColor : '',
                    }}
                  >
                    <NavLink to="/trending" style={{ textDecoration: 'none' }}>
                      <LinkWrapCon>
                        <HiFire
                          style={{
                            color:
                              activeLink === 'TRENDING'
                                ? activeLinkColor
                                : linkColor,
                            fontSize: '20px',
                          }}
                        />
                        <LinkName
                          style={{
                            color:
                              activeLink === 'TRENDING'
                                ? textLinkColor
                                : linkColor,
                          }}
                        >
                          Trending
                        </LinkName>
                      </LinkWrapCon>
                    </NavLink>
                  </LinkNameCon>

                  <LinkNameCon
                    style={{
                      backgroundColor: activeLink === 'GAMING' ? liBgColor : '',
                    }}
                  >
                    <NavLink to="/gaming" style={{ textDecoration: 'none' }}>
                      <LinkWrapCon>
                        <SiYoutubegaming
                          style={{
                            color:
                              activeLink === 'GAMING'
                                ? activeLinkColor
                                : linkColor,
                            fontSize: '20px',
                          }}
                        />
                        <LinkName
                          style={{
                            color:
                              activeLink === 'GAMING'
                                ? textLinkColor
                                : linkColor,
                          }}
                        >
                          Gaming
                        </LinkName>
                      </LinkWrapCon>
                    </NavLink>
                  </LinkNameCon>

                  <LinkNameCon
                    style={{
                      backgroundColor:
                        activeLink === 'SAVED_VIDEOS' ? liBgColor : '',
                    }}
                  >
                    <NavLink
                      to="/saved-videos"
                      style={{ textDecoration: 'none' }}
                    >
                      <LinkWrapCon>
                        <RiMenuAddLine
                          style={{
                            color:
                              activeLink === 'SAVED_VIDEOS'
                                ? activeLinkColor
                                : linkColor,
                            fontSize: '20px',
                          }}
                        />
                        <LinkName
                          style={{
                            color:
                              activeLink === 'SAVED_VIDEOS'
                                ? textLinkColor
                                : linkColor,
                          }}
                        >
                          Saved Vidioes
                        </LinkName>
                      </LinkWrapCon>
                    </NavLink>
                  </LinkNameCon>
                </PopupMenuCon>
              </PopupContentCon>
            )}
          </Popup>
        </div>

        <Popup
          modal
          contentStyle={{
            borderRadius: '10px',
            padding: '10px',
            background: popupBackgroundColor,
            width: '50%',
          }}
          trigger={
            <LinkBtn>
              <FiLogOut style={{ fontSize: '27px', color: iconsColor }} />
            </LinkBtn>
          }
        >
          {(close) => (
            <LogoutPopupCon>
              <LogoutPopHea isThemeLight={isThemeLight}>
                Are you sure, you want to logout
              </LogoutPopHea>
              <PopupBtntCon>
                {isThemeLight ? (
                  <button
                    type="button"
                    class="btn btn-outline-dark"
                    data-testid="close"
                    onClick={() => close()}
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    type="button"
                    class="btn btn-outline-light"
                    data-testid="close"
                    onClick={() => close()}
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={confirmLogout}
                >
                  Confirm
                </button>
              </PopupBtntCon>
            </LogoutPopupCon>
          )}
        </Popup>
      </NavigatorItemsConInSm>
      <NavigatorItemsConInLg>
        <LinkBtn data-testid="theme" onClick={changeThemeStatus}>
          {isThemeLight ? (
            <FaMoon style={{ fontSize: '30px', color: '#000000' }} />
          ) : (
            <FiSun style={{ fontSize: '30px', color: '#ffffff' }} />
          )}
        </LinkBtn>
        <LinkBtn>
          <ProfileImg
            alt="profile"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          />
        </LinkBtn>

        <Popup
          modal
          trigger={<LogoutBtn isThemeLight={isThemeLight}>Logout</LogoutBtn>}
          contentStyle={{
            borderRadius: '10px',
            padding: '10px',
            background: popupBackgroundColor,
            width: '30%',
          }}
        >
          {(close) => (
            <LogoutPopupCon>
              <LogoutPopHea isThemeLight={isThemeLight}>
                Are you sure, you want to logout
              </LogoutPopHea>
              <PopupBtntCon>
                {isThemeLight ? (
                  <button
                    type="button"
                    class="btn btn-outline-dark"
                    data-testid="close"
                    onClick={() => close()}
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    type="button"
                    class="btn btn-outline-light"
                    data-testid="close"
                    onClick={() => close()}
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={confirmLogout}
                >
                  Confirm
                </button>
              </PopupBtntCon>
            </LogoutPopupCon>
          )}
        </Popup>
      </NavigatorItemsConInLg>
    </HeaderCon>
  );
}

export default Header;
