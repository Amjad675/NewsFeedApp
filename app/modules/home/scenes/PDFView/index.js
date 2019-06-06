import React, { Component } from "react";
import { StyleSheet, Dimensions, Text, View, Button } from "react-native";
import Pdf from "react-native-pdf";

class PDFView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }
  render() {
    const source = {
      uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf",
      cache: true
    };

    return (
      <View style={styles.container}>
        <Text>PDF View Component</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <Button
            title="Previous"
            onPress={() => this.setState({ page: this.state.page - 1 })}
          />
          <Button
            title="Next"
            onPress={() => this.setState({ page: this.state.page + 1 })}
          />
        </View>
        <Pdf
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          style={styles.pdf}
          page={this.state.page}
        />
      </View>
    );
  }
}

export default PDFView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 25
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width
  }
});
