import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Error = ({error}) => {
    return (
        <div className="wrap-error">
            <label>Error:</label>
            <span className = "error">
                {error} 
            </span>
        </div>
    );
}

Error.propTypes = {
    error: PropTypes.string
};

export default Error;