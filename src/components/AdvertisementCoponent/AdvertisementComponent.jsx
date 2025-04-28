import React from 'react';
import { 
  Wrapper, 
  WrapperImage, 
  AdContainer, 
  AdOverlay, 
  AdTitle,
  AdDescription,
  ResponsiveContainer
} from './style';
import Admintise1 from '../../assets/images/Advertisement1.webp';
import Admintise2 from '../../assets/images/Advertisement2.webp';
import Admintise3 from '../../assets/images/Advertisement3.webp';

function AdvertisementComponent() {
  const advertisements = [
    {
      image: Admintise1,
      title: "Khám phá biển xanh",
      description: "Kỳ nghỉ dưỡng tuyệt vời tại bãi biển đẹp nhất Việt Nam"
    },
    {
      image: Admintise2,
      title: "Trải nghiệm núi rừng",
      description: "Khám phá vẻ đẹp hoang sơ của vùng cao nguyên"
    },
    {
      image: Admintise3,
      title: "Du lịch văn hóa",
      description: "Khám phá nét đẹp di sản và văn hóa độc đáo"
    }
  ];

  return (
    <ResponsiveContainer>
      <Wrapper>
        {advertisements.map((ad, index) => (
          <WrapperImage key={index}>
            <img src={ad.image} alt={`Advertisement ${index + 1}`} />
            <AdOverlay />
            <AdContainer>
              <AdTitle>{ad.title}</AdTitle>
              <AdDescription>{ad.description}</AdDescription>
            </AdContainer>
          </WrapperImage>
        ))}
      </Wrapper>
    </ResponsiveContainer>
  );
}

export default AdvertisementComponent;