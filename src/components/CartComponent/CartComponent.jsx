
import React, { useEffect, useState } from 'react'
import { CartDescription, CartPrice, CartTitleText, ContainerLastCart, Description, DiscountPrice, LastCart, LastCart1, OriganalPrice, StyledCard, StyleNameProduct, Wrapper, WrapperReportText } from './style'
import {StarFilled}from '@ant-design/icons'
import newRequest from '../../utils/request'

function CartComponent({tour, onClick, rateAndBook}) {
  const [scoreRate, setScoreRate] = useState(0)
  const [scoreBook, setScoreBook] = useState(0)
  const maxLength = 57; // Giới hạn số ký tự muốn hiển thị
    const shortenedTitle = tour.title.length > maxLength
        ? tour.title.substring(0, maxLength) + '...'
        : tour.title
    const marginBottomValue = shortenedTitle.length < 31 ? '24px' : '4px';
    const fetchScoreRateAndBook =async(tourId)=>{
      try{
         const reponse = await newRequest.get(`/api/tours/getRateAndBooking/${tourId}`);
         setScoreBook(reponse.data.total_count_book)
         setScoreRate(reponse.data.rate_score)

      }
      catch(error){
          console.log('error',error)
      }
  }
  useEffect(()=>{
    fetchScoreRateAndBook(tour.tourId)
  },[scoreBook, scoreRate])
  return (
    <StyledCard
    onClick={onClick}
    hoverable
    bodyStyle={{padding : '10px'}}
    style={{ width: 285, height: 355 }}
    cover={ <img alt="image" src={tour.image} style={{maxHeight:'160px'}} />}
  >
    <Wrapper>
         <StyleNameProduct>{tour.kind} • {tour.destination_location} </StyleNameProduct>
         <CartTitleText style={{marginBottom : marginBottomValue}}>{shortenedTitle}</CartTitleText>
         <CartDescription><Description>Bán chạy</Description><Description>Hoàn tiền dễ dàng</Description></CartDescription>
         <WrapperReportText >{scoreRate > 0 ? (
                        <>
                            <StarFilled style={{ color: '#f09b0a', marginRight: '3px' }} />
                            <span style={{ color: '#f09b0a' }}>{scoreRate}</span>
                        </>
                    ) : (
                        <span>Chưa có đánh giá</span>
                    )}
                    <span style={{ marginLeft: '5px' }}>• {scoreBook}+ Đã được đặt</span>
          </WrapperReportText>
         <CartPrice>
            <DiscountPrice>Từ ₫ {tour.adult_price.toLocaleString('vi-VN')}</DiscountPrice>
            <OriganalPrice> ₫ {(tour.adult_price * 1.3).toLocaleString('vi-VN')}</OriganalPrice>
         </CartPrice>
         <ContainerLastCart>
         <LastCart>Sale</LastCart>
         <LastCart1>Chính sách đảm bảo giá tốt</LastCart1>

         </ContainerLastCart>
         
    </Wrapper>
       
  </StyledCard>
  )
}

export default CartComponent
