import styled, { keyframes } from "styled-components";

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const backgroundAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled components
export const SignupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #6B73FF 0%, #000DFF 100%);
  padding: 20px;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const SignupCard = styled.div`
  display: flex;
  width: 1000px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
  background: #fff;
  animation: ${slideUp} 0.8s ease-out;
  
  @media (max-width: 992px) {
    width: 90%;
    max-width: 800px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 450px;
  }
`;

export const WrapperContainerLeft = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  
  > * {
    animation: ${slideUp} 0.5s ease-out;
  }
`;

export const WrapperContainerRight = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  .content {
    position: absolute;
    z-index: 2;
    text-align: center;
    color: white;
    padding: 20px;
    animation: ${float} 6s ease-in-out infinite;
    
    h2 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 16px;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
    
    p {
      font-size: 16px;
      max-width: 280px;
      margin: 0 auto;
      text-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background-size: 400% 400%;
  animation: ${backgroundAnimation} 15s ease infinite;
  opacity: 0.9;
  z-index: 1;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.2;
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 30px;
  text-align: center;
  
  .pulse-icon {
    animation: ${pulse} 2s infinite;
  }
`;

export const LoginHeaderTitle = styled.h3`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.5;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
`;

export const HeaderSubTitle = styled.p`
  font-size: 14px;
  color: #757575;
  text-align: center;
  margin-bottom: 30px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: #f8f9fa;
  border-radius: 12px;
  padding: 0 15px;
  border: 1px solid #e1e5eb;
  transition: all 0.3s ease;
  
  &:focus-within {
    border-color: #4096ff;
    box-shadow: 0 0 0 3px rgba(64, 150, 255, 0.1);
    transform: translateY(-2px);
  }
  
  .input-icon {
    color: #9ca3af;
    margin-right: 10px;
  }
  
  input {
    flex: 1;
    border: none !important;
    background: transparent !important;
    padding: 15px 10px !important;
    font-size: 14px !important;
    
    &:focus {
      outline: none;
    }
  }
`;

export const BtnLogin = styled.button`
  font-weight: 600;
  border: none;
  width: 100%;
  margin-top: 10px;
  line-height: 24px;
  font-size: 16px;
  padding: 14px 20px;
  color: #fff;
  background: linear-gradient(to right, #4096ff, #1677ff);
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(64, 150, 255, 0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 14px rgba(64, 150, 255, 0.3);
    background: linear-gradient(to right, #4096ff, #0958d9);
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(64, 150, 255, 0.2);
  }
  
  &.disabled {
    background: linear-gradient(to right, #ccc, #bbb);
    cursor: not-allowed;
    box-shadow: none;
    
    &:hover {
      transform: none;
    }
  }
`;

export const WrapperTextLight = styled.span`
  color: #4096ff;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    color: #1677ff;
    text-decoration: underline;
  }
`;

export const ErrorCustom = styled.span`
  color: #ff4d4f;
  font-size: 12px;
  margin-top: -10px;
  padding-left: 5px;
  display: block;
  
  &.centered {
    text-align: center;
    margin-top: 5px;
  }
  
  &.slide-in {
    animation: ${slideUp} 0.3s ease-out;
  }
`;

export const FormFooter = styled.div`
  margin-top: 20px;
  text-align: center;
  
  p {
    font-size: 14px;
    color: #666;
  }
`;

export const ContinueWith = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  
  &::before, &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #e1e5eb;
  }
  
  span {
    padding: 0 15px;
    font-size: 12px;
    color: #9ca3af;
  }
`;

export const SocialButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 5px;
`;

export const SocialButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #f8f9fa;
  color: #333;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &.google {
    color: #ea4335;
    border: 1px solid rgba(234, 67, 53, 0.2);
    
    &:hover {
      background: rgba(234, 67, 53, 0.1);
    }
  }
  
  &.facebook {
    color: #1877f2;
    border: 1px solid rgba(24, 119, 242, 0.2);
    
    &:hover {
      background: rgba(24, 119, 242, 0.1);
    }
  }
`;