/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import City from './city';

const CityList = ({ cities }) => {
    return (
        <div className="cities">
            {cities.map((city) => {
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
};

export default CityList;
