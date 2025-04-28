import { Row, Input } from 'antd';
import styled from 'styled-components';

const { Search } = Input;

export const Wrapperheader = styled(Row)`
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  
  /* Responsive padding */
  @media (min-width: 1200px) {
    padding: 20px 120px;
  }
  
  @media (min-width: 992px) and (max-width: 1199px) {
    padding: 15px 60px;
  }
  
  @media (min-width: 768px) and (max-width: 991px) {
    padding: 15px 40px;
  }
  
  @media (max-width: 767px) {
    padding: 15px 20px;
    justify-content: space-between;
  }
`;

export const ResponsiveCol = styled.div`
  &.logo-col {
    flex: 0 0 auto;
    
    @media (min-width: 768px) {
      width: 25%;
    }
    
    @media (max-width: 767px) {
      width: auto;
    }
  }
  
  &.search-col {
    flex: 1;
    padding: 0 20px;
    
    @media (max-width: 991px) {
      padding: 0 10px;
    }
  }
  
  &.nav-col {
    flex: 0 0 auto;
    
    @media (min-width: 768px) {
      width: 40%;
    }
    
    @media (min-width: 992px) {
      width: 35%;
    }
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperHomeHeader = styled.a`
  text-decoration: none;
`;

export const WrapperTextheader = styled.span`
  font-size: 25px;
  color: #ff5b00;
  font-weight: bold;
  text-align: center;
  position: relative;
  margin-bottom: 5px;
  white-space: nowrap;
  
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const SearchWrapper = styled.div`
  width: 100%;
  
  &.mobile-search {
    margin: 20px 0;
  }
`;

export const CustomSearch = styled(Search)`
  .ant-input {
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 14.3px;
    caret-color: #4096ff;
    color: #212121;
    height: 38px;
  }
  
  .ant-input-search-button {
    height: 38px;
  }
  
  @media (max-width: 767px) {
    .ant-input {
      font-size: 14px;
      height: 36px;
    }
    
    .ant-input-search-button {
      height: 36px;
    }
  }
  
  /* Ensure the search button takes full width */
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  @media (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99rem;
  padding: 3px 6px;
  height: 36px;
  cursor: pointer;
  
  &:hover {
    background-color: #f0f0f0;
  }
  
  @media (min-width: 992px) {
    width: auto;
    margin-left: 5px;
  }
  
  @media (max-width: 991px) {
    height: 32px;
    padding: 2px 6px;
  }
`;

export const LinkButton = styled.a`
  font-size: 11px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  text-align: center;
  width: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .button-icon {
    margin-right: 5px;
  }
  
  &:hover {
    color: #333;
  }
  
  @media (max-width: 991px) {
    font-size: 11px;
    
    .button-text {
      display: none;
    }
    
    .button-icon {
      margin-right: 0;
      font-size: 18px;
    }
  }
  
  @media (min-width: 992px) {
    .button-icon {
      font-size: 14px;
    }
  }
`;

export const LoginButton = styled.a`
  background-color: #ff5b00;
  border: none;
  color: #fff;
  font-size: 10px;
  text-decoration: none;
  font-weight: 500;
  padding: 10px 16px;
  border-radius: 99rem;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .button-icon {
    margin-right: 5px;
  }
  
  @media (max-width: 991px) {
    padding: 8px 14px;
    
    .button-text {
      display: none;
    }
    
    .button-icon {
      margin-right: 0;
      font-size: 18px;
    }
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  
  .username {
    font-size: 12px;
    margin-left: 4px;
    cursor: pointer;
    
    @media (max-width: 991px) {
      display: none;
    }
  }
`;

export const MobileMenuButton = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  color: #333;
  transition: color 0.3s;
  
  &:hover {
    color: #ff5b00;
  }
`;

export const OverlayBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 80%;
  max-width: 300px;
  background-color: white;
  z-index: 1002;
  padding: 20px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  animation: slideIn 0.3s forwards;
  
  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const CloseMenuButton = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  color: #666;
  
  &:hover {
    color: #ff5b00;
  }
`;

export const MobileNavigation = styled.nav`
  margin-top: 30px;
  
  .mobile-nav-item {
    padding: 15px 0;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.2s;
    
    &:hover {
      background-color: #f9f9f9;
    }
    
    &.highlight {
      color: #ff5b00;
      font-weight: 500;
    }
    
    &.user-info {
      font-weight: 500;
    }
    
    &.logout {
      color: #f44336;
    }
    
    .mobile-icon {
      margin-right: 12px;
      font-size: 16px;
      color: #666;
    }
  }
`;