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
        if(nextProps.data.error === '' &&  nextProps.data.searchData.length !== 0) {
            
            this.props.router.push('/List');
        }
        
        return true;
    }
    render() {
        const preloader = this.props.data.preloader;
        const error = this.props.data.error;
        const items = this.props.data.searchData;
        const {locations, recSearches} = this.props;

        const searchListings = (e) => {
            if(this.searchInput.value) {
                this.props.actions.search(this.searchInput.value);
                this.props.actions.preloader(true);
                this.searchInput.value = '';
            }
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
        if(error) {
            searches = <Error error={error}/>;
        }
        if (locations.length) {
            searches = <Location locations={locations} searchLocation={searchLocation}/>;
        }

        return (
          <div className="main">
                <Header/>
                <div className={preloader ? 'show' : 'hide'}>
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
    data: PropTypes.object,
    items: PropTypes.array,
    actions: PropTypes.object,
    router: PropTypes.object,
    locations: PropTypes.array,
    recSearches: PropTypes.array,
    preloader: PropTypes.bool,
    error: PropTypes.any
};

export default MainSection;
