import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Comments from './Comments';
import { connect } from 'react-redux';
import { removePost } from './actions';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  handleClick = (evt) => {
    evt.preventDefault();
    let id = this.props.post.id
    this.props.removePost(id);
    this.props.history.push('/');
  }

  render() {
    let { id, title, description, body, comments } = this.props.post;
    return (
      <section className="Post" style={{ textAlign: "left" }}>
        <Row>
          <Col xs="10">
            <h1>{title}</h1>
          </Col>
          <Col xs="2">
            <Link to={`/${id}/edit`}><FontAwesomeIcon icon="edit" /></Link>{' '}
            <a href="#" onClick={this.handleClick}><FontAwesomeIcon icon="trash-alt" /></a>
          </Col>
        </Row>
        <p><i>{description}</i></p>
        <p>{body}</p>
        <Comments postId={id} />
      </section>
    );
  }
}

function mapStateToProps(state, props) {
  let id = props.match.params.id;
  return ({
    post: state.posts[id]
  })
}

export default connect(mapStateToProps, { removePost })(Post);
