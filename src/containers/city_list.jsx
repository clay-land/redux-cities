/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import City from './city';
import { setCities } from '../actions';

class CityList extends React.Component {
    componentWillMount() {
        this.props.setCities();
    }
    render() {
        return (
            <div className="cities">
                {this.props.cities.map((city) => {
                    return (
                    <City
                    city={city}
                    key={city.address}
                    />);
                })}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { setCities },
        dispatch
    );
};

const mapStateToProps = (state) => {
    return {
        cities: state.cities
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
