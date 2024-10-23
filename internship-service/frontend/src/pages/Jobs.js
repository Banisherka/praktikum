import React, { useEffect, useState } from 'react';
import JobList from '../components/JobList';

function Jobs() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/jobs') // URL вашего API
            .then(response => response.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);

    return (
        <div>
            <h2>Available Jobs and Internships</h2>
            <JobList jobs={jobs} />
            </div>
            );
        }
        
        export default Jobs;