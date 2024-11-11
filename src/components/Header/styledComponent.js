import styled from 'styled-components';

// staring bg con of header part

export const HeaderCon = styled.nav`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.isThemeLight ? '#ffffff' : '#212121')};
`;

export const LogoImg = styled.img`
  height: 30px;
  width: 140px;
  margin-left: 15px;
`;
// navigator items con

///.. navigate items con in small devices
export const NavigatorItemsConInSm = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
  @media screen and (min-width: 768px) {
    display: none;
  }
  padding-left: 20px;
`;

///.. navigate items con in large devices
export const NavigatorItemsConInLg = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

// LINK BUTTONS

export const LinkBtn = styled.button`
  background-color: transparent;
  border: none;
  margin: 10px;
  padding: 0px;
  outline: none;
`;

// profile img styleing

export const ProfileImg = styled.img`
  height: 43px;
  width: 43px;
`;

export const LogoutPopupCon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px;
`;
export const LogoutPopHea = styled.p`
  font-size: 15px;
  font-family: Roboto;
  text-align: center;
  color: ${(props) => (props.isThemeLight ? '#00306e' : '#d7dfe9')};
`;
// LOGOUT BTN IN LG DEVICES
export const LogoutBtn = styled.button`
  height: 35px;
  width: 70px;
  border: 2px solid;
  margin-right: 20px;
  color: ${(props) => (props.isThemeLight ? '#000000' : '#ffffff')};
  border-color: ${(props) => (props.isThemeLight ? '#000000' : '#ffffff')};
  background-color: transparent;
  border-radius: 5px;
  outline: none;
  padding: 0px;
  font-size: 13px;
  margin-right: 15px;
`;

// popup con

export const PopupBtntCon = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const PopupContentCon = styled.div``;
export const LinkWrapCon = styled.div`
  display: flex;
  align-items: center;
`;
export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  margin: 10px;
  padding: 0px;
  outline: none;
  margin-left: 90%;
`;
export const PopupMenuCon = styled.ul`
  list-style-type: none;
  padding: 0px;
`;

// link and link name align con
export const LinkNameCon = styled.li`
  display: flex;
  align-items: center;
`;
export const LinkName = styled.p`
  font-size: 15px;
  margin-top: 15px;
  margin-left: 6px;
`;

export const ConfirmBtn = styled.button`
  height: 40px;
  width: 100px;
  border: none;
  background-color: #3b82f6;
  color: white;
  font-size: 12px;
  font-family: Roboto;
`;
