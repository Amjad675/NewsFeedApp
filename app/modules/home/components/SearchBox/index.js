import React from 'react';
import { View } from "react-native";
import { InputGroup, Input, Icon } from 'native-base';

const SearchBox = (props) => {
  const { searchBoxName, searchTerm, handleInputChange } = props;
  return(
    <View >
      <InputGroup style={{ paddingHorizontal: 10, paddingVertical: 10, marginBottom: 10, backgroundColor: "#c2c2c2", borderRadius: 40, margin: 5, height: 40}}>
        <Icon name="ios-search" />
        <Input value={searchTerm} placeholder={searchBoxName} onChangeText={(e) => handleInputChange(e)}/>
        <Icon name="ios-people" />
      </InputGroup>
    </View>
  );
};

export default SearchBox;