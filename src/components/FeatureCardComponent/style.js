import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin: 30px 0 30px 0;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  flex: 1;
  min-width: 230px;
  max-width: 280px;
  text-align: center;
  margin: 20px;
`;

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto 10px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Title = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 19px;
  color: #666;
`;

