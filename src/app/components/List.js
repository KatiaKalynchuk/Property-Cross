import React, {Component, PropTypes} from 'react';
import {BrowserRouter as Router, Link} from 'react-router';

class List extends Component {

    render() {
        const {items, view} = this.props;
        console.log(view.preloader)
        console.log(items);
        return (
            <div className="result-page">
                <div className={view.preloader ? 'show' : 'hide'}>
                    <img src="./../../spin.gif"></img>
                </div>
                <header className="list-header">
                    <p><Link to = "/"><img src="./../../back.svg"></img>Property Cross</Link></p>
                    <h2>Results</h2>
                </header>
                <div className = "list">
                    {
                        items.map(item => {
                            return (
                                <div key = {item.title.toString()} className="result-list">
                                    <img src={item.img_url}></img>
                                    <p>{item.price_formatted}</p>
                                    <p>{item.title}</p>
                                </div>
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
    view: PropTypes.array.isRequired
};

export default List;