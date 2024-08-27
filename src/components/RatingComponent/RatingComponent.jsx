import React, { useEffect, useState } from 'react'
import { ButtonChooseStar, ChooseStar, ClearButton, CoreText, CoreTextMax, ReviewRatingCount, Reviewsratingtext, SendButton, WrapperHeader, WrapperRateAndStar, WriteYourRating } from './style'
import {StarFilled}from '@ant-design/icons'
import DisplayRatingComponent from '../DisplayRatingComponent/DisplayRatingComponent'
import newRequest from '../../utils/request'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function RatingComponent({tourId, tourTitle, listRate, rateScore, rateSize, onData}) {
    const token = localStorage.getItem('authToken')
    const Navigate = useNavigate()
    const [isBooked, setIsBooked] = useState(null)
    const  [testRating, setTestRating] = useState(null)
    const [activeTab, setActiveTab] = useState(0)
    const [textRate, setTextRate] = useState('')
    const handleQuatifi = ()=>{
      // toast.success('Congratulations! Chúc mừng bạn đã đánh giá thành công :))')
    }
    const fetchTestRating = async(tourId)=>{
      try{
        const reponse = await newRequest.get(`/api/rating/test/rating/${tourId}`,{
          headers: {
             'Authorization': `Bearer ${token}`
          }
        });
        setTestRating(reponse.data.test)
      }
      catch(error){
        console.log('error', error)
      }
    }
    const fetchTestBooked = async(tourId) =>{
      try{
         const response = await newRequest.get(`/api/rating/test/booked/${tourId}`,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
         });
         setIsBooked(response.data.test)
         
      }
      catch(error){
        console.log('error', error)
      }
    }
    const handleSendRating = async(tourId)=>{
      try{
          if(token == null){
            toast.error('hãy đăng nhập để tiếp tục!')
            return
          }
          else{
            if(isBooked){
               if(!testRating){
                 if(activeTab!=0 && textRate != '' ){
                  const response = await newRequest.post(`/api/rating/add/${tourId}`,{
                    comment: textRate,
                    rate: activeTab
                   },{
                    headers: {
                      'Authorization' : `Bearer ${token}`
                    }
                   });
                   if(response.status === 200){
                    
                    setActiveTab(0)
                    setTextRate('')
                    onData(true);
                    handleQuatifi()
                    
                   }

                 }
                 else{
                  toast.error('Hãy nhập đầy đủ các trường để đánh giá!!')
                  return 
                 }
               }else{
                toast.error('Bạn đã đánh giá dịch vụ này trước đó!!')
                return 
               }
            }
            else{
              toast.error('Bạn phải đặt tour và thanh toán thì mới được đánh giá!!!')
            }
          }
      }
      catch(error){
        console.log('error', error)
      }
       
    }
    const handleClearRatingInput = ()=>{
      setActiveTab(0)
      setTextRate('')
    }
    useEffect(() => {
      fetchTestRating(tourId);
      fetchTestBooked(tourId)
    }, [tourId]);
    const formattedRateScore = rateScore != null ? rateScore.toFixed(1) : 'N/A';
  return (
    <div style={{marginLeft:'10px'}}>
        <WrapperHeader>
            <WrapperRateAndStar>
               <Reviewsratingtext>
                 <CoreText>{formattedRateScore}</CoreText>
                 <CoreTextMax>/5</CoreTextMax>
               </Reviewsratingtext>
               <StarFilled style={{color: '#f09b0a', marginLeft: '13px'}} />
            </WrapperRateAndStar>
            <ReviewRatingCount>
                 Dựa trên {rateSize} lượt đánh giá
            </ReviewRatingCount>
        </WrapperHeader>
        <WriteYourRating>Viết đánh giá của bạn về dịch vụ này:</WriteYourRating>
        <ChooseStar>
            <ButtonChooseStar active={activeTab === 1} onClick={() => setActiveTab(1)}>1 <StarFilled style={{marginLeft:'3px', color: '#f09b0a'}}/></ButtonChooseStar>
            <ButtonChooseStar active={activeTab === 2} onClick={() => setActiveTab(2)}>2 <StarFilled style={{marginLeft:'3px', color: '#f09b0a'}}/></ButtonChooseStar>
            <ButtonChooseStar active={activeTab === 3} onClick={() => setActiveTab(3)}>3 <StarFilled style={{marginLeft:'3px', color: '#f09b0a'}}/></ButtonChooseStar>
            <ButtonChooseStar active={activeTab === 4} onClick={() => setActiveTab(4)}>4 <StarFilled style={{marginLeft:'3px', color: '#f09b0a'}}/></ButtonChooseStar>
            <ButtonChooseStar active={activeTab === 5} onClick={() => setActiveTab(5)}>5 <StarFilled style={{marginLeft:'3px', color: '#f09b0a'}}/></ButtonChooseStar>
        </ChooseStar>
        <div style={{ marginTop: '20px' }}>
        <textarea
              value={textRate}
              onChange={(e)=> {setTextRate(e.target.value);}}
              placeholder="Nhập đánh giá của bạn ở đây..."
              style={{
                width: '63%',
                height: '100px',
                borderRadius: '10px',
                padding: '10px',
                marginTop: '10px',
                border: '1px solid #ccc',
                fontSize: '14px',
                boxSizing: 'border-box'

    }}
  ></textarea>
</div>
    <div style={{display: 'flex'}}>
    <SendButton onClick={() => handleSendRating(tourId)}>Gửi</SendButton>
    <ClearButton onClick={handleClearRatingInput}>Xóa</ClearButton>
    </div>
    {listRate.map((rate, index) => (
        <DisplayRatingComponent key={index} rate={rate} tourTitle={tourTitle} />
      ))}
    <ToastContainer style={{fontSize: '12px'}}/>
    </div>
  )
}

export default RatingComponent