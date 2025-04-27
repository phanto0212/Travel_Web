import React, { useEffect, useState } from 'react'
import { 
  RatingContainer, 
  RatingHeader, 
  RatingScore, 
  RatingScoreValue, 
  RatingScoreMax, 
  StarIcon, 
  RatingCount, 
  RatingForm, 
  RatingFormTitle, 
  StarRating, 
  StarButton,
  StarButtonText,
  RatingInput, 
  ButtonsContainer,
  SendButton, 
  ClearButton,
  RatingsList,
  RatingAnimation,
  EmptyRating,
  EmptyRatingIcon
} from './style'
import {StarFilled, EditOutlined, SendOutlined, DeleteOutlined, SmileOutlined} from '@ant-design/icons'
import DisplayRatingComponent from '../DisplayRatingComponent/DisplayRatingComponent'
import newRequest from '../../utils/request'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RatingComponent({tourId, tourTitle, listRate, rateScore, rateSize, onData}) {
    const token = localStorage.getItem('authToken')
    const Navigate = useNavigate()
    const [isBooked, setIsBooked] = useState(null)
    const [testRating, setTestRating] = useState(true)
    const [activeTab, setActiveTab] = useState(0)
    const [textRate, setTextRate] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [animateStars, setAnimateStars] = useState(false)
    
    const handleQuatifi = () => {
      toast.success('🌟 Đánh giá của bạn đã được gửi thành công!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    
    const fetchTestRating = async(tourId) => {
      try {
        const response = await newRequest.get(`/api/rating/test/rating/${tourId}`, {
          headers: {
             'Authorization': `Bearer ${token}`
          }
        });
        setTestRating(response.data.test)
      }
      catch(error) {
        console.log('error', error)
      }
    }
    
    const fetchTestBooked = async(tourId) => {
      try {
         const response = await newRequest.get(`/api/rating/test/booked/${tourId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
         });
         setIsBooked(response.data.test)
      }
      catch(error) {
        console.log('error', error)
      }
    }
    
    const handleSendRating = async(tourId) => {
      try {
          if(token == null) {
            toast.error('🔐 Vui lòng đăng nhập để đánh giá!', {
              position: "top-right",
              autoClose: 3000,
            })
            return
          }
          else {
            if(isBooked) {
               if(testRating==false) {
                 if(activeTab!=0 && textRate != '') {
                  setIsSubmitting(true)
                  const response = await newRequest.post(`/api/rating/add/${tourId}`, {
                    comment: textRate,
                    rate: activeTab
                   }, {
                    headers: {
                      'Authorization' : `Bearer ${token}`
                    }
                   });
                   
                   if(response.status === 200) {
                    setActiveTab(0)
                    setTextRate('')
                    onData(true);
                    handleQuatifi()
                   }
                   setIsSubmitting(false)
                 }
                 else {
                  toast.error('⚠️ Vui lòng chọn số sao và nhập đánh giá!', {
                    position: "top-right",
                    autoClose: 3000,
                  })
                  setAnimateStars(true)
                  setTimeout(() => setAnimateStars(false), 1000)
                  return 
                 }
               } else {
                toast.error('⚠️ Bạn đã đánh giá dịch vụ này rồi!', {
                  position: "top-right",
                  autoClose: 3000,
                })
                return 
               }
            }
            else {
              toast.error('⚠️ Bạn cần đặt tour và thanh toán trước khi đánh giá!', {
                position: "top-right",
                autoClose: 3000,
              })
            }
          }
      }
      catch(error) {
        console.log('error', error)
        setIsSubmitting(false)
      }
    }
    
    const handleClearRatingInput = () => {
      setActiveTab(0)
      setTextRate('')
    }
    
    useEffect(() => {
      if (tourId && token) {
        fetchTestRating(tourId);
        fetchTestBooked(tourId);
      }
    }, [tourId]);
    
    const formattedRateScore = rateScore != null ? rateScore.toFixed(1) : 'N/A';
    
  return (
    <RatingContainer>
      <RatingHeader>
        <RatingScore>
          <RatingScoreValue>{formattedRateScore}</RatingScoreValue>
          <RatingScoreMax>/5</RatingScoreMax>
          <StarIcon $large />
        </RatingScore>
        <RatingCount>
          Dựa trên {rateSize} lượt đánh giá
        </RatingCount>
      </RatingHeader>
      
      <RatingForm>
        <RatingFormTitle>
          <EditOutlined /> Viết đánh giá của bạn
        </RatingFormTitle>
        
        <StarRating className={animateStars ? 'animate' : ''}>
          {[1, 2, 3, 4, 5].map(star => (
            <StarButton 
              key={star}
              $active={activeTab === star} 
              onClick={() => setActiveTab(star)}
            >
              <StarButtonText>{star}</StarButtonText>
              <StarIcon $active={activeTab === star} />
            </StarButton>
          ))}
        </StarRating>
        
        <RatingInput
          value={textRate}
          onChange={(e) => setTextRate(e.target.value)}
          placeholder="Chia sẻ cảm nhận của bạn về dịch vụ này..."
        />
        
        <ButtonsContainer>
          <SendButton 
            onClick={() => handleSendRating(tourId)}
            disabled={isSubmitting}
          >
            <SendOutlined /> {isSubmitting ? 'Đang gửi...' : 'Gửi đánh giá'}
          </SendButton>
          <ClearButton onClick={handleClearRatingInput}>
            <DeleteOutlined /> Xóa
          </ClearButton>
        </ButtonsContainer>
      </RatingForm>
      
      <RatingsList>
        {listRate && listRate.length > 0 ? (
          listRate.map((rate, index) => (
            <RatingAnimation key={index} $delay={index * 0.1}>
              <DisplayRatingComponent rate={rate} tourTitle={tourTitle} />
            </RatingAnimation>
          ))
        ) : (
          <EmptyRating>
            <EmptyRatingIcon>
              <SmileOutlined />
            </EmptyRatingIcon>
            <p>Chưa có đánh giá nào. Hãy là người đầu tiên đánh giá!</p>
          </EmptyRating>
        )}
      </RatingsList>
      
      <ToastContainer closeButton={false} />
    </RatingContainer>
  )
}

export default RatingComponent