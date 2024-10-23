import React from 'react';
import { Link } from 'react-router-dom';

function JobDetail({ job }) {
    return (
        <div className="list-group-item">
            <h5>{job.title}</h5>
            <p>{job.description}</p>
            <Link to={`/jobs/${job.id}`} className="btn btn-primary">View Details</Link>
        </div>
    );
}

export default JobDetail;