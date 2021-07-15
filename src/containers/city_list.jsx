/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import City from './city';
import setCities from '../actions';

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
                    name={city.name}
                    key={city.address}
                    address={city.address}
                    slug={city.slug}
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
