import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import MainSection from '../components/MainSection';
import * as Actions from '../actions/index';

class App extends Component {
    render() {
        const {data, actions, faves, locations, recSearches} = this.props;
        let children = React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, {data,actions,faves,locations,recSearches});
        });
        return (
          <div>
            {children}
          </div>
        );
    }
}

App.propTypes = {
    data: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    faves: PropTypes.array.isRequired,
    locations: PropTypes.array.isRequired,
    recSearches: PropTypes.array
};

function mapStateToProps(state) {
    return {
        data: state.reducer,
        faves: state.reducer.favesData,
        locations: state.reducer.locationData,
        recSearches: state.reducer.recentSearches
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
