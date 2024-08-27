import { Row, Input } from 'antd';
import styled from 'styled-components';

const { Search } = Input;

export const Wrapperheader = styled(Row)`
  padding: 20px 120px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Đảm bảo header nằm trên các phần tử khác */
`;
export const WrapperHomeHeader = styled.a`
 
text-decoration: none;
`;

export const WrapperTextheader = styled.span`
  font-size: 25px;
  color: #ff5b00;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  position : relative;
    margin-bottom:5px;
`;

// Tạo một styled component cho thẻ Search
export const CustomSearch = styled(Search)`
  .ant-input {
    border-radius: 4px; /* Độ bo góc của thẻ input */
    border: 1px solid #ccc; /* Màu viền */
    font-size: 14.3px; /* Kích thước chữ trong input */
    caret-color: #4096ff;
    color: #212121;
    position : realtive;
    margin-top:0px;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Đảm bảo nội dung được căn giữa */
  border-radius: 99rem;
  padding: 3px 6px; /* Thêm padding để button dễ nhìn hơn */
  height: 36px;
  width:100px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0; /* Màu sắc nhẹ khi hover */
  }
`;

export const LinkButton = styled.a`
  font-size: 12px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  text-align: center; /* Căn giữa văn bản trong link */
  width:77px;

  &:hover {
    color: #333; /* Màu cam khi hover để đồng nhất với button Đăng nhập */
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

  &:hover {
  color: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;