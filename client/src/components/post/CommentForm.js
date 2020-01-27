import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Leave a comment please</h3>
      </div>
      <form 
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
          setText(''); // clears the form
        }}
      >
        <textarea 
          name='text'
          id='' 
          cols='30' 
          rows='5'
          placeholder='Comment on the post if you like'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input 
          type='submit' 
          className='btn btn-dark my-1'
          value='Submit'
          />
      </form>
    </div>
  );
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(CommentForm);
