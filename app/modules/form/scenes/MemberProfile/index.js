import React, { Component } from "react";
import { Text, View } from "react-native";
import DynamicForm from "./../../components/DynamicForm/index";
var jsonData = require('../../services/data.json');

class MemberProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit = model => {
    console.log(model);
  };

  render() {
    return (
      <View>
        <DynamicForm
          title="Member Profile Form"
          model={jsonData}
          onSubmit={model => {
            this.onSubmit(model);
          }}
        />
      </View>
    );
  }
}

export default MemberProfile;
