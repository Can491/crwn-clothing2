import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop-page/shop-page.component';
import Header from "./component/header/header.component";
import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component'
import React, { useRef } from 'react';
import './App.css';
import { Switch,Route,Redirect } from "react-router-dom";
import { createUserProfileDocument,auth } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";



class App extends React.Component {
  

  unsubscribeFromAuth = null;

  componentDidMount() {
  const {setCurrentUser} = this.props;
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setCurrentUser(
          {
            id:snapShot.id,
            ...snapShot.data()
      });
      console.log(this.state);
      });
    }else{
      setCurrentUser( userAuth );
    }
  })}

    

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
         <Route exact path='/' component = { HomePage }/>
         <Route exact path='/shop' component = { ShopPage }/>
         <Route exact path='/signin' component = { SignInAndSignUpPage }/>
        </Switch> 
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispactchToProps = dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispactchToProps)(App);
