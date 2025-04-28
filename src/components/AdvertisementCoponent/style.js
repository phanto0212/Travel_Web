import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ResponsiveContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  
  @media (max-width: 1240px) {
    padding: 0 30px;
  }
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
  
  @media (max-width: 480px) {
    padding: 0 15px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin: 40px 0;
  
  @media (max-width: 1200px) {
    gap: 20px;
  }
  
  @media (max-width: 992px) {
    gap: 15px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 25px;
  }
`;

export const WrapperImage = styled.div`
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex: 1;
  min-width: 300px;
  height: 180px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.6s ease-out;
  cursor: pointer;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
    
    img {
      transform: scale(1.1);
    }
  }
  
  @media (max-width: 1200px) {
    height: 160px;
  }
  
  @media (max-width: 992px) {
    flex-basis: calc(50% - 15px);
    min-width: 250px;
  }
  
  @media (max-width: 768px) {
    height: 200px;
    flex-basis: 100%;
  }
  
  @media (max-width: 480px) {
    height: 160px;
    border-radius: 12px;
  }
`;

export const AdOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 100%);
`;

export const AdContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  z-index: 2;
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const AdTitle = styled.h3`
  color: white;
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 8px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 4px;
  }
`;

export const AdDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
  line-height: 1.4;
  
  @media (max-width: 480px) {
    font-size: 12px;
    max-width: 90%;
  }
`;