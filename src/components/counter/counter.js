import React from 'react';
import PropTypes from 'prop-types';

export default function Counter({onStart}) {
  return (
    <div>
      <button onClick={onStart}>
        Start
      </button>
    </div>
  )
}

Counter.propTypes = {
 /**
  * Event to handle what occurs when the "Start" button is clicked, in addition to starting the timer
  */
 onStart: PropTypes.func
}
