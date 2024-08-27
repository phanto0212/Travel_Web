import React, { useEffect, useState } from 'react'
import { Avatar, BookNowLink, RatingStars, ReviewContainer, ReviewDate, ReviewerInfo, ReviewerName, ReviewMeta, ReviewText, Star } from './style';
import newRequest from '../../utils/request';

function DisplayRatingComponent({rate, tourTitle}) {
  const [user, setUser] = useState([])
  const fetchUserByRateId = async(rate_id)=>{
    try {
        const response = await newRequest.get(`/api/rating/get/user/${rate_id}`);
        setUser(response.data.user)
    }
    catch(error){
      console.log('error', error)
    }
  }
  useEffect(() => {
    fetchUserByRateId(rate.ratingId);
  }, [rate.ratingId]);
  const scrollToSpecificPosition = () => {
    window.scrollTo({
      top: 1200, // Thay đổi giá trị này để cuộn đến vị trí dọc mong muốn
      left: 200, // Thay đổi giá trị này để cuộn đến vị trí ngang mong muốn
      behavior: 'smooth'
    });
  };
    return (
        <ReviewContainer>
          <ReviewerInfo>
            <Avatar src="https://tse2.mm.bing.net/th?id=OIP.Z8d1mi6B_6j2JbElEPl-QQHaHa&pid=Api&P=0&h=220" alt="Reviewer" />
            <div>
              <ReviewerName>{user.username}</ReviewerName>
              <ReviewDate>{new Date(rate.createdAt).toLocaleDateString()}</ReviewDate>
            </div>
          </ReviewerInfo>
          <RatingStars>
          {[...Array(5)].map((_, index) => (
          <Star key={index} active={index < rate.rating}>★</Star>
        ))}
          </RatingStars>
          <ReviewMeta>
            Đánh giá cho: Day Tour · {tourTitle}
            <BookNowLink style={{cursor: 'pointer'}} onClick={scrollToSpecificPosition}>Đặt ngay</BookNowLink>
          </ReviewMeta>
          <ReviewText>
          {rate.comment}
          </ReviewText>
        </ReviewContainer>
      );
    };

export default DisplayRatingComponent