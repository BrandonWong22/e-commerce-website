import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignInSignOut from "./pages/SignInSignOut/SignInSignOut";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase";

// function App() {
class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // createUserProfileDocument(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // userAuth.onSnapShot((snapShot) => {
        //   console.log(snapShot);
        // });
        userRef.onSnapshot((snapShot) => {
          // console.log(snapShot.data());
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state.currentUser);
            }
          );
        });
      }
      this.setState({
        currentUser: userAuth,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={Shop} />
            <Route path="/signin" component={SignInSignOut} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

// }

export default App;
