import React, {Component} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {Link} from 'react-router';

import Item from './item';

class Faves extends Component {
    constructor(props) {
        super(props);
        this.path = '/faves';
    }

    render() {
        const {faves} = this.props;
        return (
            <div className="result-page">
                <header className="list-header">
                    <p><Link to="/"><img src="./../../back.svg"></img>Property Cross</Link></p>
                    <h2>Favourites</h2>
                </header>

                <div className = "list">
                    {
                        faves.map((item) => {
                            return (
                                <Item item={item} key={shortid.generate()} path={this.path}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

Faves.propTypes = {
    faves: PropTypes.array
};

export default Faves;