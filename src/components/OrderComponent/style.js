import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 20px;
  width: 600px;
  
  
`;

export const Tab = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px 0;
  font-size: 16px;
  cursor: pointer;
  color: ${props => (props.active ? '#ff4d4f' : '#000')};
  border-bottom: ${props => (props.active ? '2px solid #ff5b00' : 'none')};
  transition: color 0.3s ease, border-bottom 0.3s ease;

  &:hover {
    color: #ff5b00;
  }
`;
export const WrapperOrder = styled.div`
    border: 1px solid #e5e5e5;
    width: 100%;
    border-radius: .5rem;
    max-height: 16rem;
    height: 28rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    margin-bottom: 20px;
    transition: transform 0.3s ease;
    &:hover {
        transform: translateX(-5px); // Dịch chuyển lên trên 5px khi hover
    }
`;
export const WrapperCustomImage = styled.div`
  
  
`;
export const WrapperCutomOrderInfor = styled.div`
  width: 559px;
`;
export const WrapperCustomOrderTitle = styled.div`
    font-size: 23px;
    margin: 10px 0 11px 10px;
    
    color: #171717;
    font-weight: 600;
`;
export const TourCodeAndStatus = styled.div`
display : flex;
align-items: center;
margin: 0 0 9px 20px;

`;
export const OrderText = styled.div`
font-size: 15px;
color: #232121;
font-weight: 500;

width:100%;
`;
export const WrapperPayment = styled.div`
display: flex;
align-items: center;
margin: 15px 0 0 20px;
justify-content: space-between;
`;
export const WrapperPaymentPrice = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;
export const CounterRight = styled.div`
    margin-top: 3px;
    
    line-height: 22px;
    font-size: 24px;
    font-weight: 600;
    color: #ff5b00;
`;
export const BtnPayment = styled.button`
    font-weight: 600;
    border: none;
    min-width: 96px;
    line-height: 22px;
    font-size: 13px;
    padding: 12px 20px;
    margin-right: 40px;
    color: #fff;
    background-color: #ff5b00;
    border-radius: 12px;
    text-align:center;
    cursor:pointer;
`;