import React, {Component, PropTypes} from 'react';

const RecentSearches = ({recSearches}) => {
    console.log(recSearches)
    return (
        <div className="wrap-location">
            <label>Locations:</label>
            <div className = "list">
            {
                recSearches.map((item) => {
                    return <p>{item}</p>
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