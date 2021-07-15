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
    const url = `https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`;
    return (
        <div className="active-city">
            <h2>{props.activeCity.name}</h2>
            <p>{props.activeCity.address}</p>
            <img src={url} alt="city" />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        activeCity: state.activeCity
    };
};
export default connect(mapStateToProps, null)(ActiveCity);
