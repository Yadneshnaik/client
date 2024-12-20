import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WebDevelopmentPlans = () => {
    const [plans, setPlans] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [message, setMessage] = useState('');

    // Fetch Web Development Plans from the backend API
    useEffect(() => {
        axios
            .get('https://server-dl1g.onrender.com/api/web-development-plan')
            .then((response) => {
                setPlans(response.data);
            })
            .catch((error) => {
                console.error('Error fetching Web Development Plans:', error);
            });
    }, []);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle booking submission
    const handleBooking = () => {
        if (!formData.name || !formData.email) {
            setMessage('Please fill out all fields.');
            return;
        }

        axios
            .post('https://server-dl1g.onrender.com/api/planbookings', {
                name: formData.name,
                email: formData.email,
                selectedPlan: selectedPlan.title,
            })
            .then(() => {
                setMessage('Booking successful!');
                setShowModal(false);
                setFormData({ name: '', email: '' });
            })
            .catch((error) => {
                console.error('Error booking the plan:', error);
                setMessage('An error occurred. Please try again.');
            });
    };

    return (
        <div className="container">
            <h1 className="my-4 text-center">Our Web Development Plans</h1>
            <div className="row">
                {plans.map((plan) => (
                    <div key={plan._id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{plan.title}</h5>
                                <p className="card-text">{plan.description}</p>
                                <h6>Price: {plan.price}</h6>
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
                                <button
                                    className="btn btn-primary mt-auto"
                                    onClick={() => {
                                        setSelectedPlan(plan);
                                        setShowModal(true);
                                    }}
                                >
                                    Book This Plan
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Booking Modal */}
            {showModal && (
                <div className="modal show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Book: {selectedPlan?.title}</h5>
                                <button className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                {message && <p className="text-danger">{message}</p>}
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                    Close
                                </button>
                                <button className="btn btn-primary" onClick={handleBooking}>
                                    Confirm Booking
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WebDevelopmentPlans;
