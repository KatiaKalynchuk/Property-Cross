import React, {Component} from 'react';

class Header extends Component {

    render() {
        return (
          <header className="header">
              <h1>Property Cross</h1>
                  <button>Faves</button>
                  <p>Use the form below to search for houses to buy. You can search by place-name, postcode, or 
                    click 'My location', to search in your current location!
                  </p>
          </header>
        );
    }
}

export default Header;
