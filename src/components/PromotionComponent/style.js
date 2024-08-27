import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px 0;
  flex-wrap: wrap;
  
`;

export const Card = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-5px); // Dịch chuyển lên trên 5px khi hover
    }
`;

export const ImageWrapper = styled.div`
  margin-bottom: 20px;
  
  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`;

export const Title = styled.h3`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 15px;
  color: #666;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #ff5b00;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  
  &:hover {
    background-color: #e04a00;
  }
`;
