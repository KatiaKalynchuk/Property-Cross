import React, {Component} from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
          <header className="header">
              <h1>Property Cross</h1>
                  <Link className="btn-faves" to="/faves">Faves</Link>
                  <p>Use the form below to search for houses to buy. You can search by place-name, postcode, or 
                    click 'My location', to search in your current location!
                  </p>
          </header>
    );
}

export default Header;
