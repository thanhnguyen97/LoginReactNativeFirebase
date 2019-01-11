
import React, { Component } from 'react';
import { View } from 'react-native';
// import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component{

    state = { loggedIn: null };

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
        
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({loggedIn: true });
            } else {
                this.setState({loggedIn: false });
            }
        });
      }

    renderContent() { 
        switch (this.state.loggedIn) {
            case true:
                return <Button>Log out</Button>
            case false: 
                return <LoginForm/>
            default: 
                return <Spinner size="large" />;
        }
    }
    render(){
        return(
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
                <LoginForm />
            </View>

        );
    }
}
export default App;