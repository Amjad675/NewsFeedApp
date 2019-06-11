import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Button,
  Platform
} from "react-native";
import Pdf from "react-native-pdf";
import RNFetchBlob from "rn-fetch-blob";
import Share from "react-native-share";

class PDFView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  onDownloadPDF() {
    let reportDir =
      Platform.OS === "ios"
        ? RNFetchBlob.fs.dirs.DocumentDir
        : RNFetchBlob.fs.dirs;

    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
        notification: true,
        description: "PDF Report"
      },
      path: reportDir + "/CFSReport.pdf" // this is the path where your downloaded file will live in
    };

    RNFetchBlob.config(options)
      .fetch("GET", "http://samples.leanpub.com/thereactnativebook-sample.pdf")
      .then(res => {
        if (Platform.OS == 'ios')
        {
          Share.open({
            title: 'PDF Report',
            url: 'file://'+res.path()
          }).then((res) => console.log(res))
          .catch((err) => console.log(err));
        }
        res.path();
      })
      .catch(err => {
      });
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
          <Button title="Download" onPress={this.onDownloadPDF} />
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
