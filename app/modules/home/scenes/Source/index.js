import React, { Component } from "react";
import { Text, View, ActivityIndicator, FlatList } from "react-native";
import { connect } from "react-redux";
import { actions as home } from "../../index";
import NewsItem from "./../../components/NewsItem/index";
const { getHeadlinesBySource } = home;

class Source extends Component {
  constructor() {
    super();
    this.state = {
      refreshing: false,
      isFetching: true,
      articles: [],
      hasError: false,
      errorMessage: ""
    };
  }

  componentDidMount() {
    this.getHeadlinesBySource(false, true);
  }

  getHeadlinesBySource = (refreshing = true, isFetching = false) => {
    let source = this.props.source;

    this.setState({ refreshing, isFetching });
    this.props
      .getHeadlinesBySource(source.id)
      .then(({ articles }) => this.setState({ articles }))
      .catch(error => alert(error.message))
      .finally(() => this.setState({ refreshing: false, isFetching: false }));
  };

  renderItem = ({ item, index }) => {
    return <NewsItem article={item} />;
  };

  render() {
    const { articles, isFetching, hasError, errorMessage } = this.state;

    if (isFetching) return <ActivityIndicator />;
    else {
      return (
        <FlatList
          style={{ backgroundColor: "#eaeaea" }}
          contentContainerStyle={{ paddingVertical: 5 }}
          ref="listRef"
          data={articles}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString() + "_source"}
        />
      );
    }
  }
}

export default connect(
  null,
  { getHeadlinesBySource }
)(Source);
