import React, { useState, useEffect } from 'react'
import { 
  SignupContainer,
  SignupCard,
  WrapperContainerLeft, 
  WrapperContainerRight,
  BtnLogin,
  ErrorCustom, 
  HeaderSubTitle, 
  LoginHeaderTitle, 
  WrapperTextLight,
  InputWrapper,
  FormContainer,
  AnimatedBackground,
  FormFooter,
  LogoContainer,
  ContinueWith,
  SocialButtons,
  SocialButton
} from './style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import newRequest from '../../utils/request'
import { FaGoogle, FaFacebook, FaUser, FaEnvelope, FaLock, FaKey } from 'react-icons/fa'

function Signup() {
  const Navigate = useNavigate()
  const [errSignup, setErrSignup] = useState('')
  const [errEmail, setErrEmail] = useState('')
  const [errRepassword, setErrRepassword] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const HandleNavigateSignin = () => {
    Navigate('/sign-in')
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  useEffect(() => {
    if (email && password && repassword) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [email, password, repassword])

  const handleSignUp = async () => {
    try {
      if(!validateEmail(email)){
        setErrEmail('Email không hợp lệ!')
        return
      } else {
        setErrEmail('')
      }
      
      if(password !== repassword){
        setErrRepassword('Mật khẩu nhập lại không trùng khớp!')
        return
      } else {
        setErrRepassword('')
      }
      
      setIsLoading(true)
      const response = await newRequest.post('/api/auth/register', {
        email: email,
        password: password,
        repassword: repassword
      })
      
      setIsLoading(false)
      toast.success('Đăng ký thành công! Đang chuyển hướng...')
      
      setTimeout(() => {
        Navigate('/sign-in')
      }, 2000)
      
    } catch (error) {
      setIsLoading(false)
      setErrSignup(error.response ? error.response.data : error.message)
      toast.error(error.response ? error.response.data : error.message)
    }
  }

  return (
    <SignupContainer>
      <SignupCard>
        <WrapperContainerLeft>
          <LogoContainer>
            <FaUser size={30} color="#4096ff" className="pulse-icon" />
          </LogoContainer>
          
          <LoginHeaderTitle>Tạo tài khoản mới</LoginHeaderTitle>
          <HeaderSubTitle>Nhận tài khoản và tận hưởng trải nghiệm du lịch tuyệt vời</HeaderSubTitle>
          
          <FormContainer>
            <InputWrapper>
              <FaEnvelope className="input-icon" />
              <InputFormComponent 
                placeholder="Email của bạn" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </InputWrapper>
            {errEmail && <ErrorCustom className="slide-in">{errEmail}</ErrorCustom>}
            
            <InputWrapper>
              <FaLock className="input-icon" />
              <InputFormComponent 
                type="password"
                placeholder="Mật khẩu" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </InputWrapper>
            
            <InputWrapper>
              <FaKey className="input-icon" />
              <InputFormComponent 
                type="password"
                placeholder="Xác nhận mật khẩu" 
                value={repassword} 
                onChange={(e) => setRepassword(e.target.value)} 
              />
            </InputWrapper>
            {errRepassword && <ErrorCustom className="slide-in">{errRepassword}</ErrorCustom>}
            
            <BtnLogin 
              onClick={handleSignUp} 
              disabled={isDisabled || isLoading} 
              className={isDisabled ? 'disabled' : ''}
            >
              {isLoading ? 'Đang xử lý...' : 'Đăng ký ngay'}
            </BtnLogin>
            
            {errSignup && <ErrorCustom className="centered slide-in">{errSignup}</ErrorCustom>}
          </FormContainer>
          
          <ContinueWith>
            <span>Hoặc đăng ký với</span>
          </ContinueWith>
          
          <SocialButtons>
            <SocialButton className="google">
              <FaGoogle size={16} /> Google
            </SocialButton>
            <SocialButton className="facebook">
              <FaFacebook size={16} /> Facebook
            </SocialButton>
          </SocialButtons>
          
          <FormFooter>
            <p>Đã có tài khoản? <WrapperTextLight onClick={HandleNavigateSignin}>Đăng nhập ngay</WrapperTextLight></p>
          </FormFooter>
        </WrapperContainerLeft>
        
        <WrapperContainerRight>
          <AnimatedBackground />
          <div className="content">
            <h2>Khám phá du lịch</h2>
            <p>Đăng ký hôm nay để bắt đầu hành trình không giới hạn</p>
          </div>
        </WrapperContainerRight>
      </SignupCard>
      
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </SignupContainer>
  )
}

export default Signup