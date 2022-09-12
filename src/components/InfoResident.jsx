import React from 'react';

const InfoResident = ({name, type, dimension, population}) => {
    return (
        <div className='info-resident'>
            <h1 className='title-resident'>{name}</h1>
            <div className='info-flex-resident'>
                <h3>Type: <span>{type}</span></h3>
                <h3>Dimension: <span>{dimension}</span></h3>
                <h3>Population: <span>{population}</span></h3>
            </div>
        </div>
    );
};

export default InfoResident;