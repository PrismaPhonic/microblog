import React, { Component } from 'react';
import PostListing from './PostListing';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

class Blog extends Component {
  render() {
    return (
      <Row className="Blog">
        {this.props.posts.map(post => {
          return (
            <Col key={post.id} xs="6" className="my-2">
              <PostListing data={post} />
            </Col>
          )
        })}
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: Object.values(state.posts),
  };
}

export default connect(mapStateToProps)(Blog);
