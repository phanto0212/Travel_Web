import styled, { keyframes, css } from "styled-components";
import { StarFilled } from '@ant-design/icons';

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
`;

const shine = keyframes`
  from {
    background-position: -200px;
  }
  to {
    background-position: calc(200px + 100%);
  }
`;

// Styled components
export const RatingContainer = styled.div`
  background: linear-gradient(to bottom, #ffffff, #f9f9f9);
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin: 20px 0;
  max-width: 900px;
  animation: ${fadeIn} 0.6s ease-out;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const RatingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(240, 155, 10, 0.2);
  padding-bottom: 20px;
`;

export const RatingScore = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #fff8e6, #fff);
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(240, 155, 10, 0.15);
  border: 1px solid rgba(240, 155, 10, 0.1);
`;

export const RatingScoreValue = styled.span`
  font-size: 48px;
  line-height: 1;
  font-weight: 700;
  color: #f09b0a;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

export const RatingScoreMax = styled.span`
  font-size: 22px;
  line-height: 1;
  font-weight: 500;
  color: #a8a8a8;
  margin-left: 4px;
  align-self: flex-end;
  margin-bottom: 8px;
`;

export const StarIcon = styled(StarFilled)`
  color: #f09b0a;
  margin-left: 8px;
  font-size: ${props => props.$large ? '28px' : '18px'};
  
  ${props => props.$active && css`
    animation: ${pulse} 0.5s ease-in-out;
  `}
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const RatingCount = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #666;
  margin-left: 24px;
  background-color: #f5f5f5;
  padding: 8px 16px;
  border-radius: 30px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const RatingForm = styled.div`
  background: white;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
`;

export const RatingFormTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  
  svg {
    color: #f09b0a;
    margin-right: 10px;
    font-size: 18px;
  }
  
  &:after {
    content: "";
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, rgba(240, 155, 10, 0.3), transparent);
    margin-left: 15px;
  }
`;

export const StarRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  gap: 15px;
  
  &.animate {
    animation: ${shake} 0.5s ease-in-out;
  }
  
  @media (max-width: 576px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const StarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: ${props => props.$active ? 'linear-gradient(135deg, #f09b0a, #ffb84d)' : '#f8f8f8'};
  color: ${props => props.$active ? 'white' : '#666'};
  border: ${props => props.$active ? 'none' : '1px solid #ddd'};
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  box-shadow: ${props => props.$active ? '0 4px 12px rgba(240, 155, 10, 0.3)' : 'none'};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    background: ${props => props.$active ? 'linear-gradient(135deg, #f09b0a, #ffb84d)' : 'linear-gradient(135deg, #f8f8f8, #efefef)'};
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

export const StarButtonText = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

export const RatingInput = styled.textarea`
  width: 100%;
  min-height: 120px;
  border-radius: 12px;
  padding: 15px;
  margin-top: 20px;
  border: 1px solid #e0e0e0;
  font-size: 16px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  background-color: #f9f9f9;
  
  &:focus {
    outline: none;
    border-color: #f09b0a;
    box-shadow: 0 0 0 3px rgba(240, 155, 10, 0.2);
    background-color: #fff;
  }
  
  &::placeholder {
    color: #aaa;
    font-style: italic;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(135deg, #2ecc71, #27ae60);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(46, 204, 113, 0.2);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    animation: ${shine} 2s infinite;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(46, 204, 113, 0.3);
    background: linear-gradient(135deg, #2ecc71, #218c74);
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(46, 204, 113, 0.3);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(231, 76, 60, 0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(231, 76, 60, 0.3);
    background: linear-gradient(135deg, #e74c3c, #992d22);
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(231, 76, 60, 0.3);
  }
  
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const RatingsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;

export const RatingAnimation = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
  animation-delay: ${props => props.$delay}s;
  animation-fill-mode: both;
`;

export const EmptyRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  color: #888;
  background-color: rgba(249, 249, 249, 0.7);
  border-radius: 12px;
  border: 1px dashed #ddd;
  margin: 20px 0;
  
  p {
    font-size: 16px;
    margin-top: 15px;
  }
`;

export const EmptyRatingIcon = styled.div`
  font-size: 48px;
  color: #f09b0a;
  opacity: 0.7;
  animation: ${float} 3s ease-in-out infinite;
`;