import React, { Component } from "react";

import { Scene, Router, Stack } from "react-native-router-flux";

import Home from "../modules/home/scenes/Home";
import { color, navTitleStyle } from "../styles/theme";
import Article from "./../modules/home/scenes/Article/index";
import Source from "./../modules/home/scenes/Source/index";
import Login from "./../modules/home/scenes/Security/index";
import MemberProfile from "./../modules/form/scenes/MemberProfile/index";

export default class extends Component {
  render() {
    return (
      <Router>
        <Stack
          key="root"
          navigationBarStyle={{ backgroundColor: "#fff" }}
          titleStyle={navTitleStyle}
          backButtonTintColor={color.black}
        >
          <Scene key="Login" component={Login} initial hideNavBar={true} />
          <Scene key="Home" component={Home} title="Headlines" />
          <Scene key="Article" component={Article} title="Article Heading" />
          {/* <Scene key="Source" component={Source} /> */}
          <Scene key="Source" component={MemberProfile} />
        </Stack>
      </Router>
    );
  }
}
