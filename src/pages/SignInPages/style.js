import styled, { keyframes } from "styled-components";

// Animations
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
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const wave = keyframes`
  0% { transform: translateX(0) translateZ(0) scaleY(1); }
  50% { transform: translateX(-25%) translateZ(0) scaleY(0.55); }
  100% { transform: translateX(-50%) translateZ(0) scaleY(1); }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

// Background elements
export const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

export const Circle = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  left: ${props => props.left};
  top: ${props => props.top};
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  border-radius: 50%;
  animation: ${float} ${props => 7 + props.delay}s infinite ease-in-out;
  animation-delay: ${props => props.delay}s;
`;

// Main container
export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  overflow: hidden;
  position: relative;
`;

export const CardHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, #4096ff, #1677ff, #667eea, #764ba2);
  background-size: 300% 100%;
  animation: gradientMove 4s ease infinite;
  border-radius: 20px 20px 0 0;
  
  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export const LoginCard = styled.div`
  display: flex;
  width: 1000px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  background: #fff;
  position: relative;
  animation: ${fadeIn} 0.6s ease-out, ${slideUp} 0.6s ease-out;
  
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(90deg, #4096ff, #1677ff, #667eea, #764ba2);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.5;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 450px;
  }
`;

export const WrapperContainerLeft = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

export const FormContainer = styled.div`
  animation: ${fadeIn} 0.8s ease-out;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const WrapperContainerRight = styled.div`
  flex: 1;
  background: linear-gradient(45deg, #4096ff, #1677ff);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .illustration {
    background-image: url('https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    transform: scale(1.05);
    animation: zoomSlow 20s infinite alternate ease-in-out;
    
    @keyframes zoomSlow {
      0% { transform: scale(1); }
      100% { transform: scale(1.15); }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const WaveAnimation = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  
  .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  }
  
  .wave1 {
    animation: ${wave} 8s linear infinite;
    z-index: 4;
    opacity: 0.7;
    animation-delay: 0s;
    bottom: 0;
  }
  
  .wave2 {
    animation: ${wave} 10s linear infinite;
    z-index: 3;
    opacity: 0.5;
    animation-delay: -5s;
    bottom: 10px;
  }
  
  .wave3 {
    animation: ${wave} 12s linear infinite;
    z-index: 2;
    opacity: 0.3;
    animation-delay: -2s;
    bottom: 15px;
  }
  
  .wave4 {
    animation: ${wave} 15s linear infinite;
    z-index: 1;
    opacity: 0.2;
    animation-delay: -5s;
    bottom: 20px;
  }
`;

export const WelcomeText = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  padding: 0 30px;
  color: white;
  text-align: center;
  z-index: 10;
  
  h2 {
    font-size: 28px;
    margin-bottom: 15px;
    font-weight: 600;
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    animation: ${slideUp} 0.8s ease-out 0.3s both;
  }
  
  p {
    font-size: 16px;
    line-height: 1.6;
    opacity: 0.9;
    max-width: 380px;
    margin: 0 auto;
    animation: ${slideUp} 0.8s ease-out 0.6s both;
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  img {
    width: 60px;
    height: auto;
    margin-bottom: 10px;
    animation: ${pulse} 2s infinite ease-in-out;
  }
`;

export const BrandName = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: #333;
  
  span {
    background: linear-gradient(45deg, #4096ff, #1677ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
`;

export const LoginHeaderTitle = styled.h2`
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const HeaderSubTitle = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 30px;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out 0.2s both;
`;

export const SocialLoginButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
  animation: ${fadeIn} 0.8s ease-out 0.3s both;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const SocialButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 15px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #555;
  background: #f8f9fa;
  border: 1px solid #e1e5eb;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    font-size: 16px;
  }
  
  &:first-child {
    color: #DB4437;
    svg { color: #DB4437; }
    
    &:hover {
      background-color: #fdf1f0;
    }
  }
  
  &:last-child {
    color: #4267B2;
    svg { color: #4267B2; }
    
    &:hover {
      background-color: #f0f3f9;
    }
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
  }
`;

export const OrDivider = styled.div`
  position: relative;
  margin: 15px 0 25px;
  text-align: center;
  height: 20px;
  animation: ${fadeIn} 0.8s ease-out 0.4s both;
  
  &::before, &::after {
    content: "";
    position: absolute;
    top: 50%;
    height: 1px;
    background-color: #e1e5eb;
    width: calc(50% - 70px);
  }
  
  &::before {
    left: 0;
  }
  
  &::after {
    right: 0;
  }
  
  span {
    background: #fff;
    padding: 0 15px;
    font-size: 12px;
    color: #999;
    position: relative;
    z-index: 1;
  }
`;

export const FormRow = styled.div`
  margin-bottom: 20px;
  position: relative;
  animation: ${fadeIn} 0.8s ease-out 0.5s both;
  
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 16px;
  left: 48px;
  color: #999;
  font-size: 14px;
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: 2;
  
  &.active {
    top: -10px;
    left: 15px;
    font-size: 12px;
    color: #4096ff;
    background: white;
    padding: 0 5px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: #f8f9fa;
  border-radius: 10px;
  padding: 0 15px;
  border: 1px solid ${props => props.focused ? '#4096ff' : '#e1e5eb'};
  transition: all 0.3s ease;
  
  &:focus-within {
    border-color: #4096ff;
    box-shadow: 0 0 0 3px rgba(64, 150, 255, 0.2);
    background: white;
  }
  
  input {
    flex: 1;
    border: none !important;
    background: transparent !important;
    padding: 15px 10px !important;
    font-size: 14px !important;
    z-index: 1;
    
    &:focus {
      outline: none;
    }
  }
`;

export const BtnLogin = styled.button`
  position: relative;
  font-weight: 600;
  border: none;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  line-height: 24px;
  font-size: 16px;
  padding: 14px 20px;
  color: #fff;
  background: linear-gradient(45deg, #4096ff, #1677ff);
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(64, 150, 255, 0.25);
  overflow: hidden;
  animation: ${fadeIn} 0.8s ease-out 0.6s both;
  
  span {
    position: relative;
    z-index: 2;
  }
  
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
      rgba(255, 255, 255, 0.2),
      transparent
    );
    z-index: 1;
    transition: left 1s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 14px rgba(64, 150, 255, 0.3);
    
    &:before {
      left: 100%;
      transition: left 1s;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &.disabled {
    background: linear-gradient(to right, #ccc, #bbb);
    cursor: not-allowed;
    box-shadow: none;
    
    &:hover {
      transform: none;
    }
    
    &:before {
      display: none;
    }
  }
`;

export const WrapperTextLight = styled.span`
  color: #4096ff;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: #1677ff;
    text-decoration: underline;
  }
`;

export const ErrorCustom = styled.span`
  color: #ff4d4f;
  font-size: 12px;
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  display: block;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const FormFooter = styled.div`
  margin-top: 10px;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out 0.7s both;
`;

export const ForgotPasswordText = styled.p`
  margin-bottom: 15px;
  font-size: 14px;
  color: #666;
  transition: all 0.3s ease;
  
  &:hover {
    color: #4096ff;
    cursor: pointer;
  }
`;

export const SignUpText = styled.p`
  font-size: 14px;
  color: #666;
  animation: ${fadeIn} 0.8s ease-out 0.8s both;
`;