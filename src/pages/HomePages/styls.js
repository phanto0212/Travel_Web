import styled, { keyframes, css } from "styled-components";
import { SearchOutlined } from '@ant-design/icons';

// ANIMATIONS
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const borderGlow = keyframes`
  0% { box-shadow: 0 0 5px rgba(255, 91, 0, 0.5); }
  50% { box-shadow: 0 0 20px rgba(255, 91, 0, 0.8); }
  100% { box-shadow: 0 0 5px rgba(255, 91, 0, 0.5); }
`;

const underlineExpand = keyframes`
  from { width: 0; opacity: 0; }
  to { width: 60px; opacity: 1; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

// STYLED COMPONENTS
export const ScrollAnimation = styled.div`
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeIn} 0.8s forwards;
  animation-delay: ${props => props.delay || 0}s;
`;

export const TitleTour = styled.h2`
    color: #212121;
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 44px;
    margin-top: 40px;
    
    @media (max-width: 1200px) {
        font-size: 26px;
        margin-bottom: 36px;
        margin-top: 32px;
    }
    
    @media (max-width: 768px) {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 30px;
        margin-top: 25px;
    }
    
    @media (max-width: 576px) {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 24px;
        margin-top: 20px;
    }
`;
export const DestinationSectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  position: relative;
  display: inline-block;
  
  span {
    background: linear-gradient(90deg, #ff5b00, #ff7e29);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: 800;
    position: relative;
    
    &::after {
      content: "🔥"; /* Thêm emoji lửa */
      position: relative;
      margin-left: 5px;
      font-size: 24px;
      top: -2px;
    }
  }
  
  &::before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #ff5b00, #ff7e29);
    border-radius: 3px;
  }
  
  animation: ${fadeIn} 0.8s forwards;
  
  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 25px;
    
    span::after {
      font-size: 20px;
    }
  }
  
  @media (max-width: 576px) {
    font-size: 22px;
    margin-bottom: 20px;
    
    span::after {
      font-size: 18px;
    }
    
    &::before {
      width: 60px;
    }
  }
`;
export const TitleWithAccent = styled.h2`
    color: #212121;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 10px;
    margin-top: 60px;
    text-align: center;
    position: relative;
    z-index: 1;
    &:after {
        content: "";
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: linear-gradient(90deg, #ff5b00, #ff9068);
        border-radius: 2px;
    }
    
    @media (max-width: 1200px) {
        font-size: 30px;
        margin-top: 50px;
    }
    
    @media (max-width: 768px) {
        font-size: 26px;
        margin-top: 40px;
    }
    
    @media (max-width: 576px) {
        font-size: 22px;
        margin-top: 35px;
    }
`;

export const AnimatedUnderline = styled.div`
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #ff5b00, #ff9068);
    border-radius: 2px;
    margin: 20px auto 40px;
    animation: ${underlineExpand} 1s forwards;
`;

export const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 40px;
    opacity: 0;
    transform: translateY(20px);
    
    &.animate-in {
        animation: ${fadeIn} 0.8s forwards;
    }
    
    @media (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

export const SectionSubtitle = styled.p`
    color: #666;
    font-size: 16px;
    margin: 10px auto 0;
    max-width: 600px;
    
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const Container = styled.div`
    color: #fff;
    position: absolute;
    left: 0;
    right: 25%; /* Sửa từ right: 25% thành right: 0 để căn giữa */
    top: 25%; /* Sửa từ top: 25% thành top: 45% để định vị tốt hơn */
    transform: translateY(-50%);
    max-width: 1160px;
    width: 90%;
    margin: 0 auto;
    z-index: 800;
    padding: 0;
    opacity: 0;
    
    &.animate-in {
        animation: ${fadeIn} 0.8s forwards;
    }
    
    @media (max-width: 992px) {
        width: 90%;
        top: 50%;
    }
    
    @media (max-width: 768px) {
        top: 45%;
        width: 90%;
    }
    
    @media (max-width: 576px) {
        top: 40%;
        width: 90%;
    }
`;
export const AnimatedHighlight = styled.span`
    position: relative;
    display: inline-block;
    color: #fff;
    padding: 0 5px;
    background: linear-gradient(90deg, #ff5b00, #ff7e29);
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(255, 91, 0, 0.2);
`;

export const HeroCTAWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    gap: 20px;
    
    .cta-item {
        display: flex;
        align-items: center;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(3px);
        padding: 8px 16px;
        border-radius: 30px;
        font-size: 14px;
        transition: all 0.3s ease;
        
        &:hover {
            background: rgba(255, 255, 255, 0.25);
            transform: translateY(-2px);
        }
    }
    
    .cta-icon {
        margin-right: 8px;
        font-size: 16px;
    }
    
    @media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        
        .cta-item {
            font-size: 12px;
            padding: 6px 12px;
        }
        
        .cta-icon {
            font-size: 14px;
        }
    }
`;

export const ContainerKhamPha = styled.div`
    align-items: center;
    background: #fff;
    border: none;
    border-radius: 12px;
    box-sizing: border-box;
    color: #212121;
    display: flex;
    height: 64px;
    padding: 0 3px 0 16px;
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    z-index: 5;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    
    &:hover {
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        transform: translateY(-3px);
    }
    
    @media (max-width: 768px) {
        height: 56px;
        padding: 0 3px 0 12px;
    }
    
    @media (max-width: 576px) {
        height: 52px;
        border-radius: 8px;
        padding: 0 3px 0 10px;
    }
`;

export const ContainerTitleText = styled.h1`
    font-size: 60px;
    font-weight: 700;
    line-height: 1.32;
    margin-bottom: 10px;
    color: #fff;
    text-align: center;
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    
    @media (max-width: 1200px) {
        font-size: 48px;
        line-height: 1.3;
    }
    
    @media (max-width: 992px) {
        font-size: 42px;
    }
    
    @media (max-width: 768px) {
        font-size: 36px;
        line-height: 1.25;
    }
    
    @media (max-width: 576px) {
        font-size: 28px;
        line-height: 1.2;
        margin-bottom: 5px;
    }
`;

export const ContainerH2Text = styled.h2`
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    margin: 0 0 30px;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
    text-align: center;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: 992px) {
        font-size: 18px;
        line-height: 28px;
    }
    
    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 24px;
        margin: 0 0 25px;
    }
    
    @media (max-width: 576px) {
        font-size: 14px;
        line-height: 20px;
        margin: 0 0 20px;
    }
`;



export const ContainerInput = styled.input`
    background-color: transparent;
    border: none;
    border-radius: 6px;
    box-sizing: border-box;
    caret-color: #ff5722;
    color: #212121;
    font-size: 16px;
    font-weight: 400;
    height: 100%;
    line-height: 1.5;
    overflow: hidden;
    padding: 15px 0;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    z-index: 400;
    outline: none;
    
    &:focus {
        border: none;
        outline: none;
    }
    
    &::placeholder {
        color: #aaa;
    }
    
    @media (max-width: 768px) {
        font-size: 15px;
        padding: 12px 0;
    }
    
    @media (max-width: 576px) {
        font-size: 14px;
        padding: 10px 0;
    }
`;

export const ContainerButton = styled.div`
    align-items: center;
    background: linear-gradient(90deg, #ff5b00, #ff7e29);
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    display: flex;
    flex: none;
    font-size: 16px;
    font-weight: 500;
    height: 52px;
    line-height: 1.5;
    margin-left: 16px;
    padding: 0 30px;
    white-space: nowrap;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(255, 91, 0, 0.3);
    
    .search-icon {
        margin-right: 8px;
    }
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(255, 91, 0, 0.4);
        background: linear-gradient(90deg, #ff7e29, #ff5b00);
    }
    
    &:active {
        transform: translateY(1px);
        box-shadow: 0 2px 10px rgba(255, 91, 0, 0.3);
    }
    
    @media (max-width: 768px) {
        height: 46px;
        font-size: 15px;
        padding: 0 20px;
        margin-left: 12px;
    }
    
    @media (max-width: 576px) {
        height: 42px;
        font-size: 14px;
        padding: 0 15px;
        margin-left: 8px;
        border-radius: 6px;
    }
`;

export const SearchOutlinedCustom = styled(SearchOutlined)`
    font-size: 18px;
    color: #aaa;
    margin-right: 10px;
    
    @media (max-width: 576px) {
        font-size: 16px;
        margin-right: 8px;
    }
`;

export const ButtonMoreTour = styled.button`
    background: linear-gradient(90deg, #ff5b00, #ff7e29);
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    padding: 12px 35px;
    cursor: pointer;
    border: none;
    color: #fff;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(255, 91, 0, 0.2);
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transform: translateX(-100%);
        transition: 0.6s;
    }
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(255, 91, 0, 0.4);
        
        &:before {
            transform: translateX(100%);
        }
    }
    
    &:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(255, 91, 0, 0.2);
    }
    
    @media (max-width: 768px) {
        font-size: 15px;
        padding: 10px 30px;
    }
    
    @media (max-width: 576px) {
        font-size: 14px;
        padding: 10px 25px;
        border-radius: 25px;
    }
`;

export const SeeMoreWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px 0 30px;
`;

export const ResponsiveContainer = styled.div`
    padding: 50px;
    max-width: 1400px;
    margin: 0 auto;
    
    @media (min-width: 1400px) {
        padding: 50px 20px;
    }
    
    @media (max-width: 1200px) {
        padding: 40px;
    }
    
    @media (max-width: 992px) {
        padding: 35px;
    }
    
    @media (max-width: 768px) {
        padding: 30px;
    }
    
    @media (max-width: 576px) {
        padding: 25px 15px;
    }
`;

export const ScrollFadeWrapper = styled.div`
    position: relative;
    
    /* Điều chỉnh hoặc loại bỏ hiệu ứng sương mù ở hai bên */
    &:before, &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 10px; /* Giảm độ rộng từ 50px xuống 30px */
        z-index: 1;
        pointer-events: none;
        opacity: 0.6; /* Giảm độ đậm của hiệu ứng */
    }
    
    &:before {
        left: 0;
        background: linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%); /* Giảm độ đậm từ 1 xuống 0.8 */
    }
    
    &:after {
        right: 0;
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 100%); /* Giảm độ đậm từ 1 xuống 0.8 */
    }
    
    @media (max-width: 768px) {
        &:before, &:after {
            display: none;
        }
    }
`;

export const CardGridWithScrollFade = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    
    @media (max-width: 992px) {
        gap: 25px;
    }
    
    @media (max-width: 768px) {
        gap: 20px;
    }
    
    @media (max-width: 576px) {
        gap: 15px;
    }
`;

export const CardGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 20px;
    
    @media (max-width: 992px) {
        gap: 25px;
    }
    
    @media (max-width: 768px) {
        gap: 20px;
    }
    
    @media (max-width: 576px) {
        gap: 15px;
    }
`;

export const CardWrapper = styled.div`
    width: calc(25% - 22.5px);
    opacity: 0;
    transform: translateY(20px);
    position: relative;
    
    &.animate-in {
        animation: ${fadeIn} 0.8s forwards;
    }
    
    @media (max-width: 1200px) {
        width: calc(33.33% - 16.67px);
    }
    
    @media (max-width: 992px) {
        width: calc(50% - 12.5px);
    }
    
    @media (max-width: 576px) {
        width: 100%;
    }
`;

export const CardSkeleton = styled.div`
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    height: 100%;
    
    .skeleton-content {
        padding: 15px;
    }
`;

export const PromoTag = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    background: linear-gradient(135deg, #ff5b00, #ff7e29);
    color: white;
    padding: 5px 10px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 14px;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(255, 91, 0, 0.3);
    animation: ${pulse} 2s infinite;
    
    @media (max-width: 576px) {
        font-size: 12px;
        padding: 4px 8px;
    }
`;

export const SectionWithBackground = styled.section`
    background-color: #f8f8f8;
    margin: 50px -50px 70px;
    padding: 60px 50px;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    opacity: 0;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1') no-repeat center center;
        background-size: cover;
        opacity: 0.05;
        z-index: 0;
    }
    
    &.animate-in {
        animation: ${fadeIn} 0.8s forwards;
    }
    
    @media (max-width: 1200px) {
        margin: 40px -40px 60px;
        padding: 50px 40px;
    }
    
    @media (max-width: 992px) {
        margin: 35px -35px 50px;
        padding: 45px 35px;
    }
    
    @media (max-width: 768px) {
        margin: 30px -30px 40px;
        padding: 40px 30px;
        border-radius: 15px;
    }
    
    @media (max-width: 576px) {
        margin: 25px -15px 35px;
        padding: 35px 15px;
        border-radius: 10px;
    }
`;

export const FeaturedDestinations = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 40px;
    position: relative;
    z-index: 1;
    
    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }
    
    @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`;

export const DestinationCard = styled.div`
    position: relative;
    height: 250px;
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    opacity: 0;
    animation: ${fadeIn} 0.8s forwards;
    animation-delay: ${props => props.delay || 0}s;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url(${props => props.image}) no-repeat center center;
        background-size: cover;
        transition: transform 0.5s ease;
    }
    
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%);
    }
    
    &:hover {
        &:before {
            transform: scale(1.1);
        }
    }
    
    @media (max-width: 768px) {
        height: 200px;
    }
`;

export const DestinationName = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    
    .anticon {
        margin-right: 5px;
        color: #ff5b00;
    }
    
    .tour-count {
        font-size: 14px;
        opacity: 0.8;
        font-weight: normal;
        margin-top: 5px;
    }
    
    @media (max-width: 576px) {
        font-size: 18px;
        
        .tour-count {
            font-size: 12px;
        }
    }
`;

export const ScrollToTopButton = styled.button`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: white;
    color: #ff5b00;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    z-index: 999;
    font-size: 20px;
    transition: all 0.3s ease;
    animation: ${fadeIn} 0.5s;
    
    &:hover {
        background: #ff5b00;
        color: white;
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(255, 91, 0, 0.3);
    }
    
    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
        font-size: 18px;
        bottom: 20px;
        right: 20px;
    }
`;

export const FloatingBookingCTA = styled.div`
    position: fixed;
    bottom: 30px;
    left: 30px;
    background: linear-gradient(90deg, #ff5b00, #ff7e29);
    color: white;
    padding: 15px 25px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(255, 91, 0, 0.3);
    z-index: 999;
    animation: ${float} 3s infinite ease-in-out;
    transition: all 0.3s ease;
    min-width: 200px;
    
    .cta-content {
        display: flex;
        flex-direction: column;
    }
    
    .cta-title {
        font-size: 18px;
        font-weight: 600;
    }
    
    .cta-subtitle {
        font-size: 12px;
        opacity: 0.9;
    }
    
    .cta-arrow {
        font-size: 24px;
        margin-left: 15px;
    }
    
    &:hover {
        transform: translateY(-5px) scale(1.05);
        box-shadow: 0 10px 25px rgba(255, 91, 0, 0.4);
    }
    
    @media (max-width: 768px) {
        bottom: 20px;
        left: 20px;
        padding: 12px 20px;
        
        .cta-title {
            font-size: 16px;
        }
        
        .cta-subtitle {
            font-size: 11px;
        }
    }
    
    @media (max-width: 576px) {
        min-width: 160px;
        
        .cta-title {
            font-size: 14px;
        }
        
        .cta-subtitle {
            display: none;
        }
    }
`;