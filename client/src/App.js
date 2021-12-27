import React, { Lazy, suspense } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
// components
import Header from "./components/Header";
import AboutIconLink from "./components/AboutIconLink";
// containers
import HomePage from "./containers/HomePage";
import AboutPage from "./containers/AboutPage";

// styles
import "./App.css";
import "./scss/App.scss";

// redux
import {
  store,
  // persistor
} from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <AboutIconLink />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
