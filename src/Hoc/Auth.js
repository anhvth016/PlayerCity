import React, { Component } from "react";
import firebase from "../firebase";
import { Redirect } from "react-router-dom";

const AuthGuard = (Component) => {
 // console.log(Component)
  class AuthHoc extends React.Component{

    authCheck = () => {
      const user = firebase.auth().currentUser;
      if(user) {
        return <Component {...this.props}/>
      } else {
        return <Redirect to="/"/>
      }
    }
    render() {
      return this.authCheck()
    }
  }
  return AuthHoc;
}
export default AuthGuard;