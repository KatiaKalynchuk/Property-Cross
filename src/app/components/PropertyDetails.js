import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const Details = (props) => {

    const {view, item, actions, favesItems} = props;

    const addToFaves = () => {
        if(!favesItems.length) {
            actions.addFaves(item)
        } else {
            if(!hasFaves()) {
                actions.addFaves(item);
            } else {
                actions.removeFaves(item);
            }
        }
    }

    const hasFaves = () => {
        const items = favesItems.find(x => {
            return x.latitude === item.latitude;
        })
        if(items) {
            return true;
        }
        return false;
    }

    return (
        <div className="details">
            <header className="header">
                <p><Link to="/list"><img src="./../../back.svg"/>Back</Link></p>
                <h2>Property Details</h2>
                <button className={`btn-star btn-faves ${hasFaves() ? 'active' : ''}`}
                  onClick={addToFaves}>&#x2605;
                 </button>
            </header>
            <div className="details-info">
                <p>{item.price_formatted}</p>
                <p className="title">{item.title}</p>
                <img src={item.img_url}/>
                <p><span>{item.bedroom_number}</span> bedrooms, <span>{item.bathroom_number}</span> bathrooms</p>
                <p>{item.summary}</p>
            </div>
        </div>
    )
}

Details.propTypes = {
    actions: PropTypes.object,
    view: PropTypes.object,
    item: PropTypes.number,
    favesItems: PropTypes.array
};

function mapStateToProps(state, own_props) {
    const item = state.reducerData.searchData.find(x => {
        return Number(x.latitude) === Number(own_props.params.id);
    }) || {};
    return {
        item: item,
        favesItems: state.reducerData.favesData
    };
}

export default connect(mapStateToProps)(Details);