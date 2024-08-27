import React, { useState, useEffect } from 'react';
import { Col, Dropdown, Avatar, Menu } from 'antd';
import { Wrapperheader, WrapperTextheader, CustomSearch, LinkButton, Container, LoginButton, ContainerButton, WrapperHomeHeader } from './style';
import { useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import newRequest from '../../utils/request';

function HeaderComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({})
  const Navigate = useNavigate();

  

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
      fetchUser(token)
    }
  }, []);
  const handleToCart = ()=>{
    const token = localStorage.getItem('authToken');
    if(token){
      Navigate('/order')
    }
    else{
      Navigate('/sign-in')
    }
  }
  const fetchUser = async (token) => {
    try {
        const response = await newRequest.get('/api/auth/get/user', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        setUser(response.data.user); // Cập nhật state với dữ liệu user
    } catch (error) {
        console.log('error:', error);
    }
};
  const HandleNavigateSignUp = () => {
    Navigate('/sign-up');
  };

  const HandleNavigateSignin = () => {
    Navigate('/sign-in');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    Navigate('/sign-in');  // Điều hướng về trang chủ sau khi đăng xuất
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
        <Col span={6}>
          <WrapperHomeHeader href='/'>
            <WrapperTextheader>PhanTo's Travel</WrapperTextheader>
          </WrapperHomeHeader>
        </Col>
        <Col span={10}>
          <CustomSearch placeholder="input search text" className="searchHeader" style={{ width: 500, marginTop: 5 }} />
        </Col>
        <Col span={8}>
          <Container>
            <ContainerButton><LinkButton href="/">Các bài viết</LinkButton></ContainerButton>
            <ContainerButton><LinkButton onClick={handleToCart}>Giỏ hàng</LinkButton></ContainerButton>
            {!isLoggedIn && (
              <>
                <ContainerButton><LinkButton onClick={HandleNavigateSignUp}>Đăng ký</LinkButton></ContainerButton>
                <ContainerButton><LoginButton onClick={HandleNavigateSignin}>Đăng nhập</LoginButton></ContainerButton>
              </>
            )}
            {isLoggedIn && (             
                <div>
                  <Dropdown overlay={userMenu} trigger={['hover']} placement="bottomRight">
                  <Avatar style={{ cursor: 'pointer', color: '#fff', backgroundColor: '#ff5b00', marginLeft: '17px' }} icon={<UserOutlined />} />
                </Dropdown>
                <span style={{fontSize: '12px', marginLeft:'4px', cursor: 'pointer'}}>{user.username}</span>
                </div>
            )}
          </Container>
        </Col>
      </Wrapperheader>
    </div>
  );
}

export default HeaderComponent;
