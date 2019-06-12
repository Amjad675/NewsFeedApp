import React, { Component } from "react";
import { Text, View, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import { increaseCounter, decreaseCounter, updateName } from "./../../actions";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.nickname
    };
  }

  render() {
    return (
      <View>
        <Text>Counter</Text>
        <Text>{this.props.value}</Text>
        <Text>{this.props.nickname}</Text>

        <Text>{this.state.text}</Text>

        <Button title="Increase" onPress={() => this.props.increase()} />
        <Button title="Decrease" onPress={() => this.props.decrease()} />

        <TextInput
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />

        <Button
          title="Update Name"
          onPress={() => this.props.updateName(this.state.text)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.home.value,
    nickname: state.home.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increase: () => dispatch(increaseCounter()),
    decrease: () => dispatch(decreaseCounter()),
    updateName: name => dispatch(updateName(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
