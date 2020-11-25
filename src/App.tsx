import React from "react";
import { Container } from "react-bootstrap";
import AboutPage from "./components/about/AboutPage";
import HomePage from "./components/home/HomePage";
import { Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import NotFoundPage from "./components/NotFoundPage";
import BugsPage from "./components/bugs/BugsPage";

function App() {
  return (
    <Container fluid className="p-0">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route
          path="/languages/:languageId/:environmentType/:environmentId/bugs"
          component={BugsPage}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </Container>
  );
}

export default App;
