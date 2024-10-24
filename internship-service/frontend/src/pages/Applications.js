import React, { useEffect, useState } from 'react';

function Applications() {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/applications') // URL вашего API
            .then(response => response.json())
            .then(data => setApplications(data))
            .catch(error => console.error('Error fetching applications:', error));
    }, []);

    return (
        <div>
            <h2>Your Applications</h2>
            <ul className="list-group">
                {applications.map(application => (
                    <li key={application.id} className="list-group-item">
                        <h5>{application.jobId}</h5>
                        <p>Status: {application.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Applications;