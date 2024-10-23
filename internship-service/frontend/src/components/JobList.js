import React from 'react';
import JobDetail from './JobDetail';

function JobList({ jobs }) {
    return (
        <div className="list-group">
            {jobs.map(job => (
                <JobDetail key={job.id} job={job} />
            ))}
        </div>
    );
}

export default JobList;