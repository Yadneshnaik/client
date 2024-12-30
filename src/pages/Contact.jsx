import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://server-dl1g.onrender.com/api/contact', formData);
            setMessage('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setMessage('Error sending message.');
        }
    };

    return (
        <div className="container">
            <h1 className="text-center my-4">Contact Us</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        className="form-control"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
