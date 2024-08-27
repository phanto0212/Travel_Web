import React from 'react'
import Image1 from '../../assets/images/Image1.webp'
import Image2 from '../../assets/images/Image2.webp'
import Image3 from '../../assets/images/Image3.webp'
import { Button, Card, Description, ImageWrapper, Title, Wrapper } from './style';
function PromotionComponent() {
    const promotions = [
        {
          image: Image1,
          title: 'Xem blog của PhanTo',
          description: 'PhanTo gợi ý cho bạn các xu hướng du lịch, lịch trình chi tiết và các mẹo',
          buttonText: 'Xem ngay',
        },
        {
          image: Image2,
          title: 'Tiết kiệm hơn với credit',
          description: 'Tìm hiểu cách đặt hoạt động với giá siêu tiết kiệm bằng cách để lại đánh giá',
          buttonText: 'Credit là gì?',
        },
        {
          image: Image3,
          title: 'Nhận ưu đãi khi mời bạn bè',
          description: 'Sau khi bạn của bạn đăng ký và hoàn thành đơn hàng đầu tiên, bạn sẽ nhận được điểm thưởng',
          buttonText: 'Mời bạn bè',
        },
      ];
  return (
    <Wrapper>
    {promotions.map((promotion, index) => (
      <Card key={index}>
        <ImageWrapper>
          <img src={promotion.image} alt={promotion.title} />
        </ImageWrapper>
        <Title>{promotion.title}</Title>
        <Description>{promotion.description}</Description>
        
      </Card>
    ))}
  </Wrapper>
  )
}

export default PromotionComponent