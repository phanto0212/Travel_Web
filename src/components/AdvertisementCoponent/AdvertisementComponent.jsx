import React from 'react';
import { Wrapper, WrapperImage } from './style';
import Admintise1 from '../../assets/images/Advertisement1.webp';
import Admintise2 from '../../assets/images/Advertisement2.webp';
import Admintise3 from '../../assets/images/Advertisement3.webp';

function AdvertisementComponent() {
  return (
    <Wrapper>
      <WrapperImage>
        <img src={Admintise1} alt='Advertisement 1' />
      </WrapperImage>
      <WrapperImage>
        <img src={Admintise2} alt='Advertisement 2' />
      </WrapperImage>
      <WrapperImage>
        <img src={Admintise3} alt='Advertisement 3' />
      </WrapperImage>
    </Wrapper>
  );
}

export default AdvertisementComponent;
