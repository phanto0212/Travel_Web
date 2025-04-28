import React, { useEffect, useState, useRef } from "react";
import SlideComponent from "../../components/SlideComponent/SlideComponent";
import slider1 from '../../assets/images/slide1.webp'
import slider3 from '../../assets/images/slide3.webp'
import CartComponent from "../../components/CartComponent/CartComponent";
import { 
    ButtonMoreTour, 
    Container, 
    ContainerButton, 
    ContainerH2Text, 
    ContainerInput, 
    ContainerKhamPha, 
    ContainerTitleText, 
    SearchOutlinedCustom, 
    TitleTour,
    ResponsiveContainer,
    CardGrid,
    CardWrapper,
    SectionWithBackground,
    HeroCTAWrapper,
    AnimatedHighlight,
    TitleWithAccent,
    AnimatedUnderline,
    CardGridWithScrollFade,
    CardSkeleton,
    ScrollFadeWrapper,
    PromoTag,
    SeeMoreWrapper,
    ScrollToTopButton,
    FloatingBookingCTA,
    FeaturedDestinations,
    DestinationCard,
    DestinationName,
    SectionHeader,
    SectionSubtitle,
    ScrollAnimation,
    DestinationSectionTitle
} from "./styls";
import newRequest from "../../utils/request";
import { useNavigate } from "react-router-dom";
import AdvertisementComponent from "../../components/AdvertisementCoponent/AdvertisementComponent";
import FeatureCardComponent from "../../components/FeatureCardComponent/FeatureCardComponent";
import PromotionComponent from "../../components/PromotionComponent/PromotionComponent";
import { useInView } from 'react-intersection-observer';
import { 
    ArrowUpOutlined, 
    SearchOutlined,
    EnvironmentOutlined,
    CalendarOutlined,
    RocketOutlined,
    ThunderboltOutlined
} from '@ant-design/icons';
import { Skeleton, Tooltip } from 'antd';

function HomePages() {
    const Navigate = useNavigate()
    const [tours, setTours] = useState([])
    const [loading, setLoading] = useState(true)
    const [next1, setNext1] = useState(0)
    const [next2, setNext2] = useState(12)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
    const [showScrollTop, setShowScrollTop] = useState(false)
    const [sortedTours, setSortedTours] = useState([]) // For featured tours
    
    // Popular destinations for the new section
    const popularDestinations = [
        { name: 'Ninh Bình', image: 'https://top10ninhbinh.com/wp-content/uploads/2022/10/anh-ninh-binh-1.jpg', count: 28 },
        { name: 'TP Hồ Chí Minh', image: 'https://tse2.mm.bing.net/th?id=OIP.vaBeqiTJIFRkjI1pDdOPJQHaE7&pid=Api&P=0&h=220', count: 42 },
        { name: 'Đà Nẵng', image: 'https://tse1.mm.bing.net/th?id=OIP.Q1xvNNmmlOwdcoNr5ZHYAAHaEz&pid=Api&P=0&h=220', count: 36 },
        { name: 'Japan', image: 'https://wallpaperaccess.com/full/40381.jpg', count: 25 },
        { name: 'Hạ Long Bay', image: 'https://images.unsplash.com/photo-1573270689103-d7a4e42b609a', count: 28 },
        { name: 'Hội An', image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b', count: 42 },
        { name: 'Đà Lạt', image: 'https://statics.vinpearl.com/canh-dep-da-lat-2_1688379781.jpg', count: 36 },
        { name: 'Phú Quốc', image: 'https://anhdephd.vn/wp-content/uploads/2022/05/anh-dao-phu-quoc-voi-thuyen-du-lich.jpg', count: 25 }
    ];
    
    // Intersection observer for scroll animations
    const [heroRef, heroInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    const [featuredRef, featuredInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    const [toursRef, toursInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    const [featuresRef, featuresInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await newRequest.get('/api/tours/get/all');
            const tourData = response.data.tours || [];
            setTours(tourData);
            
            // Create a featured/popular tours list (e.g., sort by rating or bookings)
            const featured = [...tourData]
                .sort((a, b) => (b.rating || 0) - (a.rating || 0))
                .slice(0, 4);
            setSortedTours(featured);
            
        } catch (error) {
            console.error('Failed to fetch tours:', error);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchTours()
    }, []);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (isMobile) {
            setNext2(4); 
        } else {
            setNext2(12);
        }
    }, [isMobile]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return ( 
        <div>
           <SlideComponent arrImages={[slider1, slider3]} />
            
            <Container ref={heroRef} className={heroInView ? 'animate-in' : ''}>
                <ScrollAnimation delay={0.1}>
                    <ContainerTitleText>
                        THẾ GIỚI TRỌN <AnimatedHighlight>NIỀM VUI</AnimatedHighlight>
                    </ContainerTitleText>
                </ScrollAnimation>
                
                <ScrollAnimation delay={0.3}>
                    <ContainerH2Text>
                        Khám phá niềm vui của bạn mọi lúc, mọi nơi - từ chuyến du lịch ngẫu hứng tới những cuộc phiêu lưu khắp thế giới
                    </ContainerH2Text>
                </ScrollAnimation>
                
                <ScrollAnimation delay={0.5}>
                    <ContainerKhamPha>
                        <SearchOutlinedCustom />
                        <ContainerInput placeholder="Bạn muốn đi đâu?" />
                        <ContainerButton onClick={() => window.location.href = '/tours'} >
                            <SearchOutlined className="search-icon" /> {isMobile ? 'Tìm' : 'Khám phá ngay'}
                        </ContainerButton>
                    </ContainerKhamPha>
                </ScrollAnimation>
            </Container>

            <ResponsiveContainer>
                <SectionWithBackground ref={featuredRef} className={featuredInView ? 'animate-in' : ''}>
                <DestinationSectionTitle>
                  Các địa điểm nổi tiếng! <span>Đi là mê</span>
                </DestinationSectionTitle>
                    
                    <FeaturedDestinations>
                        {popularDestinations.map((destination, index) => (
                            <DestinationCard 
                                key={index}
                                image={destination.image}
                                delay={index * 0.1}
                                onClick={() => Navigate(`/search?key=${destination.name}`)}
                            >
                                <DestinationName>
                                    <EnvironmentOutlined /> {destination.name}
                                </DestinationName>
                            </DestinationCard>
                        ))}
                    </FeaturedDestinations>
                </SectionWithBackground>
                
                <TitleWithAccent>Ưu đãi đặc biệt cho bạn</TitleWithAccent>
                <AnimatedUnderline />
                <AdvertisementComponent />
                
                <SectionHeader ref={toursRef} className={toursInView ? 'animate-in' : ''}>
                    <TitleWithAccent>Tour nổi bật</TitleWithAccent>
                    <SectionSubtitle>Những tour du lịch được đánh giá cao nhất</SectionSubtitle>
                    <AnimatedUnderline />
                </SectionHeader>
                
                <ScrollFadeWrapper>
                    <CardGridWithScrollFade>
                        {loading ? (
                            // Show skeletons while loading
                            Array(isMobile ? 4 : 8).fill().map((_, index) => (
                                <CardWrapper key={`skeleton-${index}`}>
                                    <CardSkeleton>
                                        <Skeleton.Image active style={{ width: '100%', height: 180 }} />
                                        <div className="skeleton-content">
                                            <Skeleton active paragraph={{ rows: 3 }} />
                                        </div>
                                    </CardSkeleton>
                                </CardWrapper>
                            ))
                        ) : (
                            tours.slice(next1, next2).map((tour, index) => (
                                <CardWrapper 
                                    key={tour.tourId || index} 
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                    className={toursInView ? 'animate-in' : ''}
                                >
                                    {tour.discount && (
                                        <PromoTag>-{tour.discount}%</PromoTag>
                                    )}
                                    <CartComponent 
                                        tour={tour} 
                                        onClick={() => Navigate(`/tour-detail/${tour.tourId}`)} 
                                    />
                                </CardWrapper>
                            ))
                        )}
                    </CardGridWithScrollFade>
                </ScrollFadeWrapper>
                
                <SeeMoreWrapper>
                    <ButtonMoreTour onClick={() => window.location.href = '/tours'}>
                        <span>Xem tất cả tour</span>
                    </ButtonMoreTour>
                </SeeMoreWrapper>
                
                <SectionHeader ref={featuresRef} className={featuresInView ? 'animate-in' : ''}>
                    <TitleWithAccent>Vì sao bạn nên chọn chúng tôi</TitleWithAccent>
                    <SectionSubtitle>Chúng tôi cam kết mang đến trải nghiệm tốt nhất</SectionSubtitle>
                    <AnimatedUnderline />
                </SectionHeader>
                <FeatureCardComponent />
                
                <TitleWithAccent>Bí kíp du lịch</TitleWithAccent>
                <AnimatedUnderline />
                <PromotionComponent />
            </ResponsiveContainer>
            
            {showScrollTop && (
                <ScrollToTopButton onClick={scrollToTop}>
                    <ArrowUpOutlined />
                </ScrollToTopButton>
            )}
            
            <FloatingBookingCTA onClick={() => Navigate('/tours')}>
                <div className="cta-content">
                    <div className="cta-title">Đặt ngay!</div>
                    <div className="cta-subtitle">Khuyến mãi đang chờ bạn</div>
                </div>
                <div className="cta-arrow">→</div>
            </FloatingBookingCTA>
        </div>
    );
}

export default HomePages;