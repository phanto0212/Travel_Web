import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import React from 'react'

function LoginGoogle() {
    const handleLoginSuccess = (response) => {
        // Gửi token Google đến server Spring Boot để xác thực và lưu thông tin
        fetch("http://localhost:8081/api/google-login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: response.credential,
          }),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log("User authenticated:", data);
        })
        .catch((err) => {
          console.error("Error during authentication:", err);
        });
      };
  return (
    <GoogleOAuthProvider clientId="625305230135-f6rur63pm3oernikasir1kgg1977vmar.apps.googleusercontent.com">
      <div className="App">
        <h1>Login with Google</h1>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default LoginGoogle