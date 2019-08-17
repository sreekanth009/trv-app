import React from "react";
import Header from "./components/atoms/header";
import LandingPage from "./components/pages/landing-page";
import DetailsPage from "./components/pages/details-page";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path={'/'} component={LandingPage} />
      <Route path={'/details-page'} component={DetailsPage} />
    </Router>
  );
}

export default App;