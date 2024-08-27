import styled from 'styled-components';

export const ReviewContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  width: 800px;
`;

export const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const ReviewerName = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const ReviewDate = styled.div`
  color: #999;
  font-size: 14px;
`;

export const RatingStars = styled.div`
  margin: 10px 0;
`;

export const Star = styled.span`
  color: ${props => (props.active ? '#ffcc00' : '#ccc')};
  font-size: 20px;
`;

export const ReviewText = styled.div`
  font-size: 20px;
  line-height: 1.5;
  margin-top: 10px;
  color: #000;
`;

export const ReviewMeta = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #555;
`;

export const BookNowLink = styled.a`
  color: #ff5b00;
  font-weight: bold;
  margin-left: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
