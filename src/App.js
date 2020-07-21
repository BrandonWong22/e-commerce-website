import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignInSignOut from "./pages/SignInSignOut/SignInSignOut";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/UserActions";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/UserSelectors";

// function App() {
class App extends Component {
  // state = {
  //   currentUser: null,
  // };

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // createUserProfileDocument(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // userAuth.onSnapShot((snapShot) => {
        //   console.log(snapShot);
        // });
        userRef.onSnapshot((snapShot) => {
          // console.log(snapShot.data());
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data(),
          //   },
          // });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={Shop} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <SignInSignOut />
              }
            />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
