import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [sortedArticles, setsortedArticles] = useState(articles);
  // const [article, setArticle] = useState(articles);
  const [sortUpvotes, setSortUpvotes] = useState(true);
const [sortDate, setSortDate] = useState(true);

  const onClickHandleUpvotes = () => {
    setSortUpvotes(!sortUpvotes);
    return sortUpvotes === true
      ? setsortedArticles(
          articles.sort((a, b) => (a.upvotes > b.upvotes ? -1 : 1))
        )
      : setsortedArticles(
          articles.sort((a, b) => (a.upvotes > b.upvotes ? 1 : -1))
        );
  };

  const onClickHandleMostRecent = () => {
      setSortDate(!sortDate);
      
  return sortDate === true
    ? setsortedArticles(
        articles.sort((a, b) => (a.date > b.date ? -1 : 1))
      )
    : setsortedArticles(
        articles.sort((a, b) => (a.date > b.date ? 1 : -1))
      );


    // return setsortedArticles(
    //   articles.sort(
    //     (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    //   )
    // );
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          onClick={onClickHandleUpvotes}
          data-testid="most-upvoted-link"
          className="small"
        >
          Most Upvoted
        </button>
        <button
          onClick={onClickHandleMostRecent}
          data-testid="most-recent-link"
          className="small"
        >
          Most Recent
        </button>
      </div>
      <Articles articles={articles} sortedArticles={sortedArticles} />
    </div>
  );
}

export default App;
