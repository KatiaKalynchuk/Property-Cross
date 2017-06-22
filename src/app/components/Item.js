import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const Item = (props) => {
    const {item} = props
    return (
         <div className="result-list">
            <img src={item.img_url}/>
            <p>{item.price_formatted}</p>
            <p><Link to={'details/' + item.latitude} >{item.title}</Link></p>
        </div>
    );
};

Item.propTypes = {
    item: PropTypes.array.isRequired
}

export default Item;
