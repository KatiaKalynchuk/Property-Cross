import React, {Component, PropTypes} from 'react';
import Footer from './Footer';

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
          <section className="main">
                <input placeholder = "Enter your location" ref={(input) => {this.searchInput = input;}}/>
                <button onClick={this.searchListings}>Go</button>
                <button id="location-btn">My location</button>
                <label>Recent searches:</label>
                <div className = "list">
                    {
                        items.map(item => {
                            return <li>{item.title}</li>
                        })
                    }
                </div>
          </section>
        );
    }
}

MainSection.propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};


export default MainSection;
