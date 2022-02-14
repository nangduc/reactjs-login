import React from "react";
import LoginForm from "./LoginForm";
import  { Navigate } from 'react-router-dom'
// import ProductsContainer from "./containers/ProductsContainer";
// import CartContainer from "./containers/CartContainer";
// import MessageContainer from "./containers/MessageContainer";




export default function Login({user}) {
  if (user.user){
    return <Navigate to='/'  />
  }
    return (
      <div className="App">
        <LoginForm />
      </div>
    );
}