import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Blog from './Blog';
import Post from './Post';
import NewPost from './NewPost';

class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Blog />} />
        <Route
          exact
          path="/new"
          render={(props) => <NewPost {...props} />} />
        <Route
          exact
          path="/:id"
          render={(props) => <Post {...props} />} />
        {/* <Route
          exact
          path="/:id/edit"
          render={(props) => <EditPost header="Edit Post" handlePost={this.editPost} {...props} />} /> */}

        <Route
          render={() => <h1>Content Not Found</h1>} />
      </Switch>
    );
  }
}

export default Routes;
