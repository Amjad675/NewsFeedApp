import React from 'react';
import { Text, View, TextInput } from "react-native";

const SearchBox = (props) => {
  const { searchBoxName, searchTerm, handleInputChange } = props;
  return(
    <View>
        <TextInput style={{padding: 10, borderColor: 'black', borderWidth: 1}} placeholder={searchBoxName} value={searchTerm} onChangeText={(e) => handleInputChange(e)} />
    </View>
  );
};

export default SearchBox;