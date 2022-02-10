import React, { memo } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Characters from "../pages/character/Charaters";
import MainLayout from "./MainLayout";

const Home = () => (
    <BrowserRouter> 
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Characters} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
);

export default memo(Home);
