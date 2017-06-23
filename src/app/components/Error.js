import React, {Component, PropTypes} from 'react';

const Error = ({error}) => {
    return (
        <div className="wrap-error">
            <label>Error</label>
            <div className = "error">
                {error} 
            </div>
        </div>
    );
}

Error.propTypes = {
    error: PropTypes.string.isRequired
};

export default Error;