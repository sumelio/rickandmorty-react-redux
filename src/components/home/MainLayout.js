import React from "react";
import SearchBar from "../common/serchBar/SearchBar";
import Header from "./Header";

// Style
import "./style/MainLayour.scss";

const MainLayout = (props) => (
  <div className="mainLayoutContainer">
    <Header />
    <div className="content">
      <SearchBar />
      <div className="children">
          {props.children}
        </div>
    </div>
  </div>
);

export default MainLayout;
