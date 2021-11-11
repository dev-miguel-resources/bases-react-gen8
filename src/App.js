import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

// import components
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  // EL PROYECTO LES LANZARÁ ERROR, YA QUE LO DEJAMOS SIN QUE RENDERIZAR

  unsubscribeFromAuth = null;

  // life cycles: mount, updateMount, unmount
}

export default App;
