import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footes from "./Components/Footer/Footes";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Sobre from "./Pages/Sobre/Sobre";
import Produto from "./Pages/Produtos/Produtos";
import Error from "./Components/Error/Error";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sobre" component={Sobre} />
        <Route path="/produtos/:id" component={Produto} />
        <Route path="*" component={Error} />
      </Switch>
      <Footes />
    </BrowserRouter>
  );
};

export default Routes;
