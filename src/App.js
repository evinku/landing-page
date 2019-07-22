import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "../src/pages/Landing";
import About from "./pages/About";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Container from "./components/Container";
import Grow from "./components/Grow";
import NewPaste from "./pages/NewPaste";
import PasteDetails from "./pages/PasteDetails";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Container>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/about" exact component={About} />
            <Route path="/paste" exact component={NewPaste} />
            <Route path="/paste/:id" exact component={PasteDetails} />
            <Route component={NotFound} />
          </Switch>
          <Grow />
          <Footer>Made with Love 💓</Footer>
        </Container>
      </Router>
    </>
  );
}

export default App;
