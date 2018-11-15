import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ListGroup, ListGroupItem, Form, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment, removeComment } from './actions';

/**
 * Comments is a container
 * This will get comments from the redux store
 */
class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    }
  }


  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    // call prop function to add comment
    let comment = { text: this.state.comment, post_id: this.props.postId }
    this.props.addComment(comment, this.props.postId);
  }

  handleDelete = (evt, id) => {
    evt.preventDefault();
    // call prop fuction to delete comment
    this.props.removeComment(id, this.props.postId);
  }

  render() {
    return (
      <section className="Comments">
        <h4>Comments</h4>
        <ListGroup className="py-3">
          {this.props.comments.map(c => {
            return (
              <ListGroupItem key={c.id}>
                <a href="#" onClick={(evt) => this.handleDelete(evt, c.id)} className="mr-3">
                  <FontAwesomeIcon icon="trash-alt" />
                </a>
                {c.text}
              </ListGroupItem>
            )
          })}
        </ListGroup>
        <Form onSubmit={this.handleSubmit}>
          <Input onChange={this.handleChange} value={this.state.comment} name="comment" placeholder="New Comment" />
          <Button color="success" className="mt-2">Add</Button>
        </Form>
      </section>
    );
  }
}

function mapStateToProps(state, props) {
  let id = props.postId;
  return ({
    comments: Object.values(state.comments[id])
  })
}

export default connect(mapStateToProps, { addComment, removeComment })(Comments);
