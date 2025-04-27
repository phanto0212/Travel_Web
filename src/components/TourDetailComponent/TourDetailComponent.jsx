import { Col, DatePicker, Image, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import {PlusOutlined,MinusOutlined }from '@ant-design/icons'
import { ActivityCounter, ActivityOptionTitle, AtttrTip, BtnAddCart, BtnBooking, ButtonClear, ContainerLastCart, CostDetailPrice, CounterBtn, CounterCount, CounterLeft, CounterRight, CustomDatePicker, DiscountPrice, LastCart, LastCart1, OptionsBtnGroupRight, PackageDetailCounter, PackageDetailDate, PackageDetailTop, PackageOptionBtnGroup, PackageOptionContent, PriceDetail, SectionHeader, SectionHeaderTitle, TourDescriptionContainer, TourDescriptionText, Wrapper, WrapperActivityPackage, WrapperImageSmall,InHouseBtn, ImageListContainer, ImageItem } from './style'
import newRequest from '../../utils/request';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import RatingComponent from '../RatingComponent/RatingComponent';

function TourDetailComponent({tour, listRate, rateScore, rateSize, onData }) {
  const Nagative = useNavigate()
  
  const [quanlityAdult, setQuanlityAdult] = useState(0)
  const [quanlityChild, setQuanlityChild] = useState(0)
  const [totalPrice,setTotalPrice] = useState(0)
  const [selectedDate, setSelectedDate] = useState(null)
  const [dateValue, setDateValue] = useState(null)
  const [images, setImages] = useState([])
  const token = localStorage.getItem('authToken');

  const handleQuanlityAdultIncrease = ()=>{
    setQuanlityAdult(quanlityAdult+1)
  }
  const handleQuanlityAdultDiscount = ()=>{
    if(quanlityAdult!=0){
      setQuanlityAdult(quanlityAdult-1)
    }
  }
  const handleQuanlityChildIncrease = ()=>{
    setQuanlityChild(quanlityChild+1)
  }
  const handleQuanlityChildDiscount = ()=>{
    if(quanlityChild!=0){
      setQuanlityChild(quanlityChild-1)
    }
  }
  const handleDeleteAll = ()=>{
    setQuanlityAdult(0)
    setQuanlityChild(0)
    setSelectedDate(null)
    

  }
  const fetchAllImage = async(tourId)=>{
     try{
        const response = await newRequest.get(`/api/tours/get/all/image/${tourId}`);
        setImages(response.data.list_image)
        console.log(response.data.list_image)
     }
     catch(error){
      console.log('error', error)
     }
  }
  useEffect(()=>{
    setTotalPrice(quanlityAdult*tour.adult_price+quanlityChild*tour.child_price)

  },[quanlityAdult, quanlityChild])
    const onChange = (date, dateString) => {
       setSelectedDate(date)
       setDateValue(dateString)
      };
      const disabledDate = (current) => {
        // Không cho phép chọn ngày trước ngày hiện tại
        return current && current < moment().startOf('day');
      };
      const fetchApiAddBooking = async () => {
        try {
          if (!token) {
            Nagative('/sign-in');
            return;
          }
      
          if (!selectedDate || totalPrice === 0) {
            toast.error('Hãy nhập đầy đủ thông tin trước khi đặt tour');
            return;
          }
      
          const response = await newRequest.post(
            '/api/booking/add/booking',
            {
              tour_id: tour.tourId,
              adult_quanlity: quanlityAdult,
              child_quanlity: quanlityChild,
              total_price: totalPrice,
              date_booking: dateValue
            },
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          );
      
          console.log(response.data);
          if (response.status === 200) {
            toast.success('Đặt thành công, hãy vào giỏ hàng để hoàn thành thủ tục thanh toán nhé');
            setTimeout(() => {
              Nagative('/order');
            }, 2000); // Thay đổi thời gian theo nhu cầu
          }
      
        } catch (error) {
          console.error('error', error);
          toast.error('Có lỗi xảy ra, vui lòng thử lại!');
        }
      };
      
    const handleAddBooking = ()=>{
      fetchApiAddBooking()
    }
    useEffect(()=>{
      if(tour.tourId){
        fetchAllImage(tour.tourId)
      }

    }, [tour.tourId])
   
  return (
    <Wrapper >
        <Row >
        <Col span={24} style={{padding: '16px'}}>
          {/* <Image src={tour.image} style={{borderTopLeftRadius: '18px', borderTopRightRadius: '18px'}} alt='Tour Image Large' preview={false} /> */}
          <Row style={{paddingTop: '10px'}}>
            {/* <Col span={4}>
            <WrapperImageSmall src={ImageTourSmall} alt='Tour Image small' preview={true} />
            </Col>
            <Col span={4}>
            <WrapperImageSmall src={ImageTourSmall} alt='Tour Image small' preview={true} />
            </Col>
            <Col span={4}>
            <WrapperImageSmall src={ImageTourSmall} alt='Tour Image small' preview={true} />
            </Col>
            <Col span={4}>
            <WrapperImageSmall src={ImageTourSmall} alt='Tour Image small' preview={true} />
            </Col>
            <Col span={4}>
            <WrapperImageSmall src={ImageTourSmall} alt='Tour Image small' preview={true} />
            </Col>
            <Col span={4}>
            <WrapperImageSmall src={ImageTourSmall} alt='Tour Image small' preview={true} />
            </Col> */}
          </Row>
        </Col>
    </Row>
    <TourDescriptionContainer>
        <TourDescriptionText>• {tour.description}
        </TourDescriptionText>
    </TourDescriptionContainer>
    <TourDescriptionContainer>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <TourDescriptionText>
              Vô vàn ưu đãi dành cho bạn
          </TourDescriptionText>
          <ContainerLastCart>
         <LastCart>Sale</LastCart>
         <LastCart1>Chính sách đảm bảo giá tốt</LastCart1>
         </ContainerLastCart>
        </div>
    </TourDescriptionContainer>
    <SectionHeader>
        <SectionHeaderTitle>Các gói dịch vụ</SectionHeaderTitle>
    </SectionHeader>
    <WrapperActivityPackage>
        <ActivityOptionTitle>
            <span>Vui lòng chọn ngày và gói dịch vụ</span>
            <ButtonClear onClick={handleDeleteAll}>Xoá tất cả</ButtonClear>
        </ActivityOptionTitle>
        <PackageDetailDate>
            <PackageOptionContent>Xin chọn ngày đi tour</PackageOptionContent>
            <CustomDatePicker disabledDate={disabledDate} value={selectedDate} onChange={onChange} />
        </PackageDetailDate>
        <PackageDetailDate>
            <PackageOptionContent>số lượng</PackageOptionContent>
        </PackageDetailDate>
        <PackageDetailCounter>
          <PackageDetailTop>
            <CounterLeft>Người lớn</CounterLeft>
            <CounterRight>
              <DiscountPrice>{tour.adult_price  ? tour.adult_price.toLocaleString('vi-VN'):tour.adult_price}</DiscountPrice>
              <ActivityCounter>
                <CounterBtn onClick={handleQuanlityAdultDiscount}><MinusOutlined /></CounterBtn>
                <CounterCount>{quanlityAdult}</CounterCount>
                <CounterBtn onClick={handleQuanlityAdultIncrease}><PlusOutlined /></CounterBtn>
              </ActivityCounter>
            </CounterRight>
          </PackageDetailTop>
        </PackageDetailCounter>
        <PackageDetailCounter>
          <PackageDetailTop>
            <CounterLeft>Trẻ em(4-9)</CounterLeft>
            <CounterRight>
              <DiscountPrice>{tour.child_price ? tour.child_price.toLocaleString('vi-VN') : tour.child_price}</DiscountPrice>
              <ActivityCounter>
              <CounterBtn onClick={handleQuanlityChildDiscount}><MinusOutlined /></CounterBtn>
                <CounterCount>{quanlityChild}</CounterCount>
                <CounterBtn onClick={handleQuanlityChildIncrease} ><PlusOutlined /></CounterBtn>
              </ActivityCounter>
            </CounterRight>
          </PackageDetailTop>
        </PackageDetailCounter>
        <PackageOptionBtnGroup>
          <PriceDetail>
            <CostDetailPrice>₫ - {totalPrice ? totalPrice.toLocaleString('vi-VN') : '0.000.000'}</CostDetailPrice>
            <AtttrTip>Vui lòng hoàn tất các mục yêu cầu để chuyển đến bước tiếp theo</AtttrTip>
          </PriceDetail>
          <OptionsBtnGroupRight>
            <InHouseBtn>
              <BtnAddCart onClick={handleAddBooking}>Thêm vào giỏ hàng</BtnAddCart>
            </InHouseBtn>
            <InHouseBtn>
              <BtnBooking onClick={handleAddBooking}>Đặt ngay</BtnBooking>
            </InHouseBtn>
          </OptionsBtnGroupRight>
        </PackageOptionBtnGroup>
    </WrapperActivityPackage>
    <SectionHeader>
        <SectionHeaderTitle>Về dịch vụ này</SectionHeaderTitle>
    </SectionHeader>
    <div style={{width:'800px', fontSize: '16px',lineHeight:'1.5', fontWeight:'400', color:'#212121', margin:'0 0 0 20px '}}>{tour.description}</div>
    <ImageListContainer>
      {images.map((image) => (
        <ImageItem key={image.id} src={image.imageUrl} alt={`Image ${image.id}`} />
      ))}
    </ImageListContainer>
    <SectionHeader>
        <SectionHeaderTitle>Đánh giá mới đây</SectionHeaderTitle>
    </SectionHeader>
      <RatingComponent onData= {onData} tourId ={tour.tourId} tourTitle={tour.title} listRate={listRate} rateScore={rateScore} rateSize={rateSize}  ></RatingComponent>
   
    {/* <DatePicker onChange={onChange} /> */}
    <ToastContainer style={{fontSize: '12px'}}/>
    </Wrapper>
  )
}

export default TourDetailComponent
