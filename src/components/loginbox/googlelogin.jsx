import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const clientId = "160843245016-0i9muulevmqigfrqabvtca2bbvi2laiq.apps.googleusercontent.com";

const Googlesignin = ({ onGoogleSignIn }) => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={credentialResponse => {
          var dec = jwtDecode(credentialResponse.credential);
          console.log(dec);
          onGoogleSignIn(dec.email, dec.name);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  )
}

export default Googlesignin;