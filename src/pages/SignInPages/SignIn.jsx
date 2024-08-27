import React, { useEffect, useState } from 'react'
import { BtnLogin, ErrorCustom, ErrorSignCustom, HeaderSubTitle, LoginHeaderTitle, WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/LoadingComponent/Loading'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import newRequest from '../../utils/request'

function SignIn() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [errLogin, setErrLogin] = useState('')
  const [errEmail, setErrEmail] = useState('')
  const [isDisabled, setIsDisabled] = useState(true);
  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState('')
  const Navigate = useNavigate()
  const  HandleNavigateSignup = () =>{
    Navigate('/sign-up')
  }
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  useEffect(() => {
    // Kiểm tra xem tất cả các trường có dữ liệu không
    if (email && password ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]); // Theo dõi sự thay đổi của các trường
  const handleSignIn = async () => {
    try {
        if(!validateEmail(email)){
           setErrEmail('trường này không phải email!')
           return;
        }
        else{
          setErrEmail('')
        }
        const response = await newRequest.post('/api/auth/login', {
            username: email,
            password: password
            
        }
        );
        localStorage.setItem('authToken', response.data.token);
        toast.success('Đăng nhập thành công');
        setIsLoaded(true)
        setTimeout(() => {
          Navigate('/');
        }, 2000); // Thay đổi thời gian theo nhu cầu
        
    } catch (error) {
      setErrLogin(error.response ? error.response.data : error.message)
      toast.error(error.response ? error.response.data : error.message);
    }
};
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'rgb(0,0,0,0.53)', height:'100vh'}}>
      <div style={{width: '430px', borderRadius:'7px', backgroundColor:'#fff'}}>
      <WrapperContainerLeft>
        <LoginHeaderTitle>Đăng nhập</LoginHeaderTitle>
        <HeaderSubTitle>Nhận tài khoản và tận hưởng niềm vui của bạn ở bất cứ đâu</HeaderSubTitle>
        <InputFormComponent placeholder="abc@gmail.com" value={email} onChange={e =>{setEmail(e.target.value)}} />
        <ErrorCustom>{errEmail}</ErrorCustom>
        <InputFormComponent placeholder="your password" value={password} onChange={e=> {setPassword(e.target.value)}} />
        <Loading isLoading={isLoaded}>
         <BtnLogin onClick={handleSignIn} style={{backgroundColor: isDisabled? '#ccc' : '#4096ff'}} disabled={isDisabled} >Đăng nhập</BtnLogin>
        </Loading>
        <ErrorSignCustom>{errLogin}</ErrorSignCustom>
        <p style={{marginBottom: '4px'}}><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
        <p style={{fontSize: '13px', color:'#000', marginBottom:'10px'}}>Chưa có tài khoản?<WrapperTextLight onClick={HandleNavigateSignup}>tạo tài khoản</WrapperTextLight></p>

      </WrapperContainerLeft>
      <WrapperContainerRight>
        
      </WrapperContainerRight>
    </div>
    <ToastContainer style={{fontSize: '12px'}}/>
    </div>
  )
}

export default SignIn