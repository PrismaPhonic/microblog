import { ADD_POST, REMOVE_POST, EDIT_POST, ADD_COMMENT, REMOVE_COMMENT } from './actionTypes';

export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    id,
  };
}

export function editPost(post) {
  return {
    type: EDIT_POST,
    post,
  };
}

export function addComment(comment, post_id) {
  return {
    type: ADD_COMMENT,
    comment,
    post_id,
  };
}

export function removeComment(id, post_id) {
  return {
    type: REMOVE_COMMENT,
    id,
    post_id,
  };
}