import React, {Component, PropTypes} from 'react';
import shortid from 'shortid';
import {Link} from 'react-router';

import Item from './item';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: '/list'
        }
    }

    render() {
        const {items, view} = this.props;
        return (
            <div className="result-page">
                <div className={view.preloader ? 'show' : 'hide'}>
                    <img src="./../../spin.gif"></img>
                </div>
                <header className="list-header">
                    <p><Link to="/"><img src="./../../back.svg"></img>Property Cross</Link></p>
                    <h2>Results</h2>
                </header>

                <div className = "list">
                    {
                        items.map((item) => {
                            return (
                                <Item item={item} key={shortid.generate()} path={this.state.path}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

List.propTypes = {
    items: PropTypes.array.isRequired,
    view: PropTypes.object.isRequired
};

export default List;