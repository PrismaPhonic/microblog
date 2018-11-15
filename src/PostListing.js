import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Link } from 'react-router-dom';

/**
 * Post Listing is container
 * This will get the posts from the redux store
 */
class PostListing extends Component {
  render() {
    const { id, title, description } = this.props.data;
    return (
      <ListGroup className="PostListing">
        <ListGroupItem>
          <ListGroupItemHeading><Link to={`/${id}`}>{title}</Link></ListGroupItemHeading>
          <ListGroupItemText>
            <i>{description}</i>
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default PostListing;