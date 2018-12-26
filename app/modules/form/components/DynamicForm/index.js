import React, { Component } from "react";
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";
import PhotoUpload from 'react-native-photo-upload';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
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
  DatePicker
} from "native-base";

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderOtherFields = () => {
    return (
      <View>
        <Text>This is ANOTHER UNKNOWN FIELD!</Text>
      </View>
    );
  };

  handleChange() {
    DocumentPicker.show({
      filetype: [DocumentPickerUtil.images()],
    },(error,res) => {
      // Android
      console.log(
        res.uri,
        res.type, // mime type
        res.fileName,
        res.fileSize
      );
    });
  }

  renderFileUpload = () => {
    // return (
    //   <View>
    //     <Text>File Upload View</Text>
    //   </View>
    // )
    // iPhone/Android
    return (
    <View >
      <Text>File Upload View</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{ alignItems: 'center' }}
          onPress={this.handleChange.bind(this)}>
          <Image
            source={{
              uri:
                'https://aboutreact.com/wp-content/uploads/2018/09/clips.png',
            }}
          />
          <Text style={{ marginTop: 10 }}>Add Attachment</Text>
        </TouchableOpacity>
        {/* <Text >
          {this.state.fileUri ? 'URI\n' + this.state.fileUri : ''}
        </Text>
        <Text style={styles.text}>
          {this.state.fileType ? 'Type\n' + this.state.fileType : ''}
        </Text>
        <Text style={styles.text}>
          {this.state.fileName ? 'File Name\n' + this.state.fileName : ''}
        </Text>
        <Text style={styles.text}>
          {this.state.fileSize ? 'File Size\n' + this.state.fileSize : ''}
        </Text> */}
      </View>
    )
  }

  renderCalendar = () => {
    return (
      <View>
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
    )
  }

  renderDropDown = (field) => {
    let dropDownLabel = field.templateOptions.label;
    return (
      <View>
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
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
        </Item>
      </View>
    )
  }

  renderImageUpload = (field) => {
    let imageUploadLabel = field.templateOptions.label;
    return (
      <View>
        <Text>{imageUploadLabel}</Text>
        <PhotoUpload
          onPhotoSelect={avatar => {
            if (avatar) {
              // console.log('Image base64 string: ', avatar)
              // Send request to backend to save Image
            }
          }}>
          <Image
            style={{
              paddingVertical: 30,
              width: 150,
              height: 150,
              borderRadius: 75
            }}
            resizeMode='cover'
            source={{
              uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
            }}/>
        </PhotoUpload>
      </View>
    )
  }

  renderCheckBoxSingle = (field) => {
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
    )
  };

  renderCheckBoxGroup = (field) => {
    let checkBoxGroupLabel = field.templateOptions.label;
    let checkBoxOptionNames = field.templateOptions.options
    return (
      <View>
        <Text>{checkBoxGroupLabel}</Text>
        {this.renderCheckBoxField(checkBoxOptionNames)}
      </View>
    )
  };

  renderCheckBoxField = checkBoxOptionNames => {
    let checkBoxUI = checkBoxOptionNames.map((option) => {
    return (
      <View>
        <ListItem>
          <CheckBox checked={true} />
          <Body>
            <Text>{option.text}</Text>
          </Body>
        </ListItem>
      </View>
      )
    })

    return checkBoxUI;
  };

  renderRadioButton = (field) => {
    let radioButtonGroupLabel = field.templateOptions.label;
    let radioButtonOptionNames = field.templateOptions.options;
    return (
      <View>
        <Text>{radioButtonGroupLabel}</Text>
        {this.renderRadioButtonField(radioButtonOptionNames)}
      </View>
    )
  }

  renderRadioButtonField = radioButtonOptionNames => {
    let radioButtonsUI = radioButtonOptionNames.map((option) => {
    return (
      <View>
        <ListItem>
          <Left>
            <Text>{option.text}</Text>
          </Left>
          <Right>
            <Radio selected={true} />
          </Right>
        </ListItem>
      </View>
      )
    })

    return radioButtonsUI;
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
