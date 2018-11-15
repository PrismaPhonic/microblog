import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from './actions';
import BlogForm from './BlogForm';

class NewPost extends Component {
  render() {
    return (
      <BlogForm header="New Post" handlePost={this.props.addPost} history={this.props.history} />
    );
  }
}

export default connect(null, { addPost })(NewPost);
