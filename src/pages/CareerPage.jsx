import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Careers = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [application, setApplication] = useState({
        name: '',
        email: '',
        contact: '',
        resume: null,
    });

    useEffect(() => {
        axios.get('https://server-dl1g.onrender.com/api/careers')
            .then(response => setJobs(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleApply = (jobId) => {
        setSelectedJob(jobId);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setApplication({ ...application, [name]: value });
    };

    const handleFileChange = (e) => {
        setApplication({ ...application, resume: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', application.name);
        formData.append('email', application.email);
        formData.append('contact', application.contact);
        formData.append('resume', application.resume);

        axios.post(`https://server-dl1g.onrender.com/api/careers/${selectedJob}/apply`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
            .then(response => {
                alert(response.data.message);
                setApplication({ name: '', email: '', contact: '', resume: null });
                setSelectedJob(null);
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="container">
            <h1>Careers</h1>
            <div className="row">
                {jobs.map(job => (
                    <div key={job._id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{job.title}</h5>
                                <p className="card-text">{job.description}</p>
                                <p><strong>Requirements:</strong> {job.requirements}</p>
                                <p><strong>Location:</strong> {job.location}</p>
                                <button className="btn btn-primary" onClick={() => handleApply(job._id)}>
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedJob && (
                <div className="application-form">
                    <h2>Apply for Position</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={application.name}
                                onChange={handleInputChange}
                                required
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={application.email}
                                onChange={handleInputChange}
                                required
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Contact</label>
                            <input
                                type="text"
                                name="contact"
                                value={application.contact}
                                onChange={handleInputChange}
                                required
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Resume</label>
                            <input
                                type="file"
                                name="resume"
                                onChange={handleFileChange}
                                required
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-success">Submit Application</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Careers;
