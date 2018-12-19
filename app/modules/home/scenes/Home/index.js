import React from "react";
import { FlatList, RefreshControl, ActivityIndicator, View } from "react-native";
import { connect } from "react-redux";
import _ from 'lodash';
import NewsItem from "../../components/NewsItem";
import SearchBox from "../../components/SearchBox";

import { actions as home } from "../../index";
const { getNewsHeadlines, filterHeadlinesBySearch } = home;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      refreshing: false,
      searchText: '',
      articles: []
    };

    this.filterNews = _.debounce(this.filterNews, 1000);
  }

  componentDidMount() {
    this.getNewsHeadlines(false);
  }

  getNewsHeadlines = (refreshing = true) => {
    this.setState({ refreshing });
    this.props
      .getNewsHeadlines()
      .finally(() => this.setState({ refreshing: false, articles: this.props.articles}));
  };

  renderItem = ({ item, index }) => {
    return <NewsItem article={item} />;
  };

  searchFieldChange = (text) => {
    this.setState({searchText: text});
    
    //It's debounced
    this.filterNews();
  }

  filterNews = () => {
    let filteredArticles;
    if (this.state.searchText.trim() !== '')
      filteredArticles = this.props.articles.filter(m => m.source.name.toLowerCase().startsWith(this.state.searchText.toLowerCase()));
    else
      filteredArticles = this.props.articles;

    this.setState({ articles: filteredArticles });
    //this.props.filterHeadlinesBySearch(filteredArticles);
  }

  render() {
    const { isFetching, articles, errorMessage, hasError } = this.props;

    if (isFetching) return <ActivityIndicator />;
    else {
      return (

        <View>
        <SearchBox 
          searchBoxName={'Search News by Name/Source'} searchTerm={this.state.searchText}
          handleInputChange={this.searchFieldChange}
        />
        <FlatList
          style={{ backgroundColor: "#eaeaea" }}
          contentContainerStyle={{ paddingVertical: 5 }}
          ref="listRef"
          data={this.state.articles}
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
        </View>
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
  { getNewsHeadlines, filterHeadlinesBySearch }
)(Home);
