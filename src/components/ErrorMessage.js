import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ msg }) => {

    return (
        <p className='app-error'>
            {msg}
        </p>
    );
};

ErrorMessage.propTypes = {
  msg: PropTypes.string.isRequired
};

export default ErrorMessage;
ErrorMessage.displayName = 'ErrorMessage';