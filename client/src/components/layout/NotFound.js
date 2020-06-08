import React, { Fragment } from 'react'

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle'></i> Page Not Found
      </h1>
      <p>Many apologies, this page does not exist I'm afraid (remember treat everyone equally)</p>
    </Fragment>
  );
}

export default NotFound;
