import React, { useState, useEffect  } from 'react'
import { BtnLogin, ErrorCustom, ErrorSignCustom, HeaderSubTitle, LoginHeaderTitle, WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import newRequest from '../../utils/request'


function Signup() {
  const Navigate = useNavigate()
  const HandleNavigateSignin = ()=>{
    Navigate('/sign-in')
  }
  const [errSignup, setErrSignup] = useState('')
  const [errEmail, setErrEmail] = useState('')
  const [errRepassword, setErrRepassword] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [isDisabled, setIsDisabled] = useState(true);
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  useEffect(() => {
    // Kiểm tra xem tất cả các trường có dữ liệu không
    if (email && password && repassword) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password, repassword]); // Theo dõi sự thay đổi của các trường
  const handleSignUp = async () => {
    try {
        if(!validateEmail(email)){
           setErrEmail('trường này không phải email!')
           return;
        }
        else{
          setErrEmail('')
        }
        if(password != repassword){
          setErrRepassword('mật khẩu nhập lại không trùng khớp!')
          return

        }
        else{
          setErrRepassword('')
          
        }
        const response = await newRequest.post('/api/auth/register', {
            email: email,
            password: password,
            repassword: repassword
        }
        );
        if(response.status === 400){
          setErrSignup = response.data
          return
        }
        toast.success('Đăng ký thành công');
        setTimeout(() => {
          Navigate('/sign-in');
        }, 2000); // Thay đổi thời gian theo nhu cầu
        
    } catch (error) {
        setErrSignup(error.response ? error.response.data : error.message)
    }
};

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'rgb(0,0,0,0.53)', height:'100vh'}}>
    <div style={{width: '430px', borderRadius:'7px', backgroundColor:'#fff'}}>
    <WrapperContainerLeft>
      <LoginHeaderTitle>Đăng ký</LoginHeaderTitle>
      <HeaderSubTitle>Nhận tài khoản và tận hưởng niềm vui của bạn ở bất cứ đâu</HeaderSubTitle>
      <InputFormComponent placeholder="your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <ErrorCustom>{errEmail}</ErrorCustom>
      <InputFormComponent placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <InputFormComponent placeholder="repassword" value={repassword} onChange={(e) => setRepassword(e.target.value)} />
      <ErrorCustom>{errRepassword}</ErrorCustom>
      <BtnLogin onClick={handleSignUp} style={{backgroundColor: isDisabled? '#ccc' : '#4096ff'}} disabled={isDisabled} >Đăng ký</BtnLogin>
      <ErrorSignCustom>{errSignup}</ErrorSignCustom>
      <p style={{fontSize: '13px', color:'#000', margin: '24px 0 12px 0'}}>Bạn đã có tài khoản?<WrapperTextLight onClick={HandleNavigateSignin}>Đăng nhập ngay</WrapperTextLight></p>

    </WrapperContainerLeft>
    
  </div>
  <ToastContainer style={{fontSize: '12px'}}/>
  </div>
  )
}

export default Signup