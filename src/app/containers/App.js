import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import MainSection from '../components/MainSection';
import * as Actions from '../actions/index';

class App extends Component {
    render() {
        const {items, actions, view, faves} = this.props;
        let children = React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, {
                items,
                actions,
                view,
                faves
            });
        });
        return (
          <div>
            {children}
          </div>
        );
    }
}

App.propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    view: PropTypes.object.isRequired,
    faves: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        items: state.reducerData.searchData,
        faves: state.reducerData.favesData,
        view: state.reducerView
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
