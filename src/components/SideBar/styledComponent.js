import styled from 'styled-components';

//
export const SideBarCon = styled.div`
  width: 20vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px;
  background-color: ${(props) => (props.isThemeLight ? '#ffffff' : '#212121')};
  @media (max-width: 767px) {
    display: none;
  }
`;
export const SideBarUl = styled.ul`
  width: 100%;
  padding-left: 0%;
`;
export const LinkWrapCon = styled.div`
  display: flex;
  align-items: center;
`;
export const LinkLi = styled.li`
  display: flex;
  align-items: center;
  margin: 3px;
  padding: 0px;
`;

export const SideLink = styled.p`
  font-size: 17px;
  margin: 14px;
  margin-right: 10px;
`;
export const SideBarBottomCon = styled.aside`
  height: 30%;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  padding: 10px;
`;
export const ContactUsHea = styled.p`
  font-size: 19px;
  margin-left: 0px;
  text-align: start;
  color: ${(props) => (props.isThemeLight ? '#212121' : '#ebebeb')};
`;
export const Para = styled.p`
  font-size: 15px;
  margin-bottom: 10px;
  text-align: start;
  margin-top: 0px;
  color: ${(props) => (props.isThemeLight ? '#212121' : '#ebebeb')};
`;
export const LogosRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 45%;
  margin-bottom: 10px;
`;

export const Logo = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 6px;
`;
