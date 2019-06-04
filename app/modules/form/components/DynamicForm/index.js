import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import PhotoUpload from "react-native-photo-upload";
import {
  DocumentPicker,
  DocumentPickerUtil
} from "react-native-document-picker";
import {
  Container,
  Body,
  Content,
  CheckBox,
  ListItem,
  Radio,
  Right,
  Left,
  Item,
  Picker,
  DatePicker,
  Form
} from "native-base";
var memberJsonData = require("../../services/memberDetails.json");

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberDetails: {}
    };

    this.getMemberDetails();
  }

  componentDidMount() {
    //this.getMemberDetails();
  }

  getMemberDetails() {
    this.state.memberDetails = memberJsonData.result;
  }

  handleChange() {
    DocumentPicker.show(
      {
        filetype: [DocumentPickerUtil.pdf()]
      },
      (error, res) => {
        // Android
        console.log("res : " + JSON.stringify(res));
        console.log("URI : " + res.uri);
        console.log("Type : " + res.type);
        console.log("File Name : " + res.fileName);
        console.log("File Size : " + res.fileSize);
      }
    );
  }

  renderOtherFields = () => {
    return (
      <View>
        <Text>This is ANOTHER UNKNOWN FIELD!</Text>
      </View>
    );
  };

  renderFileUpload = field => {
    // iPhone/Android
    return (
      <View key={field.id}>
        <Text>File Upload View</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{ alignItems: "center" }}
          onPress={this.handleChange.bind(this)}
        >
          <Image
            source={{
              uri: "https://aboutreact.com/wp-content/uploads/2018/09/clips.png"
            }}
          />
          <Text style={{ marginTop: 10 }}>Add Attachment</Text>
        </TouchableOpacity>
        <Text>{this.state.fileUri ? "URI\n" + this.state.fileUri : ""}</Text>
        <Text>{this.state.fileType ? "Type\n" + this.state.fileType : ""}</Text>
        <Text>
          {this.state.fileName ? "File Name\n" + this.state.fileName : ""}
        </Text>
        <Text>
          {this.state.fileSize ? "File Size\n" + this.state.fileSize : ""}
        </Text>
      </View>
    );
  };

  renderCalendar = field => {
    return (
      <View key={field.id}>
        <Text>Calendar View</Text>
        <DatePicker
          defaultDate={new Date(2018, 4, 4)}
          minimumDate={new Date(2018, 1, 1)}
          maximumDate={new Date(2018, 12, 31)}
          locale={"en"}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          animationType={"fade"}
          androidMode={"default"}
          placeHolderText="Select date"
          textStyle={{ color: "green" }}
          placeHolderTextStyle={{ color: "#d3d3d3" }}
          onDateChange={this.setDate}
        />
      </View>
    );
  };

  renderDropDownValues = dropDownFields => {
    let dropDownUI = dropDownFields.map(option => {
      return (
        <Picker.Item
          key={option.value + "1"}
          label={option.text}
          value={option.value}
        />
      );
    });

    return dropDownUI;
  };

  renderDropDown = field => {
    let dropDownLabel = field.templateOptions.label;
    let dropDownFields = field.templateOptions.options;
    return (
      <View key={field.id}>
        <Text>{dropDownLabel}</Text>
        <Item picker>
          <Picker
            mode="dropdown"
            style={{ width: undefined }}
            placeholder="Select your option"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff"
            // selectedValue={this.state.selected2}
            // onValueChange={this.onValueChange2.bind(this)}
          >
            {this.renderDropDownValues(dropDownFields)}
          </Picker>
        </Item>
      </View>
    );
  };

  renderImageUpload = field => {
    let imageUploadLabel = field.templateOptions.label;
    return (
      <View key={field.id}>
        <Text>{imageUploadLabel}</Text>
        <PhotoUpload
          onPhotoSelect={avatar => {
            if (avatar) {
              // console.log('Image base64 string: ', avatar)
              // Send request to backend to save Image
            }
          }}
        >
          <Image
            style={{
              paddingVertical: 30,
              width: 150,
              height: 150,
              borderRadius: 75
            }}
            resizeMode="cover"
            source={{
              uri:
                "https://facebook.github.io/react-native/docs/assets/favicon.png"
            }}
          />
        </PhotoUpload>
      </View>
    );
  };

  renderCheckBoxSingle = field => {
    let checkBoxGroupLabel = field.templateOptions.label;
    return (
      <View>
        <ListItem>
          <CheckBox checked={true} />
          <Body>
            <Text>{checkBoxGroupLabel}</Text>
          </Body>
        </ListItem>
      </View>
    );
  };

  renderCheckBoxGroup = field => {
    let checkBoxGroupLabel = field.templateOptions.label;
    let checkBoxOptionNames = field.templateOptions.options;
    return (
      <View>
        <Text>{checkBoxGroupLabel}</Text>
        {this.renderCheckBoxField(checkBoxOptionNames)}
      </View>
    );
  };

  renderCheckBoxField = checkBoxOptionNames => {
    let checkBoxUI = checkBoxOptionNames.map(option => {
      return (
        <View key={option.value}>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>{option.text}</Text>
            </Body>
          </ListItem>
        </View>
      );
    });

    return checkBoxUI;
  };

  renderRadioButton = field => {
    let radioButtonGroupLabel = field.templateOptions.label;
    let radioButtonOptionNames = field.templateOptions.options;
    return (
      <View>
        <Text>{radioButtonGroupLabel}</Text>
        {this.renderRadioButtonField(radioButtonOptionNames)}
      </View>
    );
  };

  renderRadioButtonField = radioButtonOptionNames => {
    let radioButtonsUI = radioButtonOptionNames.map(option => {
      return (
        <View key={option.value}>
          <ListItem>
            <Left>
              <Text>{option.text}</Text>
            </Left>
            <Right>
              <Radio selected={true} />
            </Right>
          </ListItem>
        </View>
      );
    });

    return radioButtonsUI;
  };

  renderTextAreaField = field => {
    let fieldName = field.templateOptions.label;
    let fieldKey = field.key;

    return (
      <View key={fieldKey}>
        <Text>{fieldName}</Text>
        <TextInput
          style={{ padding: 4 }}
          placeholder={fieldName}
          multiline={true}
          numberOfLines={5}
          value={
            this.state.memberDetails.properties.find(
              a => a.key == `${fieldKey}`
            ).value
          }
        />
      </View>
    );
  };

  renderTextField = field => {
    let fieldName = field.templateOptions.label;
    let fieldKey = field.key;

    return (
      <View key={fieldKey}>
        <Text>{fieldName}</Text>
        <TextInput
          style={{ padding: 4 }}
          placeholder={fieldName}
          value={
            this.state.memberDetails.properties.find(
              a => a.key == `${fieldKey}`
            ).value
          }
        />
      </View>
    );
  };

  renderFields = fields => {
    let fieldsUI = fields.map(field => {
      let fieldType = field.templateOptions.type;

      return (
        <View key={field.id}>
          {fieldType == "text"
            ? this.renderTextField(field)
            : fieldType == "address"
            ? this.renderTextAreaField(field)
            : fieldType == "radioButtonGroup"
            ? this.renderRadioButton(field)
            : fieldType == "checkboxGroup"
            ? this.renderCheckBoxGroup(field)
            : fieldType == "checkBox"
            ? this.renderCheckBoxSingle(field)
            : fieldType == "profileImage"
            ? this.renderImageUpload(field)
            : fieldType == "select"
            ? this.renderDropDown(field)
            : fieldType == "calendar"
            ? this.renderCalendar(field)
            : fieldType == "file"
            ? this.renderFileUpload(field)
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
        <View key={m.id}>
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

  onSubmit = e => {
    console.log(e);
    if (this.props.onSubmit) this.props.onSubmit(this.state);
  };

  render() {
    let title = this.props.title || "Member Profile Form";

    return (
      <View>
        <ScrollView>
          <Form>
            <Text>{title}</Text>
            {this.renderTab()}
            <TouchableOpacity
              onPress={e => {
                this.onSubmit(e);
              }}
            >
              <Text>UPDATE</Text>
            </TouchableOpacity>
          </Form>
        </ScrollView>
      </View>
    );
  }
}

export default DynamicForm;
