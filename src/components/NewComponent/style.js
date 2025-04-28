import styled, { keyframes, css } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const floatUp = keyframes`
  0% { transform: translateY(0) scale(0.5); opacity: 0; }
  50% { transform: translateY(-80px) scale(1.5); opacity: 1; }
  100% { transform: translateY(-120px) scale(1); opacity: 0; }
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

// Card container with 3D effects
export const PostCard = styled.div`
  perspective: 1000px;
  margin: 30px auto;
  max-width: 700px;
  width: 100%;
  transform-style: preserve-3d;
  animation: ${fadeIn} 0.6s ease-out;
  
  @media (max-width: 768px) {
    margin: 20px auto;
    width: 95%;
  }
`;

export const PostContainer = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.1),
    0 1px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  transform-origin: center center;
  
  &:hover {
    box-shadow: 
      0 15px 35px rgba(0, 0, 0, 0.12), 
      0 5px 15px rgba(0, 0, 0, 0.08);
    transform: translateY(-5px);
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    pointer-events: none;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15);
  }
  
  @media (max-width: 768px) {
    border-radius: 12px;
  }
`;

export const PostHeader = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

export const ProfileWrapper = styled.div`
  position: relative;
  margin-right: 15px;
`;

export const ProfileImage = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

export const ProfileBadge = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 16px;
  height: 16px;
  background: linear-gradient(45deg, #4CAF50, #8BC34A);
  border: 2px solid white;
  border-radius: 50%;
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const UserName = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: #262626;
  margin-bottom: 4px;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const TimeStamp = styled.div`
  font-size: 13px;
  color: #65676B;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  
  span {
    position: relative;
    padding-right: 10px;
    
    &:after {
      content: "•";
      position: absolute;
      right: 0;
      opacity: 0.6;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const LocationTag = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #1890ff;
  font-size: 13px;
  
  .anticon {
    font-size: 12px;
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const OptionsButton = styled.button`
  background: transparent;
  border: none;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s;
  color: #65676B;
  font-size: 18px;
  
  &:hover {
    background: #F2F3F5;
    color: #262626;
  }
`;

export const PostText = styled.p`
  padding: 15px 20px;
  font-size: 15px;
  line-height: 1.6;
  color: #262626;
  margin: 0;
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 14px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const PostImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.8s ease;
  
  ${PostContainer}:hover & {
    transform: scale(1.03);
  }
`;

export const PostImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.3));
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${PostContainer}:hover & {
    opacity: 1;
  }
`;

export const ReactionBubble = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 80px;
  animation: ${floatUp} 1s forwards;
  pointer-events: none;
`;

export const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px 20px;
  gap: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    padding: 10px 16px;
  }
`;

export const Tag = styled.span`
  background: linear-gradient(135deg, #f5f7fa 0%, #e8edf5 100%);
  color: #4a76b9;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 16px;
  transition: all 0.2s ease;
  
  &:hover {
    background: linear-gradient(135deg, #ebeef2 0%, #dde3ec 100%);
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  }
  
  @media (max-width: 768px) {
    font-size: 11px;
    padding: 3px 10px;
  }
`;

export const EngagementBar = styled.div`
  padding: 12px 20px 15px;
  
  @media (max-width: 768px) {
    padding: 10px 16px 12px;
  }
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  color: #65676B;
  border-top: 1px solid #eaeaea;
`;

export const FooterStats = styled.div`
  padding: 8px 0;
  margin-bottom: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    padding: 6px 0;
  }
`;

export const LikeCount = styled.div`
  font-size: 14px;
  color: #65676B;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ActionButton = styled.button`
  flex: 1;
  background: transparent;
  border: none;
  padding: 8px 0;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.isActive ? '#E53935' : '#65676B'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 8px;
  
  .anticon {
    font-size: 18px;
    color: ${props => props.isActive ? '#E53935' : '#65676B'};
    
    ${props => props.isActive && css`
      animation: ${pulseAnimation} 0.3s ease;
    `}
  }
  
  &:hover {
    background: ${props => props.isActive ? 'rgba(229, 57, 53, 0.1)' : '#F2F3F5'};
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 6px 0;
    
    .anticon {
      font-size: 16px;
    }
  }
`;

export const CommentButton = styled(ActionButton)`
  color: #65676B;
  
  &:hover {
    background: #F2F3F5;
    color: #4267B2;
    
    .anticon {
      color: #4267B2;
    }
  }
`;

export const ShareButton = styled(ActionButton)`
  color: #65676B;
  
  &:hover {
    background: #F2F3F5;
    color: #1DA1F2;
    
    .anticon {
      color: #1DA1F2;
    }
  }
`;

export const FooterItem = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 14px;
  padding: 6px 15px;
  border: 1px solid #e1e1e1;
  border-radius: 20px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f8f8f8;
    border-color: #d1d1d1;
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 12px;
  }
`;

export const Icon = styled.span`
  margin-right: 5px;
  font-size: 16px;
`;