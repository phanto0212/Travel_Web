import React, { useEffect, useState } from 'react'
import { 
  BtnPayment, 
  CounterRight, 
  OrderText, 
  Tab, 
  TabsContainer, 
  TourCodeAndStatus, 
  WrapperCustomImage, 
  WrapperCustomOrderTitle, 
  WrapperCutomOrderInfor, 
  WrapperOrder, 
  WrapperPayment, 
  WrapperPaymentPrice,
  OrderContainer,
  OrderHeader,
  PageTitle,
  StatusBadge,
  OrderDetail,
  OrderSection,
  OrderSectionTitle,
  OrderSectionContent,
  BookingDate,
  GuestCount,
  GuestIcon,
  ChildIcon,
  PriceContainer,
  PriceTag,
  OrderFooter,
  EmptyOrderState,
  EmptyStateIcon,
  LoadingIndicator,
  PaymentButton,
  OrderDetailsButton,
  ButtonGroup
} from './style';
import newRequest from '../../utils/request';
import { useNavigate } from 'react-router-dom';
import { 
  CalendarOutlined, 
  UserOutlined, 
  CreditCardOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  EnvironmentOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OrderComponent() {
    const Navigate = useNavigate();
    const [user, setUser] = useState({});
    const [activeTab, setActiveTab] = useState('pending');
    const [booking, setBooking] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('authToken');

    const getStatusLabel = (status) => {
        switch (status) {
            case 'Confirmed':
                return 'Chờ thanh toán';
            case 'COMPLETED':
                return 'Đã hoàn thành';
            case 'FAIlED':
                return 'Thanh toán thất bại';
            default:
                return 'Trạng thái không xác định'; 
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Confirmed':
                return <ClockCircleOutlined />;
            case 'COMPLETED':
                return <CheckCircleOutlined />;
            case 'FAIlED':
                return <CloseCircleOutlined />;
            default:
                return <ExclamationCircleOutlined />; 
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Confirmed':
                return '#faad14';
            case 'COMPLETED':
                return '#52c41a';
            case 'FAIlED':
                return '#ff4d4f';
            default:
                return '#1890ff'; 
        }
    };

    const getPaymentButtonLabel = (status) => {
        switch (status) {
            case 'Confirmed':
                return 'Thanh toán ngay';
            case 'COMPLETED':
                return 'Đã thanh toán';
            case 'FAIlED':
                return 'Thanh toán lại';
            default:
                return 'Thanh toán';
        }
    };

    const isPaymentButtonDisabled = (status) => {
        return status === 'COMPLETED';
    };

    useEffect(() => {
        if (token) {
            fetchUser(token);
        }
    }, []);

    const fetchUser = async (token) => {
        try {
            const response = await newRequest.get('/api/auth/get/user', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setUser(response.data.user); 
        } catch (error) {
            console.log('error:', error);
            toast.error('Không thể tải thông tin người dùng');
        }
    };

    const handleGetBooking = async (activeTab) => {
        try {
            setLoading(true);
            const response = await newRequest.get('/api/booking/get/booking/status', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    text: activeTab 
                }
            });
            setBooking(response.data.bookings || []);
            setLoading(false);
        } catch (error) {
            console.log('error', error);
            setLoading(false);
            toast.error('Không thể tải danh sách đơn hàng');
        }
    };

    const handlePayment = async (amount, bookingId, userId) => {
        try {
            toast.info('Đang khởi tạo thanh toán...');
            const response = await newRequest.get(`/api/v1/payment/vn-pay?amount=${amount}&bankCode=NCB&bookingId=${bookingId}&userId=${userId}`);
            const paymentUrl = response.data.data.paymentUrl;
            window.open(paymentUrl, '_blank');
            toast.success('Đã mở cổng thanh toán trong tab mới');
        } catch (error) {
            console.log('error', error);
            toast.error('Không thể khởi tạo thanh toán. Vui lòng thử lại sau.');
        }
    };

    useEffect(() => {
        handleGetBooking(activeTab); 
    }, [activeTab]);

    const maxLength = 65; 
    
    const getShortenedTitle = (tour) => {
        if (tour && tour.title) {
            return tour.title.length > maxLength
                ? tour.title.substring(0, maxLength) + '...'
                : tour.title;
        }
        return ''; 
    };
    
    const formatBookingDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return new Date(dateString).toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const navigateToTourDetail = (tourId) => {
        Navigate(`/tour-detail/${tourId}`);
    };

    return (
        <OrderContainer>
            <OrderHeader>
                <PageTitle>Quản lý đơn đặt tour</PageTitle>
                <TabsContainer>
                    <Tab active={activeTab === 'pending'} onClick={() => setActiveTab('pending')}>
                        Chờ thanh toán
                    </Tab>
                    <Tab active={activeTab === 'paid'} onClick={() => setActiveTab('paid')}>
                        Hoàn thành
                    </Tab>
                    <Tab active={activeTab === 'cancel'} onClick={() => setActiveTab('cancel')}>
                        Đã hủy
                    </Tab>
                    <Tab active={activeTab === 'all'} onClick={() => setActiveTab('all')}>
                        Tất cả
                    </Tab>
                </TabsContainer>
            </OrderHeader>

            {loading ? (
                <LoadingIndicator>
                    <div className="spinner"></div>
                    <p>Đang tải đơn hàng...</p>
                </LoadingIndicator>
            ) : booking.length === 0 ? (
                <EmptyOrderState>
                    <EmptyStateIcon />
                    <h3>Không có đơn hàng nào</h3>
                    <p>Bạn chưa có đơn đặt tour nào trong mục này</p>
                    <button onClick={() => Navigate('/')}>Khám phá tour</button>
                </EmptyOrderState>
            ) : (
                booking.map((booking, index) => (
                    <WrapperOrder key={index}>
                        <WrapperCustomImage onClick={() => navigateToTourDetail(booking.tour.tourId)}>
                            <img 
                                src={booking.tour.image} 
                                alt={booking.tour.title || 'Tour image'} 
                            />
                            <StatusBadge color={getStatusColor(booking.status)}>
                                {getStatusIcon(booking.status)} {getStatusLabel(booking.status)}
                            </StatusBadge>
                        </WrapperCustomImage>
                        
                        <WrapperCutomOrderInfor>
                            <WrapperCustomOrderTitle onClick={() => navigateToTourDetail(booking.tour.tourId)}>
                                <EnvironmentOutlined className="location-icon" />
                                {booking.tour.destination_location}: {getShortenedTitle(booking.tour)} 
                            </WrapperCustomOrderTitle>
                            
                            <OrderDetail>
                                <OrderSection>
                                    <OrderSectionTitle>
                                        <InfoCircleOutlined /> Mã tour:
                                    </OrderSectionTitle>
                                    <OrderSectionContent>
                                        {booking.tour.tourId}
                                    </OrderSectionContent>
                                </OrderSection>
                                
                                <OrderSection>
                                    <OrderSectionTitle>
                                        <CalendarOutlined /> Thời lượng:
                                    </OrderSectionTitle>
                                    <OrderSectionContent>
                                        {booking.tour.duration}
                                    </OrderSectionContent>
                                </OrderSection>
                                
                                <BookingDate>
                                    <CalendarOutlined /> Khởi hành: {formatBookingDate(booking.bookingDate)}
                                </BookingDate>

                                <GuestCount>
                                    <div>
                                        <GuestIcon /> {booking.number_of_adults} người lớn
                                    </div>
                                    <div>
                                        <ChildIcon /> {booking.number_of_children} trẻ em
                                    </div>
                                </GuestCount>
                            </OrderDetail>
                            
                            <OrderFooter>
                                <PriceContainer>
                                    <PriceTag>Tổng tiền:</PriceTag>
                                    <CounterRight>{booking.totalPrice.toLocaleString('vi-VN')} ₫</CounterRight>
                                </PriceContainer>
                                
                                <ButtonGroup>
                                    <OrderDetailsButton onClick={() => navigateToTourDetail(booking.tour.tourId)}>
                                        <InfoCircleOutlined /> Chi tiết
                                    </OrderDetailsButton>
                                    
                                    <PaymentButton 
                                        status={booking.status}
                                        disabled={isPaymentButtonDisabled(booking.status)}
                                        onClick={() => handlePayment(booking.totalPrice, booking.bookingId, user.id)}
                                    >
                                        <CreditCardOutlined /> {getPaymentButtonLabel(booking.status)}
                                    </PaymentButton>
                                </ButtonGroup>
                            </OrderFooter>
                        </WrapperCutomOrderInfor>
                    </WrapperOrder>
                ))
            )}
            
            <ToastContainer position="top-right" autoClose={3000} />
        </OrderContainer>
    );
}

export default OrderComponent;