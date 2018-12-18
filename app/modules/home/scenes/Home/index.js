import React from "react";
import { FlatList, RefreshControl, ActivityIndicator } from "react-native";

import { connect } from "react-redux";

import NewsItem from "../../components/NewsItem";

import { actions as home } from "../../index";
const { getNewsHeadlines, getHeadlinesBySource } = home;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      refreshing: false
    };
  }

  componentDidMount() {
    this.getNewsHeadlines(false);
  }

  getNewsHeadlines = (refreshing = true) => {
    this.setState({ refreshing });
    this.props
      .getNewsHeadlines()
      .finally(() => this.setState({ refreshing: false }));
  };

  renderItem = ({ item, index }) => {
    return <NewsItem article={item} />;
  };

  render() {
    const { isFetching, articles, errorMessage, hasError } = this.props;

    if (isFetching) return <ActivityIndicator />;
    else {
      return (
        <FlatList
          style={{ backgroundColor: "#eaeaea" }}
          contentContainerStyle={{ paddingVertical: 5 }}
          ref="listRef"
          data={articles}
          extraData={this.state}
          renderItem={this.renderItem}
          initialNumToRender={5}
          keyExtractor={(item, index) => index.toString() + "_home"}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.getNewsHeadlines}
            />
          }
        />
      );
    }
  }
}

function mapStateToProps(state, props) {
  return {
    isFetching: state.homeReducer.isFetching,
    hasError: state.homeReducer.hasError,
    errorMessage: state.homeReducer.errorMessage,
    articles: state.homeReducer.articles
  };
}

export default connect(
  mapStateToProps,
  { getNewsHeadlines }
)(Home);
