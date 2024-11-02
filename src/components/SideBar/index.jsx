import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// Importing icons
import { MdHome } from 'react-icons/md';
import { HiFire } from 'react-icons/hi';
import { SiYoutubegaming } from 'react-icons/si';
import { RiMenuAddLine } from 'react-icons/ri';
import {
  SideBarCon,
  SideBarUl,
  LinkLi,
  SideLink,
  SideBarBottomCon,
  ContactUsHea,
  Para,
  LogosRow,
  Logo,
  LinkWrapCon,
} from './styledComponent';

function SideBar() {
  const isThemeLight = useSelector((store) => store.themeStatus.isThemeLight);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  const linkColor = isThemeLight ? '#616e7c' : '#f8fafc';
  const textLinkColor = isThemeLight ? 'black' : '#ffffff';
  const activeLinkColor = '#ff0b37';
  const liBgColor = isThemeLight ? '#ebebeb' : '#313131';
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
    <SideBarCon isThemeLight={isThemeLight}>
      <SideBarUl>
        <LinkLi
          style={{ backgroundColor: activeLink === 'HOME' ? liBgColor : '' }}
        >
          <NavLink exact to="/" style={{ textDecoration: 'none' }}>
            <LinkWrapCon>
              <MdHome
                style={{
                  color: activeLink === 'HOME' ? activeLinkColor : linkColor,
                  fontSize: '25px',
                }}
              />
              <SideLink
                style={{
                  color: activeLink === 'HOME' ? textLinkColor : linkColor,
                }}
              >
                Home
              </SideLink>
            </LinkWrapCon>
          </NavLink>
        </LinkLi>
        <LinkLi
          style={{
            backgroundColor: activeLink === 'TRENDING' ? liBgColor : '',
          }}
        >
          <NavLink to="/trending" style={{ textDecoration: 'none' }}>
            <LinkWrapCon style={{ display: 'flex', alignItems: 'center' }}>
              <HiFire
                style={{
                  color:
                    activeLink === 'TRENDING' ? activeLinkColor : linkColor,
                  fontSize: '25px',
                }}
              />
              <SideLink
                style={{
                  color: activeLink === 'TRENDING' ? textLinkColor : linkColor,
                }}
              >
                Trending
              </SideLink>
            </LinkWrapCon>
          </NavLink>
        </LinkLi>
        <LinkLi
          style={{ backgroundColor: activeLink === 'GAMING' ? liBgColor : '' }}
        >
          <NavLink to="/gaming" style={{ textDecoration: 'none' }}>
            <LinkWrapCon style={{ display: 'flex', alignItems: 'center' }}>
              <SiYoutubegaming
                style={{
                  color: activeLink === 'GAMING' ? activeLinkColor : linkColor,
                  fontSize: '25px',
                }}
              />
              <SideLink
                style={{
                  color: activeLink === 'GAMING' ? textLinkColor : linkColor,
                }}
              >
                Gaming
              </SideLink>
            </LinkWrapCon>
          </NavLink>
        </LinkLi>
        <LinkLi
          style={{
            backgroundColor: activeLink === 'SAVED_VIDEOS' ? liBgColor : '',
          }}
        >
          <NavLink to="/saved-videos" style={{ textDecoration: 'none' }}>
            <LinkWrapCon style={{ display: 'flex', alignItems: 'center' }}>
              <RiMenuAddLine
                style={{
                  color:
                    activeLink === 'SAVED_VIDEOS' ? activeLinkColor : linkColor,
                  fontSize: '25px',
                }}
              />
              <SideLink
                style={{
                  color:
                    activeLink === 'SAVED_VIDEOS' ? textLinkColor : linkColor,
                }}
              >
                Saved Videos
              </SideLink>
            </LinkWrapCon>
          </NavLink>
        </LinkLi>
      </SideBarUl>
      <SideBarBottomCon>
        <ContactUsHea isThemeLight={isThemeLight}>CONTACT US</ContactUsHea>
        <LogosRow>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </LogosRow>
        <Para isThemeLight={isThemeLight}>
          Enjoy! Now to see your channels and recommendations!
        </Para>
      </SideBarBottomCon>
    </SideBarCon>
  );
}

export default SideBar;
