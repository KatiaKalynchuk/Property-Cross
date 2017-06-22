import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

import Header from './Header';

class MainSection extends Component {
    render() {
        const {items, view} = this.props;
        const searchListings = (e) => {
            this.props.actions.search(this.searchInput.value);
            this.searchInput.value = '';
            {/*if(!this.props.view.error) {
            e.preventDefault();
            }*/} 
        }
        return (
          <div className="main">
                <Header/>
                <section className="main">
                    <input placeholder = "Enter your location" ref={(input) => {this.searchInput = input;}}/>
                    <Link className="btn" to="/list" onClick={searchListings}>Go</Link>
                    <button className="btn" id="location-btn">My location</button>
                    <label>Recent searches:</label>
                    <div className = "list">
                        {
                            console.log(this.props.view)
                        } 
                    </div>
                </section>
          </div>
        );
    }
}

MainSection.propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    view: PropTypes.object.isRequired
};

export default MainSection;
