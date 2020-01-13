import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// anytime you want to interact a component with redux, calling an action or getting a state use connect

const Alert = ({ alerts }) => 
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  alerts: state.alert // from reducers, now have props.alert available to us
});

export default connect(mapStateToProps)(Alert);

