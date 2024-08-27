import { DatePicker, Image } from "antd";
import styled from "styled-components";
export const Wrapper = styled.div`
height: 4100px;
`;
export const WrapperImageSmall = styled(Image)`
height: 64px;
width: 64px;
padding-right: 3px;
`;
export const TourDescriptionContainer = styled.div`
    position: relative;
    background-color: #fdf4ee;
    border-radius: 18px;
    width: 98%;
    margin: 20px 0 20px 14px;
    
    padding: 20px;
`;

export const TourDescriptionText = styled.div`
    font-size: 0.9rem;
    line-height: 1.5;
    font-weight: 400;
    color: #212121;
`;
export const ContainerLastCart =  styled.div`
    display:flex;
    align-items: center;
    margin-left: 800px;
   
`;

export const LastCart =  styled.div`
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    border: 1px solid rgba(244, 70, 34, 0.4);
    color: #f44622;
    margin: 2px 8px 3px 0;
    
    text-align: center;
    border-radius: 5px;
    width: 40px;
    
`;

export const LastCart1 =  styled.div`
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    border: 1px solid rgba(244, 70, 34, 0.4);
    color: #f44622;
    margin: 2px 0 3px 0;
    max-width:200px;
    padding: 0 4px;
    text-align: center;
    border-radius: 5px;
`;

export const SectionHeader = styled.div`
 color: #212121;
 display: flex;
justify-content: space-between;
align-items: flex-end;
position : relative;
margin-left:14px;
margin-top: 50px;

`;
 export const SectionHeaderTitle = styled.h2`
    font-weight: 600;
    font-size: 24px;
    line-height: 40px;
    color: #212121;
    padding-left: 16px;
    margin-bottom: 30px;
    &::before{
    content: "";
    position: absolute;
    display: block;
    background-color: #ff5b00;
    left: 0;
    top: 6px;
    width: 6px;
    height: 24px;
    border-radius: 3px;
    }
 `;
 export const CustomDatePicker = styled(DatePicker)`
 width: 160px;
 height: 40px;
 border-radius: 8px;
 background-color: #ff5b00;
 
 .ant-picker {
   color: #ffffff !important;
 }

 .ant-picker-input > input {
   color: #ffffff !important;
 }
 
 .ant-picker-suffix {
   color: #ffffff !important;
 }
 
 &:hover {
   border-color: #40a9ff;
 }
 
 .ant-picker-clear, .ant-picker-clear > span {
   color: black !important;
 }
 
 .ant-picker-dropdown {
   .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
     background-color: #ff5b00;
     color: #ffffff !important;
   }
 }
`;

export const WrapperActivityPackage = styled.div`
    position: relative;
    padding: 24px 40px;
    background-color: #f5f5f5;
    border-radius: 12px;
    width: 800px;
    margin-left: 14px;
`;
export const ActivityOptionTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.3;
`;
export const ButtonClear = styled.span`

    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
    text-decoration-line: underline;
    cursor: pointer;
`;

export const PackageDetailDate = styled.div`

margin-top: 20px;
`;

export const PackageOptionContent = styled.p`

    line-height: 18px;
    font-size: 14px;
    color: #757575;
    margin-bottom: 12px;
`;

export const PackageDetailCounter = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom:12px;

`;
export const PackageDetailTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;

`;
export const CounterLeft = styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    color: #333;
`;
export const CounterRight = styled.div`
    margin-left: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 22px;
    font-size: 16px;
    font-weight: 500;
    color: #ff5b00;
`;
 export const DiscountPrice = styled.span`
 
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    color: #ff5b00;`;
    
export const ActivityCounter = styled.div`
    display: flex;
    margin-left: 16px;
    color: #212121;
    `;  
export const CounterBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background-color: #f5f5f5;
    cursor: pointer;
    border-right: 2px;
    border-radius: 6px;
`;
export const CounterCount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    margin: 0 8px;
`;
export const PackageOptionBtnGroup = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    cursor: default;
    margin-top: 42px;
    margin-bottom: 32px;
`;
export const PriceDetail = styled.div`
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
`;

export  const CostDetailPrice = styled.p`

    font-size: 24px;
    line-height: 1.32;
    font-weight: 600;
    color: #212121;`;


export const AtttrTip = styled.p`
    margin-top: 2px;
    font-size: 12px;
    line-height: 1.5;
    font-weight: 400;
    color: #757575;`;

export const OptionsBtnGroupRight = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
export const InHouseBtn = styled.div`
display: inline-block;
`;
export const BtnAddCart = styled.button`
    background-color: #f09b0a;
    margin: 0 16px 0 24px;
    font-weight: 600;
    border: none;
    min-width: 165px;
    line-height: 22px;
    font-size: 13px;
    padding: 12px 20px;
    color: #fff;
    border-radius: 12px;
    text-align:center;
    cursor:pointer;
`;
export const BtnBooking = styled.button`
    font-weight: 600;
    border: none;
    min-width: 96px;
    line-height: 22px;
    font-size: 13px;
    padding: 12px 20px;
    color: #fff;
    background-color: #ff5b00;
    border-radius: 12px;
    text-align:center;
    cursor:pointer;
`;
export const textDescription11 = styled.div`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    color: #212121;
`;
export const ImageListContainer = styled.div`
  display: flex;
  flex-direction: column; /* Sắp xếp các hình ảnh theo chiều dọc */
  align-items: left; /* Căn giữa các hình ảnh theo chiều ngang */
`;

export const ImageItem = styled.img`
  width: 800px; /* Hoặc kích thước bạn muốn */
  height: 500px;
  margin: 10px 20px; /* Khoảng cách giữa các hình ảnh */
  border-radius: 16px;
`;
