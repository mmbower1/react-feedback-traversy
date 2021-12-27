import React, { Lazy, suspense } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
// components
// import Card from "./components/shared/Card";
import Header from "./components/Header";
import AboutIconLink from "./components/AboutIconLink";
// containers
import HomePage from "./containers/HomePage";
import AboutPage from "./containers/AboutPage";
// context
import { FeedbackProvider } from "./context/FeedbackContext";

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
    <FeedbackProvider>
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
    </FeedbackProvider>
  );
}

export default App;
