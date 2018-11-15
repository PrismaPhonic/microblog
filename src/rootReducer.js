import { ADD_POST, REMOVE_POST, EDIT_POST, ADD_COMMENT, REMOVE_COMMENT } from './actionTypes';
import uuid from 'uuid/v4';

const INITIAL_STATE = {
  posts: {
    "1": {
      id: 1,
      title: `Test Blog Title`,
      description: `test blog description`,
      body: `test blog body`
    }
  },
  comments: {
    "1": {
      "1": {
        id: 1,
        post_id: 1,
        text: "Hey this blog post sucks!"
      },
      "2": {
        id: 2,
        post_id: 1,
        text: "I actually think it is great"

      }
    }
  }
}

function rootReducer(state = INITIAL_STATE, action) {
  console.log("reducer ran; state & action:", state, action);

  switch (action.type) {
    case ADD_POST:
      let post = { ...action.post }
      post.id = uuid();
      return { ...state, posts: { ...state.posts, [post.id]: post } };

    case REMOVE_POST:
      const posts = { ...state.posts };
      delete posts[action.id.toString()];
      return { ...state, posts };

    case EDIT_POST:
      return { ...state, posts: { ...state.posts, [action.post.id]: action.post } };

    case ADD_COMMENT:
      let comment = { ...action.comment };
      comment.id = uuid();
      console.log({ ...state, comments: { ...state.comments } });
      console.log(comment.id);
      return ({
        ...state,
        comments: {
          ...state.comments,
          [action.post_id]: {
            ...state.comments[action.post_id],
            [comment.id]: comment
          }
        }
      });

    case REMOVE_COMMENT:
      const comments = { ...state.comments };
      delete comments[action.post_id][action.id];
      return { ...state, comments };

    default:
      return state;
  }
}

// addComment = (comment) => {
//   console.log('received a new comment:', comment);
//   const id = uuid();
//   comment.id = id;
//   let post_id = comment.post_id;
//   console.log('Post ID:', post_id)
//   this.setState(st => ({
//     posts: {
//       ...st.posts,
//       [post_id]: {
//         ...st.posts[post_id],
//         comments: {
//           ...st.posts[post_id].comments,
//           comment
//         }
//       }
//     }
//   }))

export default rootReducer;