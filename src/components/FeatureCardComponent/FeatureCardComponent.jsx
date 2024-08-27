import React from 'react'
import Icon1 from '../../assets/images/Icon1.webp'
import Icon2 from '../../assets/images/Icon2.webp'
import Icon3 from '../../assets/images/Icon3.webp'
import Icon4 from '../../assets/images/Icon4.webp'
import { Card, Description, IconWrapper, Title, Wrapper } from './style'
function FeatureCardComponent() {
    const features = [
        {
          icon: Icon1,
          title: 'Vô vàn lựa chọn',
          description: 'Tìm kiếm niềm vui với gần nửa triệu điểm tham quan, phòng khách sạn và nhiều trải nghiệm thú vị',
        },
        {
          icon: Icon2,
          title: 'Chơi vui, giá tốt',
          description: 'Trải nghiệm chất lượng với giá tốt. Tích lũy PhanTo coin để được thêm ưu đãi',
        },
        {
          icon: Icon3,
          title: 'Dễ dàng và tiện lợi',
          description: 'Đặt vé xác nhận ngay, miễn xếp hàng, miễn phí hủy, tiện lợi cho bạn tha hồ khám phá',
        },
        {
          icon: Icon4,
          title: 'Đáng tin cậy',
          description: 'Tham khảo đánh giá chân thực. Dịch vụ hỗ trợ tận tình, đồng hành cùng bạn mọi lúc, mọi nơi',
        },
      ];
      return (
        <Wrapper>
          {features.map((feature, index) => (
            <Card key={index}>
              <IconWrapper>
                <img src={feature.icon} alt={feature.title} />
              </IconWrapper>
              <Title>{feature.title}</Title>
              <Description>{feature.description}</Description>
            </Card>
          ))}
        </Wrapper>
      );
    }


export default FeatureCardComponent