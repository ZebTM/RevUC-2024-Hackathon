import Navbar from '../comps/navbar'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react'; // Import useState hook

export default function login() {
  return (
    <div class="flex p-4 pl-16 w-full items-center bg-zinc-950">
      <Navbar />
      <p> login page </p>
      <Auth0Provider
      domain="dev-ddpqb1c20p7e8s47.us.auth0.com"
      clientId="grs0J6fGiI5Zh53hDQCm4pr4CcSx7q1d"
    >
      <LoginButton /> {/* Render the LoginButton component here */}
    </Auth0Provider>
    </div>
  );
}
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0(); 

  const onPress = async () => {
    try {
      await loginWithRedirect(); 
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {/* Use a regular HTML button */}
      <button onClick={onPress}>Log in</button> 
    </div>
  );
};
