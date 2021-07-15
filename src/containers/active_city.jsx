/* eslint-disable indent */
import React from 'react';
import { connect } from 'react-redux';


const ActiveCity = (props) => {
    if (!props.activeCity) {
        return (
            <div className="active-city">
                <h2>Please choose a city</h2>
            </div>
        );
    }
    return (
        <div className="active-city">
            <h2>{props.activeCity.name}</h2>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        activeCity: state.activeCity
    };
};
export default connect(mapStateToProps)(ActiveCity);
