import React, {Component, PropTypes} from 'react';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router'

class MainSection extends Component {
    constructor(props) {
        super(props);
        this.searchListings = this.searchListings.bind(this);
    }
    
    searchListings () {
        this.props.actions.search(this.searchInput.value);
        this.searchInput.value = '';
    }

    render() {
        const {items} = this.props;
        return (
          <div className="main">
                <Header/>
                <section className="main">
                    <input placeholder = "Enter your location" ref={(input) => {this.searchInput = input;}}/>
                    <Link className="btn" to="/list" onClick={this.searchListings}>Go</Link>
                    <button className="btn" id="location-btn">My location</button>
                    <label>Recent searches:</label>
                    <div className = "list">

                    </div>
                </section>
          </div>
        );
    }
}

MainSection.propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};


export default MainSection;
