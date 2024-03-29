import React from 'react';
import { useNavigate } from 'react-router-dom';

const Job = ({ job }) => {
    const navigate = useNavigate()
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    const handleJobDetails = id => {
        navigate(`/job/${id}`)
    }
    return (
        <div className='flex flex-col justify-center items-center bg-violet-50 p-6 space-y-2 rounded-md'>
            <img className='w-36 max-h-24' src={logo} alt="company-logo" />
            <h3> {job_title} </h3>
            <p> {company_name} </p>
            <div className='space-x-2'>
                <button className='btn btn-outline text-violet-500'> {remote_or_onsite} </button>
                <button className='btn btn-outline text-violet-500'> {job_type} </button>
            </div>
            <div>
                <span> {location} </span>
                <span> {salary} </span>
            </div>
            <button onClick={() => handleJobDetails(id)} className='btn bg-violet-700 text-white hover:bg-violet-500'>View Details</button>
        </div>
    );
};

export default Job;