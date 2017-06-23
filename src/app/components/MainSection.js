import React, {Component} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Link } from 'react-router';

import Header from './Header';
import Location from './Location';
import RecentSearch from './RecentSearch';
import Error from './Error';


class MainSection extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps) {
        if(nextProps.view.error === '' &&  nextProps.items.length !== 0) {
            this.props.router.push('/List');
        }
        
        return true;
    }
    render() {
        const {items, view, locations, recSearches} = this.props;
        let error = '';
        const searchListings = (e) => {
            this.props.actions.search(this.searchInput.value);
            this.props.actions.preloader(true);
            this.searchInput.value = '';
        }

        const searchLocation = (location) => {
            this.props.actions.search(location);
            this.props.actions.preloader(true);
        }

        const getLocations = () => {
            this.props.actions.getLocation();
        }

        let searches = <RecentSearch recSearches={recSearches}/>;


        
        if(recSearches.length) {
            searches = <RecentSearch recSearches={recSearches}/>;
        }
        if(view.error) {
            searches = <Error error={view.error}/>;
        }
        if (locations.length) {
            searches = <Location locations={locations} searchLocation={searchLocation}/>;
        }

        return (
          <div className="main">
                <Header/>
                <div className={view.preloader ? 'show' : 'hide'}>
                    <img src="./../../spin.gif"></img>
                </div>
                <section className="main">
                    <input placeholder = "Enter your location" ref={(input) => {this.searchInput = input;}}/>
                    <button className="btn" onClick={searchListings}>Go</button>
                    <button className="btn" id="location-btn" onClick={getLocations}>My location</button>
                    {error}
                    {searches}
                </section>
          </div>
        );
    }
}

MainSection.propTypes = {
    items: PropTypes.array,
    actions: PropTypes.object,
    view: PropTypes.object,
    router: PropTypes.object,
    locations: PropTypes.array,
    recSearches: PropTypes.array
};

export default MainSection;
