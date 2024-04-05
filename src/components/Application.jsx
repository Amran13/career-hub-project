import React, { useEffect, useState } from 'react';
import { getStoredCart } from './localStorage';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from './AppliedJob';

const Application = () => {
    const [jobs, setJobs] = useState([]);

    const loaderData = useLoaderData();
    console.log(loaderData, jobs)

    const handleDelete = _id => {
        fetch(`http://localhost:5000/applications/${_id}`, {
            method : 'DELETE'
        })
        .then(result => console.log(result))
        .catch(err => console.error(err))
        const remaining = jobs.filter(item => item._id !== _id)
        setJobs(remaining)
    }    
    const savedApplications = getStoredCart();
    console.log(savedApplications)
    console.log(loaderData.length)
    useEffect(() => {
        if (loaderData.length > 0) {
            const jobApplied = [];
            console.log(loaderData.length)
            for (let i = 0; i < savedApplications.length; i++) {
                const job = loaderData.find(item => item._id == savedApplications[i])
                console.log(job)
                if (job) {
                    jobApplied.push(job)
                }
            }
            setJobs(jobApplied)
        }
    }, [loaderData])
    console.log(jobs)
    return (
        <div>
            <h1 className="text-3xl font-bold my-4">
                Application Page
            </h1>
            <div className='my-8'>
                {
                    jobs.map(job => <AppliedJob handleDelete={handleDelete} key={job._id} job={job}></AppliedJob>)
                }
            </div>

        </div>
    );
};

export default Application;