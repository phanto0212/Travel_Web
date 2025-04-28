import React, { useState, useEffect } from 'react';
import { Col, Dropdown, Avatar, Menu } from 'antd';
import { 
  Wrapperheader, 
  WrapperTextheader, 
  CustomSearch, 
  LinkButton, 
  Container, 
  LoginButton, 
  ContainerButton, 
  WrapperHomeHeader,
  MobileMenuButton,
  MobileMenu,
  SearchWrapper,
  MobileNavigation,
  OverlayBackground,
  CloseMenuButton,
  LogoWrapper,
  AvatarContainer,
  ResponsiveCol
} from './style';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, MenuOutlined, CloseOutlined, SearchOutlined, ShoppingCartOutlined, FileTextOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import newRequest from '../../utils/request';

function HeaderComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const Navigate = useNavigate();
  const [searchKey, setSearchKey] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && searchKey.trim()) {
      Navigate(`/search?key=${encodeURIComponent(searchKey.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
      fetchUser(token);
    }
  }, []);
  
  const handleToCart = () => {
    const token = localStorage.getItem('authToken');
    if(token) {
      Navigate('/order');
    } else {
      Navigate('/sign-in');
    }
    setMobileMenuOpen(false);
  };
  
  const fetchUser = async (token) => {
    try {
      const response = await newRequest.get('/api/auth/get/user', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setUser(response.data.user);
    } catch (error) {
      console.log('error:', error);
    }
  };
  
  const HandleNavigateSignUp = () => {
    Navigate('/sign-up');
    setMobileMenuOpen(false);
  };

  const HandleNavigateSignin = () => {
    Navigate('/sign-in');
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    Navigate('/sign-in');
    setMobileMenuOpen(false);
  };
  
  const handleNavigateNews = () => {
    Navigate('/news');
    setMobileMenuOpen(false);
  };
  
  const handleNavigateHome = () => {
    Navigate('/');
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="1">Chỉnh sửa thông tin</Menu.Item>
      <Menu.Item key="2" onClick={handleLogout}>Đăng xuất</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Wrapperheader>
        <ResponsiveCol className="logo-col">
          <LogoWrapper>
            <WrapperHomeHeader href='/' onClick={handleNavigateHome}>
              <WrapperTextheader>PhanTo's Travel</WrapperTextheader>
            </WrapperHomeHeader>
          </LogoWrapper>
        </ResponsiveCol>
        
        {windowWidth > 768 && (
          <ResponsiveCol className="search-col">
            <SearchWrapper>
              <CustomSearch 
                spellCheck={false}
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Nhập thông tin địa điểm mà bạn muốn đến ở đây" 
                className="searchHeader" 
              />
            </SearchWrapper>
          </ResponsiveCol>
        )}
        
        {windowWidth > 768 ? (
          <ResponsiveCol className="nav-col">
            <Container>
              <ContainerButton>
                <LinkButton onClick={handleNavigateNews}>
                  <FileTextOutlined className="button-icon" />
                  <span className="button-text">Các bài viết</span>
                </LinkButton>
              </ContainerButton>
              
              <ContainerButton>
                <LinkButton onClick={handleToCart}>
                  <ShoppingCartOutlined className="button-icon" />
                  <span className="button-text">Giỏ hàng</span>
                </LinkButton>
              </ContainerButton>
              
              {!isLoggedIn && (
                <>
                  <ContainerButton>
                    <LinkButton onClick={HandleNavigateSignUp}>
                      <UserAddOutlined className="button-icon" />
                      <span className="button-text">Đăng ký</span>
                    </LinkButton>
                  </ContainerButton>
                  
                  <ContainerButton>
                    <LoginButton onClick={HandleNavigateSignin}>
                      <LoginOutlined className="button-icon" />
                      <span className="button-text">Đăng nhập</span>
                    </LoginButton>
                  </ContainerButton>
                </>
              )}
              
              {isLoggedIn && (             
                <AvatarContainer>
                  <Dropdown overlay={userMenu} trigger={['hover']} placement="bottomRight">
                    <Avatar 
                      style={{ 
                        cursor: 'pointer', 
                        color: '#fff', 
                        backgroundColor: '#ff5b00',
                        marginLeft: '17px' 
                      }} 
                      icon={<UserOutlined />} 
                    />
                  </Dropdown>
                  <span className="username">{user.username}</span>
                </AvatarContainer>
              )}
            </Container>
          </ResponsiveCol>
        ) : (
          <MobileMenuButton onClick={toggleMobileMenu}>
            <MenuOutlined />
          </MobileMenuButton>
        )}
      </Wrapperheader>

      {mobileMenuOpen && (
        <>
          <OverlayBackground onClick={toggleMobileMenu} />
          <MobileMenu>
            <CloseMenuButton onClick={toggleMobileMenu}>
              <CloseOutlined />
            </CloseMenuButton>
            
            <SearchWrapper className="mobile-search">
              <CustomSearch 
                spellCheck={false}
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tìm kiếm địa điểm..." 
                className="searchHeader" 
              />
            </SearchWrapper>
            
            <MobileNavigation>
              <div onClick={handleNavigateHome} className="mobile-nav-item">
                <span>Trang chủ</span>
              </div>
              
              <div onClick={handleNavigateNews} className="mobile-nav-item">
                <FileTextOutlined className="mobile-icon" />
                <span>Các bài viết</span>
              </div>
              
              <div onClick={handleToCart} className="mobile-nav-item">
                <ShoppingCartOutlined className="mobile-icon" />
                <span>Giỏ hàng</span>
              </div>
              
              {!isLoggedIn ? (
                <>
                  <div onClick={HandleNavigateSignUp} className="mobile-nav-item">
                    <UserAddOutlined className="mobile-icon" />
                    <span>Đăng ký</span>
                  </div>
                  
                  <div onClick={HandleNavigateSignin} className="mobile-nav-item highlight">
                    <LoginOutlined className="mobile-icon" />
                    <span>Đăng nhập</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="mobile-nav-item user-info">
                    <Avatar 
                      style={{ 
                        color: '#fff', 
                        backgroundColor: '#ff5b00',
                        marginRight: '10px'
                      }} 
                      icon={<UserOutlined />} 
                      size="small"
                    />
                    <span>{user.username}</span>
                  </div>
                  
                  <div className="mobile-nav-item">
                    <span>Chỉnh sửa thông tin</span>
                  </div>
                  
                  <div onClick={handleLogout} className="mobile-nav-item logout">
                    <span>Đăng xuất</span>
                  </div>
                </>
              )}
            </MobileNavigation>
          </MobileMenu>
        </>
      )}
    </div>
  );
}

export default HeaderComponent;