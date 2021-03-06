import React from "react";
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet
} from "react-native";
import moment from "moment";

import { Actions } from "react-native-router-flux";

import styles from "./styles";

const NewsItem = ({ article }) => {
  const { title, urlToImage, source, publishedAt } = article;
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor={"transparent"}
      onPress={() => Actions.Article({ article, title })}
    >
      <View style={styles.wrapper}>
        {urlToImage && (
          <Image
            source={{ uri: urlToImage }}
            style={{ width: 80, height: 80, marginRight: 10 }}
          />
        )}

        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.bottom}>
            <Text
              style={styles.source}
              // onPress={() => Actions.Source({ source, title: source.name })}
              // onPress={() => Actions.PDFView({})}
              onPress={() => Actions.replace("PDFView")}
            >
              {source.name}
            </Text>
            <Text style={styles.date}>{moment(publishedAt).fromNow()}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default NewsItem;
