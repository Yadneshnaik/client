import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Services = () => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('https://server-dl1g.onrender.com/api/services')
            .then((response) => setServices(response.data))
            .catch((error) => console.log(error));
    }, []);

    const handleRedirect = (serviceTitle) => {
        if (serviceTitle.toLowerCase() === 'web development') {
            navigate('/web-development-plan'); // Redirect to Web Development Plan page
        } else {
            navigate('/contact'); // Redirect to Contact page
        }
    };

    return (
        <div className="container">
            <h1 className="text-center my-4">Our Services</h1>
            <div className="row">
                {services.map((service) => (
                    <div key={service._id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.description}</p>
                                <button
                                    className="btn btn-primary mt-auto"
                                    onClick={() => handleRedirect(service.title)}
                                >
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
