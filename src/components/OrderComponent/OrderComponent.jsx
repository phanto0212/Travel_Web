import React, { useEffect, useState } from 'react'
import { BtnPayment, CounterRight, OrderText, Tab, TabsContainer, TourCodeAndStatus, WrapperCustomImage, WrapperCustomOrderTitle, WrapperCutomOrderInfor, WrapperOrder, WrapperPayment, WrapperPaymentPrice } from './style';
import newRequest from '../../utils/request';
import { useNavigate } from 'react-router-dom';

function OrderComponent() {
    const Navigate = useNavigate();
    const [user, setUser] = useState({});
    const [activeTab, setActiveTab] = useState('pending');
    const [booking, setBooking] = useState([]);
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

    const getPaymentButtonLabel = (status) => {
        switch (status) {
            case 'Confirmed':
                return 'Thanh toán';
            case 'COMPLETED':
                return 'Đã hoàn thành';
            case 'FAIlED':
                return 'Thanh toán lại';
            default:
                return 'N/A';
        }
    };

    const isPaymentButtonDisabled = (status) => {
        return status === 'COMPLETED';
    };

    const getPaymentButtonStyle = (status) => {
        if (status === 'COMPLETED') {
            return { backgroundColor: 'gray', cursor: 'not-allowed' };
        }
        return {};
    };

    useEffect(() => {
        if (token) {
            setUser(fetchUser(token));
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
        }
    };

    const handleGetBooking = async (activeTab) => {
        try {
            const response = await newRequest.get('/api/booking/get/booking/status', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    text: activeTab 
                }
            });
            setBooking(response.data.bookings || []);
            console.log(response.data.bookings);
        } catch (error) {
            console.log('error', error);
        }
    };

    const handlePayment = async (amount, bookingId, userId) => {
        try {
            const response = await newRequest.get(`/api/v1/payment/vn-pay?amount=${amount}&bankCode=NCB&bookingId=${bookingId}&userId=${userId}`);
            const paymentUrl = response.data.data.paymentUrl;
            window.open(paymentUrl, '_blank');
            console.log('data', response.data);
        } catch (error) {
            console.log('error', error);
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

    return (
        <div style={{ marginTop: '100px' }}>
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
            {booking.map((booking, index) => (
                <WrapperOrder key={index}>
                    <WrapperCustomImage>
                        <img 
                            onClick={() => Navigate(`/tour-detail/${booking.tour.tourId}`)}
                            src={booking.tour.image} 
                            alt='image' 
                            style={{
                                width: '360px', 
                                height: '255px', 
                                borderBottomLeftRadius: '0.5rem', 
                                borderTopLeftRadius: '0.5rem',
                                cursor: 'pointer'
                            }}
                        />
                    </WrapperCustomImage>
                    <WrapperCutomOrderInfor>
                        <WrapperCustomOrderTitle onClick={() => Navigate(`/tour-detail/${booking.tour.tourId}`)} style={{ cursor: 'pointer' }}>
                            -{booking.tour.destination_location}: {getShortenedTitle(booking.tour)} 
                        </WrapperCustomOrderTitle>
                        <TourCodeAndStatus>
                            <OrderText>Mã chương trình:<span style={{ color: '#000', fontWeight: '700' }}> {booking.tour.tourId}</span></OrderText>
                            <OrderText>Trạng thái: <span style={{ color: '#0b5da7' }}>{getStatusLabel(booking.status)}</span></OrderText>
                        </TourCodeAndStatus>
                        <TourCodeAndStatus>
                            <OrderText>Thời lượng: <span style={{ color: '#000', fontWeight: '700' }}> {booking.tour.duration} N</span></OrderText>
                            <OrderText>Ngày bắt đầu chuyến:<span style={{ color: '#ff5b00' }}> {booking.bookingDate}</span></OrderText>
                        </TourCodeAndStatus>
                        <TourCodeAndStatus>
                            <OrderText>Vé người lớn: <span style={{ color: '#000', fontWeight: '700' }}> {booking.number_of_adults}</span></OrderText>
                            <OrderText>Vé trẻ nhỏ (4-9):<span style={{ color: '#ff5b00' }}> {booking.number_of_children}</span></OrderText>
                        </TourCodeAndStatus>
                        <WrapperPayment>
                            <WrapperPaymentPrice>
                                <div style={{ fontSize: '18px' }}>Tổng hóa đơn: </div>
                                <CounterRight>{booking.totalPrice.toLocaleString('vi-VN')} đ</CounterRight>
                            </WrapperPaymentPrice>
                            <BtnPayment 
                                onClick={() => handlePayment(booking.totalPrice, booking.bookingId, user.id)}
                                disabled={isPaymentButtonDisabled(booking.status)}
                                style={getPaymentButtonStyle(booking.status)}
                            >
                                {getPaymentButtonLabel(booking.status)}
                            </BtnPayment>
                        </WrapperPayment>
                    </WrapperCutomOrderInfor>
                </WrapperOrder>
            ))}
        </div>
    );
}

export default OrderComponent;
