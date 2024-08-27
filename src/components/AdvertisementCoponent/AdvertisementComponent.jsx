import React from 'react'
import { Wrapper, WrapperImage } from './style'
import Admintise1 from '../../assets/images/Advertisement1.webp'
import Admintise2 from '../../assets/images/Advertisement2.webp'
import Admintise3 from '../../assets/images/Advertisement3.webp'
function AdvertisementComponent() {
  return (
    <Wrapper>
        <WrapperImage>
            <img src='https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_342,c_fill,q_85/v1724046005/banner/trnvxy6nphpajtsnobe1.webp' alt='anh dep'></img>
        </WrapperImage>
        <WrapperImage>
            <img src={Admintise2} alt='anh dep'></img>
        </WrapperImage>
        <WrapperImage>
            <img src={Admintise3} alt='anh dep'></img>
        </WrapperImage>
        

    </Wrapper>
  )
}

export default AdvertisementComponent