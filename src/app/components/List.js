import React, {Component} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {Link} from 'react-router';

import Item from './item';

class List extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className="result-page">
                <header className="list-header">
                    <p><Link to="/"><img src="./../../back.svg"></img>Property Cross</Link></p>
                    <h2>Results</h2>
                </header>

                <div className = "list">
                    {
                        data.searchData.map((item) => {
                            return (
                                <Item item={item} key={shortid.generate()}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

List.propTypes = {
    data: PropTypes.object
};

export default List;