import React, { useEffect, useState } from 'react'
import { 
  BtnLogin, 
  ErrorCustom, 
  HeaderSubTitle, 
  LoginHeaderTitle, 
  WrapperContainerLeft, 
  WrapperContainerRight, 
  WrapperTextLight,
  LoginContainer,
  LoginCard,
  ForgotPasswordText,
  SignUpText,
  InputWrapper,
  FormFooter,
  LogoContainer,
  WelcomeText,
  AnimatedBackground,
  Circle,
  CardHighlight,
  FormContainer,
  BrandName,
  SocialLoginButtons,
  SocialButton,
  OrDivider,
  WaveAnimation,
  InputLabel,
  FormRow
} from './style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/LoadingComponent/Loading'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import newRequest from '../../utils/request'
import { FaEnvelope, FaLock, FaUser, FaGoogle, FaFacebook } from 'react-icons/fa'

function SignIn() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [errLogin, setErrLogin] = useState('')
  const [errEmail, setErrEmail] = useState('')
  const [isDisabled, setIsDisabled] = useState(true);
  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState('')
  const [isInputFocused, setIsInputFocused] = useState({ email: false, password: false });
  const Navigate = useNavigate()
  
  useEffect(() => {
    document.title = "PhanTo's Travel - Đăng nhập";
  }, []);
  
  const HandleNavigateSignup = () => {
    Navigate('/sign-up')
  }
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  useEffect(() => {
    if (email && password) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);
  
  const handleSignIn = async () => {
    try {
        if(!validateEmail(email)){
           setErrEmail('Vui lòng nhập đúng định dạng email!')
           return;
        } else {
          setErrEmail('')
        }
        
        setIsLoaded(true);
        const response = await newRequest.post('/api/auth/login', {
            username: email,
            password: password
        });
        
        localStorage.setItem('authToken', response.data.token);
        toast.success('Đăng nhập thành công');
        
        setTimeout(() => {
          Navigate('/');
        }, 2000);
        
    } catch (error) {
      setIsLoaded(false);
      setErrLogin(error.response ? error.response.data : error.message)
      toast.error(error.response ? error.response.data : error.message);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isDisabled) {
      handleSignIn();
    }
  };
  
  return (
    <LoginContainer>
      <AnimatedBackground>
        {[...Array(6)].map((_, i) => <Circle key={i} size={Math.random() * 100 + 50} left={`${Math.random() * 100}%`} top={`${Math.random() * 100}%`} delay={i * 0.3} />)}
      </AnimatedBackground>
      
      <LoginCard>
        <CardHighlight />
        
        <WrapperContainerLeft>
          <LogoContainer>
            <BrandName>PhanTo's <span>Travel</span></BrandName>
          </LogoContainer>
          
          <FormContainer>
            <LoginHeaderTitle>Xin chào quý khách!</LoginHeaderTitle>
            <HeaderSubTitle>Đăng nhập để truy cập tài khoản và đặt tour du lịch</HeaderSubTitle>
            
            <SocialLoginButtons>
              <SocialButton>
                <FaGoogle /> Google
              </SocialButton>
              <SocialButton>
                <FaFacebook /> Facebook
              </SocialButton>
            </SocialLoginButtons>
            
            <OrDivider>
              <span>hoặc đăng nhập với email</span>
            </OrDivider>
            
            <FormRow>
              <InputLabel className={isInputFocused.email || email ? 'active' : ''}>
                Địa chỉ email
              </InputLabel>
              <InputWrapper focused={isInputFocused.email}>
                <FaEnvelope color={isInputFocused.email || email ? "#4096ff" : "#999"} size={16} />
                <InputFormComponent 
                  placeholder="" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  onFocus={() => setIsInputFocused({...isInputFocused, email: true})}
                  onBlur={() => setIsInputFocused({...isInputFocused, email: false})}
                  onKeyPress={handleKeyPress}
                />
              </InputWrapper>
              {errEmail && <ErrorCustom>{errEmail}</ErrorCustom>}
            </FormRow>
            
            <FormRow>
              <InputLabel className={isInputFocused.password || password ? 'active' : ''}>
                Mật khẩu
              </InputLabel>
              <InputWrapper focused={isInputFocused.password}>
                <FaLock color={isInputFocused.password || password ? "#4096ff" : "#999"} size={16} />
                <InputFormComponent 
                  placeholder="" 
                  type="password"
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                  onFocus={() => setIsInputFocused({...isInputFocused, password: true})}
                  onBlur={() => setIsInputFocused({...isInputFocused, password: false})}
                  onKeyPress={handleKeyPress}
                />
              </InputWrapper>
              {errLogin && <ErrorCustom>{errLogin}</ErrorCustom>}
            </FormRow>
            
            <Loading isLoading={isLoaded}>
              <BtnLogin 
                onClick={handleSignIn} 
                disabled={isDisabled}
                className={isDisabled ? 'disabled' : ''}
              >
                <span>Đăng nhập</span>
              </BtnLogin>
            </Loading>
            
            <FormFooter>
              <ForgotPasswordText>Quên mật khẩu?</ForgotPasswordText>
              <SignUpText>
                Chưa có tài khoản? 
                <WrapperTextLight onClick={HandleNavigateSignup}> Tạo tài khoản mới</WrapperTextLight>
              </SignUpText>
            </FormFooter>
          </FormContainer>
        </WrapperContainerLeft>
        
        <WrapperContainerRight>
          <WaveAnimation>
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
            <div className="wave wave4"></div>
          </WaveAnimation>
          <div className="illustration"></div>
          <WelcomeText>
            <h2>Khám phá thế giới cùng chúng tôi</h2>
            <p>Đặt tour du lịch, khách sạn và trải nghiệm các dịch vụ du lịch tốt nhất</p>
          </WelcomeText>
        </WrapperContainerRight>
      </LoginCard>
      <ToastContainer position="top-right" autoClose={3000} />
    </LoginContainer>
  )
}

export default SignIn