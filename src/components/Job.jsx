import React from 'react';
import { useNavigate } from 'react-router-dom';

const Job = ({ job }) => {
    const navigate = useNavigate()
    const { _id, logoUrl, jobtitle, companyName, remoreOrOnsite, location, jobType, salary } = job;

    // console.log(_id, logo, jobtitle, company_name, remote_or_onsite, location, job_type, salary )
    const handleJobDetails = id => {
        navigate(`/job/${id}`)
    }
    return (
        <div className='flex flex-col justify-center items-center bg-violet-50 p-6 space-y-2 rounded-md'>
            <img className='w-36 max-h-24' src={logoUrl} alt="company-logo" />
            <h3> {jobtitle} </h3>
            <p> {companyName} </p>
            <div className='space-x-2'>
                <button className='btn btn-outline text-violet-500'> {remoreOrOnsite} </button>
                <button className='btn btn-outline text-violet-500'> {jobType} </button>
            </div>
            <div>
                <span> {location} </span>
                <span> {salary} </span>
            </div>
            <button onClick={() => handleJobDetails(_id)} className='btn bg-violet-700 text-white hover:bg-violet-500'>View Details</button>
        </div>
    );
};

export default Job;