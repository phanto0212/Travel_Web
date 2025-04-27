import styled, { keyframes } from "styled-components";
import { ShoppingOutlined, TeamOutlined, SmileOutlined } from '@ant-design/icons';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const OrderContainer = styled.div`
  max-width: 1200px;
  margin: 120px auto 50px;
  padding: 0 20px;
  
  @media (max-width: 1240px) {
    padding: 0 30px;
  }
  
  @media (max-width: 768px) {
    padding: 0 15px;
    margin-top: 100px;
  }
`;

export const OrderHeader = styled.div`
  margin-bottom: 30px;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  
  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #ff7e29, #ff5b00);
    margin-top: 10px;
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 30px;
  width: 100%;
  background: #fff;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  
  @media (max-width: 768px) {
    border-radius: 8px 8px 0 0;
    flex-wrap: wrap;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Tab = styled.div`
  flex: 1;
  text-align: center;
  padding: 16px 0;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  color: ${props => (props.active ? '#ff5b00' : '#666')};
  background-color: ${props => (props.active ? '#fff8f2' : '#fff')};
  border-bottom: ${props => (props.active ? '3px solid #ff5b00' : 'none')};
  transition: all 0.3s ease;

  &:hover {
    color: #ff5b00;
    background-color: ${props => (props.active ? '#fff8f2' : '#fff9f6')};
  }
  
  @media (max-width: 768px) {
    padding: 12px 0;
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    border-bottom: 1px solid #f0f0f0;
    border-left: ${props => (props.active ? '3px solid #ff5b00' : 'none')};
    text-align: left;
    padding-left: 20px;
  }
`;

export const WrapperOrder = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  margin-bottom: 30px;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 12px;
  }
`;

export const WrapperCustomImage = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  width: 360px;
  min-height: 255px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

export const StatusBadge = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: ${props => props.color || '#1890ff'};
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  
  .anticon {
    font-size: 14px;
  }
`;

export const WrapperCutomOrderInfor = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WrapperCustomOrderTitle = styled.div`
  font-size: 22px;
  color: #333;
  font-weight: 600;
  margin-bottom: 20px;
  cursor: pointer;
  padding-bottom: 15px;
  border-bottom: 1px solid #f5f5f5;
  transition: color 0.2s ease;
  display: flex;
  align-items: flex-start;
  
  .location-icon {
    color: #ff5b00;
    margin-right: 10px;
    margin-top: 5px;
    font-size: 18px;
  }
  
  &:hover {
    color: #ff5b00;
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const OrderDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const OrderSection = styled.div`
  display: flex;
  align-items: center;
`;

export const OrderSectionTitle = styled.div`
  font-size: 14px;
  color: #666;
  margin-right: 10px;
  display: flex;
  align-items: center;
  
  .anticon {
    margin-right: 5px;
    color: #ff7e29;
  }
`;

export const OrderSectionContent = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #333;
`;

export const TourCodeAndStatus = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const OrderText = styled.div`
  font-size: 15px;
  color: #666;
  font-weight: 500;
  
  span {
    margin-left: 5px;
  }
`;

export const BookingDate = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #ff5b00;
  grid-column: 1 / -1;
  padding: 12px 15px;
  background-color: #fff8f2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  
  .anticon {
    margin-right: 8px;
    font-size: 16px;
  }
`;

export const GuestCount = styled.div`
  grid-column: 1 / -1;
  display: flex;
  gap: 30px;
  
  div {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    color: #444;
  }
`;

export const GuestIcon = styled(TeamOutlined)`
  color: #1890ff;
  margin-right: 8px;
  font-size: 16px;
`;

export const ChildIcon = styled(SmileOutlined)`
  color: #52c41a;
  margin-right: 8px;
  font-size: 16px;
`;

export const OrderFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid #f5f5f5;
  
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PriceTag = styled.div`
  font-size: 14px;
  color: #666;
`;

export const WrapperPayment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  width: 100%;
`;

export const WrapperPaymentPrice = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CounterRight = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: #ff5b00;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const BtnPayment = styled.button`
  font-weight: 600;
  border: none;
  min-width: 120px;
  font-size: 15px;
  padding: 12px 20px;
  color: #fff;
  background: linear-gradient(135deg, #ff7e29, #ff5b00);
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(255, 91, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(255, 91, 0, 0.25);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
  
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const PaymentButton = styled.button`
  font-weight: 600;
  border: none;
  min-width: 150px;
  font-size: 15px;
  padding: 12px 20px;
  color: #fff;
  background: ${props => {
    switch(props.status) {
      case 'COMPLETED': return '#52c41a';
      case 'FAIlED': return '#ff4d4f';
      default: return 'linear-gradient(135deg, #ff7e29, #ff5b00)';
    }
  }};
  border-radius: 12px;
  text-align: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  opacity: ${props => props.disabled ? 0.8 : 1};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    transform: ${props => props.disabled ? 'none' : 'translateY(-3px)'};
    box-shadow: ${props => props.disabled ? 'none' : '0 8px 20px rgba(0, 0, 0, 0.15)'};
  }
  
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const OrderDetailsButton = styled.button`
  font-weight: 500;
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  min-width: 120px;
  font-size: 15px;
  padding: 12px 20px;
  color: #555;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    background: #f0f0f0;
    color: #333;
    transform: translateY(-3px);
  }
  
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const LoadingIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  animation: ${fadeIn} 0.5s ease-out;
  
  .spinner {
    width: 50px;
    height: 50px;
    border: 4px solid rgba(255, 126, 41, 0.1);
    border-left-color: #ff7e29;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
    margin-bottom: 20px;
  }
  
  p {
    color: #666;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const EmptyOrderState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  padding: 40px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;
  
  h3 {
    font-size: 22px;
    font-weight: 600;
    color: #333;
    margin: 20px 0 10px;
  }
  
  p {
    color: #666;
    margin-bottom: 30px;
  }
  
  button {
    background: linear-gradient(135deg, #ff7e29, #ff5b00);
    border: none;
    color: white;
    padding: 12px 25px;
    border-radius: 30px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(255, 91, 0, 0.15);
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(255, 91, 0, 0.25);
    }
  }
`;

export const EmptyStateIcon = styled(ShoppingOutlined)`
  font-size: 60px;
  color: #ff7e29;
  opacity: 0.7;
  animation: ${float} 3s infinite ease-in-out;
`;