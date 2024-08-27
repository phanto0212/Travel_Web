import React, { useEffect, useState } from 'react'
import { BookingTotal, RatingStar, RatingTotal, Wrapper, WrapperHeadertext, WrapperRatingContainer, WrapperTagName, WrapperTagNameContainer } from './style'
import TourDetailComponent from '../../components/TourDetailComponent/TourDetailComponent'
import {StarFilled}from '@ant-design/icons'
import { useParams } from 'react-router-dom'
import newRequest from '../../utils/request'
function TourDetail() {
  const params = useParams()
  const [isChange, setIsChange] = useState(0)
  const [listRate, setListRate] = useState([])
  const [rateSize, setRateSize] = useState(0)
  const [rateScore,setRateScore] = useState(0)
  const [countBooked, setCountBooked] = useState(0)
  const id = params.tourId;
  
  const [tour, setTour] = useState([])
  const fetchTour = async()=>{
    try{
        const response = await newRequest.get(`/api/tours/getTourByid/${id}`);
        
        if (response.data && response.data.tour) {
          setTour(response.data.tour);
        } else {
          console.log('No tour data found');
        }
    }
    catch(error){
      console.log('error: ', error)
    }
  }
  useEffect(()=>{
    fetchTour()
  }, [id])
  const fetchRatingTour = async(tourId)=>{
    try{
      const response = await newRequest.get(`/api/rating/tour/${tourId}`);
       setListRate(response.data.rate_list || [])
       setRateSize(response.data.rate_size || 0)
       setRateScore(response.data.rate_score || 0)
       setCountBooked(response.data.count_booked || 0)
       
    }
    catch(error){
      console.log('error', error)
    }
  }
  const handleData = (data)=>{
    if(data==true){
      setIsChange(isChange+1)
    }
  }
  useEffect(() => {
    if (tour && tour.tourId) {
      fetchRatingTour(tour.tourId);
    }
  }, [isChange, tour]); // Thêm `tour` vào dependency array
  const formattedRateScore = rateScore != null ? rateScore.toFixed(1) : 'N/A';
  if (!tour) {
    return <div>Loading...</div>;
  }
  return (
    <Wrapper>
       
       <WrapperHeadertext>{tour.title ? tour.title : 'No title available'}</WrapperHeadertext>
         {/* <WrapperTagNameContainer>
            <WrapperTagName>Bán chạy</WrapperTagName>
            <WrapperTagName>Tour ghép & Tour riêng</WrapperTagName>
         </WrapperTagNameContainer> */}
         <div style={{display: 'flex', alignItems: 'center', margin: '50px 0 15px 14px'}}>
           <WrapperRatingContainer>
              <RatingStar><span style={{marginRight: '3px'}}>{formattedRateScore}</span><StarFilled/></RatingStar>
              <RatingTotal>({rateSize} đánh giá)</RatingTotal>
            </WrapperRatingContainer>
            <BookingTotal> •  {countBooked}+ đã đặt</BookingTotal>
         </div>
         
       <TourDetailComponent onData={handleData} tour ={tour} listRate={listRate} rateScore={rateScore} rateSize={rateSize} />
       
    </Wrapper>
  )
}

export default TourDetail