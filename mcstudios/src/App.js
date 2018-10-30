import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import header from './Components/Header';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";


// firebase.initializeApp({
//   apiKey: "AIzaSyDVL3Lvrvc0E4i6CiuY3Ay9wkjvZona4y0",
//   authDomain: "login-form-try-2.firebaseapp.com"
// })

class App extends Component {
  // state = { isSignedIn: false }
  // uiConfig = {
  //   signInFlow: "popup",
  //   signInOptions: [
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //     firebase.auth.EmailAuthProvider.PROVIDER_ID
  //   ],
  //   callbacks: {
  //     signInSuccess: () => false
  //   }
  // }
  render() {
    return (
      <div>
        <header />
        <h1> Welcome To The Movie Page</h1>
       </div>

    );
  }
}

export default App;
