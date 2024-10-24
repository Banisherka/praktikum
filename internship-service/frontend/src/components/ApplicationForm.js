import React, { useState } from 'react';

function ApplicationForm({ jobId }) {
    const [resume, setResume] = useState('');
    const [coverLetter, setCoverLetter] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const applicationData = {
            jobId,
            userId: 1, // Предположим, что ID пользователя будет получен из контекста или состояния
            resumeId: resume,
            coverLetterId: coverLetter,
        };

        fetch('http://localhost:5000/api/applications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(applicationData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Application submitted:', data);
        })
        .catch(error => console.error('Error submitting application:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="resume">Upload Resume</label>
                <input 
                    type="file" 
                    className="form-control" 
                    id="resume" 
                    onChange={(e) => setResume(e.target.files[0])} 
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="coverLetter">Cover Letter</label>
                <textarea 
                    className="form-control" 
                    id="coverLetter" 
                    onChange={(e) => setCoverLetter(e.target.value)} 
                    required
                ></textarea>
            </div>
            <button type="submit" className="btn btn-success">Submit Application</button>
        </form>
    );
}

export default ApplicationForm;