import React, {Component} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const RecentSearches = ({recSearches}) => {
    return (
        <div className="wrap-location">
            <label>Recent Searches:</label>
            <div className = "list">
            {
                recSearches.map((item) => {
                    return <p key={shortid.generate()}>{item.toLowerCase()}</p>
                })
            }   
            </div>
        </div>
    );
}

RecentSearches.propTypes = {
    recSearches: PropTypes.array
};

export default RecentSearches;