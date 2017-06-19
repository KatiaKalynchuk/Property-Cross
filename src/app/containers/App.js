import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as Actions from '../actions/index';

class App extends Component {
    render() {
        const {items, actions} = this.props;
        return (
          <div>
            <Header/>
            <MainSection items={items} actions={actions}/>
          </div>
        );
    }
}

App.propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        items: state.searchList
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
