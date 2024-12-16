import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WebDevelopmentPlans = () => {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        // Fetch Web Development Plans from the backend API
        axios
            .get('https://server-dl1g.onrender.com/api/web-development-plan')
            .then((response) => {
                setPlans(response.data);
            })
            .catch((error) => {
                console.log('Error fetching Web Development Plans:', error);
            });
    }, []);

    return (
        <div className="container">
            <h1>Our Web Development Plans</h1>
            <div className="row">
                {plans.map((plan) => (
                    <div key={plan._id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{plan.title}</h5>
                                <p className="card-text">{plan.description}</p>
                                <h5>Price: {plan.price}</h5>
                                <h6>Features:</h6>
                                <ul>
                                    {plan.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                                <h6>What is FREE:</h6>
                                <ul>
                                    {plan.whatIsFree.map((freeItem, index) => (
                                        <li key={index}>{freeItem}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WebDevelopmentPlans;
