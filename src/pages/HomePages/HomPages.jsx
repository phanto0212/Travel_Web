import SlideComponent from "../../components/SlideComponent/SlideComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import slider1  from '../../assets/images/slide1.webp'

import slider3  from '../../assets/images/slide3.webp'
import CartComponent from "../../components/CartComponent/CartComponent";
import { ButtonMoreTour, Container, ContainerButton, ContainerH2Text, ContainerInput, ContainerKhamPha, ContainerLink, ContainerTitleText, SearchOutlinedCustom, TitleTour } from "./styls";
import newRequest from "../../utils/request";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdvertisementComponent from "../../components/AdvertisementCoponent/AdvertisementComponent";
import FeatureCardComponent from "../../components/FeatureCardComponent/FeatureCardComponent";
import PromotionComponent from "../../components/PromotionComponent/PromotionComponent";

function HomePages() {
    const Nagative = useNavigate()
    const [tours, setTours] = useState([])
    const [next1, setNext1]= useState(0)
    const [next2, setNext2]= useState(12)
    const fetchTours = async () => {
        try {
            const response = await newRequest.get('/api/tours/get/all');
            setTours(response.data.tours || []);
            
        } catch (error) {
            console.error('Failed to fetch tours:', error); // Debugging
        }
    };
    useEffect(()=>{
        fetchTours()
    },[])
    return ( 
        <div>
            <SlideComponent arrImages = {[slider1, slider3]} />
            <Container>
                <ContainerTitleText>THẾ GIỚI TRỌN NIỀM VUI</ContainerTitleText>
                <ContainerH2Text>Khám phá niềm vui của bạn mọi lúc, mọi nơi - từ chuyến du lịch ngẫu hứng tới những cuộc phiêu lưu khắp thế giới</ContainerH2Text>
                <ContainerKhamPha>
                   <SearchOutlinedCustom />
                   <ContainerInput></ContainerInput>
                   <ContainerButton onClick={() => window.location.href = '/tours'} >Khám phá</ContainerButton>
                </ContainerKhamPha>
            </Container>
            <div style={{padding: '50px 150px', height: '1000px',  }}>
            <TitleTour>Ưu đãi cho bạn</TitleTour>
            <AdvertisementComponent></AdvertisementComponent>
            <TitleTour >Các hoạt động nổi bật</TitleTour>
               <div style={{marginTop: '20px',  display: 'flex',flexWrap: 'wrap', alignItems: 'center', gap: '25px'}} >
               {tours.slice(next1, next2).map((tour, index) => (
                    <CartComponent key={index} tour={tour} onClick={()=>Nagative(`/tour-detail/${tour.tourId}`)} />
                ))}
               </div>
               <ButtonMoreTour onClick={() => window.location.href = '/tours'}><span>Xem Thêm</span></ButtonMoreTour>
               {/* <ButtonMoreTour onClick={() =>{setNext1(next1+4); setNext2(next2+4)} }><span>hehe</span></ButtonMoreTour> */}
               <TitleTour>Vì sao bạn nên chọn tôi</TitleTour>
               <FeatureCardComponent />
               <TitleTour>Bí kíp</TitleTour>
               <PromotionComponent />
            </div>
        </div>
     );
}

export default HomePages;