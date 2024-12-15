import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Team = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        // Fetch team members from the backend API
        axios
            .get('http://localhost:5000/api/team')
            .then((response) => {
                setTeamMembers(response.data);
            })
            .catch((error) => {
                console.log('Error fetching team members:', error);
            });
    }, []);

    return (
        <div className="container">
            <h1>Our Team</h1>
            <div className="row">
                {teamMembers.map((member) => (
                    <div key={member._id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{member.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{member.role}</h6>
                                <p className="card-text">{member.description}</p>
                                {/* LinkedIn Profile Link as Icon */}
                                <a
                                    href={member.profileLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-link"
                                    style={{ fontSize: '24px', color: '#0e76a8' }}
                                >
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
