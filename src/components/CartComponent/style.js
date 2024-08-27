import { Card } from "antd";
import styled from "styled-components";

export const StyledCard = styled(Card)`
    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-5px); // Dịch chuyển lên trên 5px khi hover
    }
`;

export const Wrapper =  styled.div`
    margin-left: 7px;
`;
export const StyleNameProduct =  styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: rgb(56, 56, 61);
    margin-bottom:4px;
`;

export const CartTitleText =  styled.div`
    color: #212121;
    word-break: break-word;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    line-height: 21px;
    
`;
export const CartDescription =  styled.div`
    display: flex;
    align-items: center;

`;
export const Description =  styled.div`
    line-height: 20px;
    border: none;
    color: #757575;
    font-size: 12px;
    background-color: #F5F5F5;
    margin-right:10px;
    margin-bottom: 4px;
`;

export const WrapperReportText =  styled.div`
    font-size: 14px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
`;
export const CartPrice =  styled.div`
   display: flex;
   align-items: center;
   margin: 8px 0 3px 0;
`;

export const DiscountPrice =  styled.div`
   font-size: 17px;
    font-weight: 600;
    line-height: 1.5;
    margin-right: 4px;
    color: #212121;
`;
export const OriganalPrice =  styled.div`
   color: #a8a8a8;
   font-size: 17px;
   font-weight: 400;
   line-height: 1.5;
   text-decoration: line-through
`;
export const ContainerLastCart =  styled.div`
    display:flex;
    align-items: center;

`;

export const LastCart =  styled.div`
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    border: 1px solid rgba(244, 70, 34, 0.4);
    color: #f44622;
    margin: 2px 8px 3px 0;
    max-width:35px;
    padding: 0 4px;
    text-align: center;
    border-radius: 10px;
    
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
    border-radius: 10px;
`;




