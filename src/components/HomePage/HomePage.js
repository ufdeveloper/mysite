import React from 'react';
import profilePicture from '../../assets/images/profile.png';

import classes from './HomePage.css';

const homepage = (props) => {
    return (
        <div className={classes.HomePage}>
            <img src={profilePicture}/>
            <h1>Shantanu Sardal</h1>
            <h2>Software Engineering passionate about building highly scalable, low latency and highly available distributed applications</h2>
        </div>
    );
};

export default homepage;