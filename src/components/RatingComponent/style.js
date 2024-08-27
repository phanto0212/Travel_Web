import styled from "styled-components";

export const WrapperHeader = styled.div`
        display: flex;
    align-items: center;
    
`;
export const WrapperRateAndStar = styled.div`
  display: flex;
    align-items: center;
`;
export const Reviewsratingtext = styled.div`
    font-size: 0;
    color: #212121;
`;
export const CoreText = styled.span`
    font-size: 44px;
    line-height: 1.32;
    font-weight: 500;
    color: #212121;
`;
export const CoreTextMax = styled.span`
   font-size: 20px;
    line-height: 1.32;
    font-weight: 500;
    color: #a8a8a8;
    vertical-align: sub;
`;
export const ReviewRatingCount = styled.div`
    margin: 4px 0 0 20px;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
`;
export const WriteYourRating = styled.div`
    font-size: 20px;
    color: #212121;
    margin-top:14px;
`;
export const ChooseStar = styled.div`
display: flex;
align-items: center;
margin-top: 18px;

`;
export const ButtonChooseStar = styled.div`
   margin-right: 15px;
  width: 56px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  border-radius: 20px;
  cursor: pointer;
  color: ${props => (props.active ? '#f09b0a' : '#000')};
  border: ${props => (props.active ? '2px solid #f09b0a' : '2px solid #ccc')};
  transition: color 0.3s ease, border-bottom 0.3s ease;

  &:hover {
    color: #ff5b00;
    border: 2px solid #f09b0a;
  }

`;
export const RatingTextDescription = styled.textarea`
      width: '400px';
      height: '300px';
      borderRadius: '5px';
      padding: '10px';
      marginTop: '10px';
      border: '1px solid #ccc';
      fontSize: '14px';
      boxSizing: 'border-box;
`;
export const SendAndCancelContainer = styled.div`
 display: flex;
 align-items: center;
`;
export const SendButton = styled.button`
  padding: 8px 16px;
  margin-right: 10px;
  background-color: #28a745; /* Màu xanh lá cây cho nút Gửi */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export const ClearButton = styled.button`
  padding: 8px 16px;
  background-color: #dc3545; /* Màu đỏ cho nút Xóa */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;