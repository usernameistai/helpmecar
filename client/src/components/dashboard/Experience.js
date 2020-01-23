import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
// import moment from 'moment';
import { connect } from 'react-redux';
//  
const Experience = ({ experience }) => {
  const experiences = experience.map(exp => (
    <tr key={exp.id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - {' '}
        { exp.to === null ? ('Now') : (<Moment format='YYYY/MM/DD'>[exp.to}</Moment>) }
      </td>
      <button
        // onClick={() => deleteExperience(exp._id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Some of my experiences</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company/Organisation</th>
            <th className='hide-sm'>Title</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {experiences}
        </tbody>
      </table>
    </Fragment>
  )
}

Experience.propTypes = {
  experience: PropTypes.array.isRequired
};

export default connect()(Experience);
