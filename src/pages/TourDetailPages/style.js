import styled, { keyframes } from "styled-components";
import { UserOutlined } from '@ant-design/icons';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
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

// Main container
export const Wrapper = styled.div`
  margin-top: 70px;
  background-color: #f9f9f9;
  position: relative;
  min-height: 100vh;
`;

// Hero Section
export const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  min-height: 400px;
  overflow: hidden;
  animation: ${fadeIn} 1s ease-out;
  
  @media (max-width: 768px) {
    height: 30vh;
    min-height: 250px;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${HeroSection}:hover & {
    transform: scale(1.05);
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%);
  z-index: 1;
`;

// Content Container
export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: -50px auto 0;
  padding: 0 20px 50px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 1240px) {
    padding: 0 40px 50px;
  }
  
  @media (max-width: 768px) {
    padding: 0 20px 30px;
  }
`;

// Breadcrumbs
export const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  margin-bottom: 20px;
  background: white;
  border-radius: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  flex-wrap: wrap;
  
  .anticon-right {
    color: #ccc;
    font-size: 10px;
    margin: 0 10px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 15px;
  }
`;

export const BreadcrumbItem = styled.div`
  font-size: 14px;
  color: #888;
  
  a {
    color: #888;
    text-decoration: none;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    
    .anticon {
      margin-right: 5px;
    }
    
    &:hover {
      color: #ff7e29;
    }
  }
  
  &.active {
    color: #ff7e29;
    font-weight: 500;
  }
`;

// Title
export const WrapperHeadertext = styled.h1`
  font-size: 36px;
  line-height: 1.3;
  font-weight: 700;
  color: #212121;
  margin-bottom: 25px;
  padding: 0 10px;
  animation: ${fadeIn} 0.8s ease-out;
  
  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #ff7e29, #ffb84d);
    margin-top: 15px;
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

// Header Info
export const HeaderInfo = styled.div`
  margin-bottom: 30px;
  animation: ${fadeIn} 1s ease-out;
`;

export const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  gap: 10px;
`;

export const BadgeItem = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #555;
  background-color: #f0f0f0;
  padding: 8px 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  
  &.bestseller {
    background: linear-gradient(135deg, #ff7e29, #ffb84d);
    color: white;
    font-weight: 600;
  }
  
  &.location {
    background-color: #e8f5e9;
    color: #43a047;
    
    .anticon {
      margin-right: 5px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

// Rating Section
export const RatingSection = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin: 20px 0;
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
  
  @media (max-width: 480px) {
    padding: 8px 15px;
  }
`;

export const RatingStar = styled.div`
  font-size: 22px;
  color: #f09b0a;
  display: flex;
  align-items: center;
  font-weight: 700;
  
  .anticon {
    margin-left: 5px;
    animation: ${float} 3s infinite ease-in-out;
  }
  
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const RatingScore = styled.span`
  margin-right: 3px;
`;

export const RatingTotal = styled.div`
  margin: 0 0 0 10px;
  color: #666;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
    color: #ff7e29;
  }
  
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const BookingContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.03);
  color: #555;
  
  @media (max-width: 480px) {
    padding: 8px 15px;
  }
`;

export const BookingIcon = styled(UserOutlined)`
  color: #ff7e29;
  margin-right: 8px;
  font-size: 16px;
`;

export const BookingTotal = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #555;
  
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

// Overview
export const OverviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 30px;
  animation: ${fadeIn} 1.2s ease-out;
  
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const OverviewItem = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 15px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  flex: 1;
  min-width: 200px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  }
  
  @media (max-width: 768px) {
    min-width: 150px;
    padding: 12px 15px;
  }
`;

export const OverviewIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255,126,41,0.1), rgba(255,184,77,0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  
  .anticon {
    font-size: 20px;
    color: #ff7e29;
  }
  
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    margin-right: 10px;
    
    .anticon {
      font-size: 16px;
    }
  }
`;

export const OverviewText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OverviewLabel = styled.span`
  font-size: 12px;
  color: #999;
  margin-bottom: 2px;
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

// Content Section
export const ContentSection = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 5px 30px rgba(0,0,0,0.05);
  animation: ${fadeIn} 1.4s ease-out;
  
  @media (max-width: 768px) {
    padding: 20px 15px;
    border-radius: 12px;
  }
`;

// Loading
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
  color: #666;
  font-weight: 500;
  gap: 20px;
`;

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 126, 41, 0.1);
  border-left-color: #ff7e29;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;