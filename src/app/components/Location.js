import React, {Component, PropTypes} from 'react';
import shortid from 'shortid';

const Locations = ({locations, searchLocation}) => {
    
    const setSearch = (e) => {
        searchLocation(e.target.innerText);
    }
    return (
        <div className="wrap-location">
            <label>Locations:</label>
            <div className = "list">
            {
                locations.map((item) => {
                    console.log(item.title)
                    return <button onClick={setSearch} key={shortid.generate()}>{item.title}</button>
                })
            }   
            </div>
        </div>
    );
}

Locations.propTypes = {
    locations: PropTypes.array,
    searchLocation: PropTypes.func
};


export default Locations;