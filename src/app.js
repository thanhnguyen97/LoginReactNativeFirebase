
import React, { Component } from 'react';
import { View } from 'react-native';
// import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component{

    initializeFirebase() {
        const firebase = require("firebase");
      
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCQVwqA0zQJYImFnIhnL3mcyS8D0Jn9NIw",
            authDomain: "authentication-b470a.firebaseapp.com",
            databaseURL: "https://authentication-b470a.firebaseio.com",
            projectId: "authentication-b470a",
            storageBucket: "authentication-b470a.appspot.com",
            messagingSenderId: "554812669150"
        };
        firebase.initializeApp(config);
      }
      
      componentWillMount() {
        this.initializeFirebase();
      
      }
    render(){
        return(
            <View>
                <Header headerText="Authentication"/>
                <LoginForm />
            </View>

        );
    }
}
export default App;