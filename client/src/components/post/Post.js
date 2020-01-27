import React, { Fragment, useEffect } from 'react'; // need to get post when it loads
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../layout/spinner';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { connect } from 'react-redux';
import { getPost } from '../../actions/post';

const Post = ({ getPost, post: { post, loading }, match }) => { // id from url in props.match
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post === null 
    ? <Spinner /> 
    : <Fragment>
      <Link to='/posts' className='btn'>
        Back to posts
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div className='comments'>
        {post.comments.map(comment => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </Fragment>
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);
