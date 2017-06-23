import React, {Component, PropTypes} from 'react';
import shortid from 'shortid';
import { Link } from 'react-router';

import Header from './Header';
import Location from './Location';
import RecentSearch from './RecentSearch';


class MainSection extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps) {
        if(nextProps.view.error === '' ) {
            this.props.router.push('/List');
        }
        
        return true;
    }
    render() {
        const {items, view, locations, recSearches} = this.props;
        let searches;
        console.log(recSearches);
        const searchListings = (e) => {
            this.props.actions.search(this.searchInput.value);
            this.props.actions.preloader(true);
            this.props.actions.recentSearches(this.searchInput.value);
            this.searchInput.value = '';
        }

        const searchLocation = (location) => {
            this.props.actions.search(location);
            this.props.actions.preloader(true);
            this.props.actions.recentSearches(location);
            this.searchInput.value = '';
        }

        const getLocations = () => {
            this.props.actions.getLocation();
        }

        if (locations.length) {
            searches = <Location locations={locations} searchLocation={searchLocation}/>;
        }

        if (recSearches.length) {
            searches = <RecentSearch recSearches={recSearches}/>;
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
