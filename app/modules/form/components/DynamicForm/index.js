import React, { Component } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import {
  Container,
  Header,
  Content,
  Accordion,
  ListItem,
  Radio,
  Right,
  Left
} from "native-base";

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderOtherFields = () => {
    return (
      <View>
        <Text>This is NOT A TEXT FIELD!</Text>
      </View>
    );
  };

  renderRadioButtonField = field => {
    let fieldName = field.templateOptions.label;

    return (
      <View>
        <Container>
          <ListItem>
            <Left>
              <Text>Daily Stand Up</Text>
            </Left>
            <Right>
              <Radio selected={false} />
            </Right>
            <Left>
              <Text>Discussion with Client</Text>
            </Left>
            <Right>
              <Radio selected={true} />
            </Right>
          </ListItem>
        </Container>
      </View>
    );
  };

  renderTextAreaField = field => {
    let fieldName = field.templateOptions.label;

    return (
      <View>
        <Text>{fieldName}</Text>
        <TextInput
          style={{ padding: 4 }}
          placeholder={fieldName}
          multiline={true}
          numberOfLines={5}
        />
      </View>
    );
  };

  renderTextField = field => {
    let fieldName = field.templateOptions.label;

    return (
      <View>
        <Text>{fieldName}</Text>
        <TextInput style={{ padding: 4 }} placeholder={fieldName} />
      </View>
    );
  };

  renderFields = fields => {
    let fieldsUI = fields.map(field => {
      let fieldType = field.templateOptions.type;

      return (
        <View>
          {fieldType == "text"
            ? this.renderTextField(field)
            : fieldType == "address"
            ? this.renderTextAreaField(field)
            : fieldType == "radioButtonGroup"
            ? this.renderRadioButtonField(field)
            : this.renderOtherFields()}
        </View>
      );
    });

    return fieldsUI;
  };

  renderTab = () => {
    let model = this.props.model;

    let formUI = model.map(m => {
      let tab = m.templateOptions.label;
      let fields = m.fields;

      return (
        <View>
          <Text>{tab}</Text>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1
            }}
          />
          {this.renderFields(fields)}
        </View>
      );
    });

    return formUI;
  };

  render() {
    let title = this.props.title || "Member Profile Form";

    return (
      <View>
        <ScrollView>
          <Text>{title}</Text>
          {this.renderTab()}
        </ScrollView>
      </View>
    );
  }
}

export default DynamicForm;
