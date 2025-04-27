import React, { useEffect, useState } from 'react'
import { 
  Wrapper, 
  HeroSection,
  HeroImage,
  HeroOverlay,
  ContentContainer,
  WrapperHeadertext, 
  HeaderInfo,
  BadgesContainer,
  BadgeItem,
  RatingSection,
  RatingContainer,
  RatingStar, 
  RatingScore,
  RatingTotal, 
  BookingContainer,
  BookingTotal,
  BookingIcon,
  ContentSection,
  Breadcrumbs,
  BreadcrumbItem,
  LoadingContainer,
  LoadingSpinner,
  OverviewContainer,
  OverviewItem,
  OverviewIcon,
  OverviewText,
  OverviewLabel
} from './style'
import TourDetailComponent from '../../components/TourDetailComponent/TourDetailComponent'
import { StarFilled, CalendarOutlined, EnvironmentOutlined, TeamOutlined, HomeOutlined, RightOutlined } from '@ant-design/icons'
import { useParams, Link } from 'react-router-dom'
import newRequest from '../../utils/request'

function TourDetail() {
  const params = useParams()
  const [isChange, setIsChange] = useState(0)
  const [listRate, setListRate] = useState([])
  const [rateSize, setRateSize] = useState(0)
  const [rateScore,setRateScore] = useState(0)
  const [countBooked, setCountBooked] = useState(0)
  const [loading, setLoading] = useState(true)
  const id = params.tourId;
  
  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn về đầu trang
  }, []);
  
  const [tour, setTour] = useState(null)
  
  const fetchTour = async() => {
    try{
        setLoading(true);
        const response = await newRequest.get(`/api/tours/getTourByid/${id}`);
        
        if (response.data && response.data.tour) {
          setTour(response.data.tour);
        } else {
          console.log('No tour data found');
        }
        setLoading(false);
    }
    catch(error){
      console.log('error: ', error);
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetchTour()
  }, [id])
  
  const fetchRatingTour = async(tourId) => {
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
  
  const handleData = (data) => {
    if(data === true){
      setIsChange(isChange + 1)
    }
  }
  
  useEffect(() => {
    if (tour && tour.tourId) {
      fetchRatingTour(tour.tourId);
    }
  }, [isChange, tour]);
  
  const formattedRateScore = rateScore != null ? rateScore.toFixed(1) : '0.0';
  
  if (loading) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
        <div>Đang tải thông tin tour...</div>
      </LoadingContainer>
    );
  }
  
  return (
    <Wrapper>
      <HeroSection>
        <HeroImage src={tour.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'} alt={tour.title} />
        <HeroOverlay />
      </HeroSection>
      
      <ContentContainer>
        <Breadcrumbs>
          <BreadcrumbItem>
            <Link to="/">
              <HomeOutlined /> Trang chủ
            </Link>
          </BreadcrumbItem>
          <RightOutlined />
          <BreadcrumbItem>
            <Link to="/tours">Tours</Link>
          </BreadcrumbItem>
          <RightOutlined />
          <BreadcrumbItem className="active">
            {tour.title ? 
              (tour.title.length > 30 ? tour.title.substring(0, 30) + '...' : tour.title) : 
              'Chi tiết tour'}
          </BreadcrumbItem>
        </Breadcrumbs>
      
        <WrapperHeadertext>{tour.title || 'Chưa có tiêu đề'}</WrapperHeadertext>
        
        <HeaderInfo>
          <BadgesContainer>
            <BadgeItem className="bestseller">Bán chạy</BadgeItem>
            <BadgeItem>Tour ghép & Tour riêng</BadgeItem>
            {tour.location && <BadgeItem className="location"><EnvironmentOutlined /> {tour.location}</BadgeItem>}
          </BadgesContainer>
          
          <RatingSection>
            <RatingContainer>
              <RatingStar>
                <RatingScore>{formattedRateScore}</RatingScore>
                <StarFilled />
              </RatingStar>
              <RatingTotal>({rateSize} đánh giá)</RatingTotal>
            </RatingContainer>
            
            <BookingContainer>
              <BookingIcon />
              <BookingTotal>{countBooked}+ đã đặt</BookingTotal>
            </BookingContainer>
          </RatingSection>
        </HeaderInfo>
        
        <OverviewContainer>
        
          
          {tour.groupSize && (
            <OverviewItem>
              <OverviewIcon>
                <TeamOutlined />
              </OverviewIcon>
              <OverviewText>
                <OverviewLabel>Số người</OverviewLabel>
                {tour.groupSize} người
              </OverviewText>
            </OverviewItem>
          )}
        </OverviewContainer>
        
        <ContentSection>
          <TourDetailComponent 
            onData={handleData} 
            tour={tour} 
            listRate={listRate} 
            rateScore={rateScore} 
            rateSize={rateSize} 
          />
        </ContentSection>
      </ContentContainer>
    </Wrapper>
  )
}

export default TourDetail