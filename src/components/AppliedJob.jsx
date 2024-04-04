import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppliedJob = ({ job }) => {
    const navigate = useNavigate()
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    const handleJobDetails = id => {
        navigate(`/job/${id}`)
    }
    return (
        <div className='w-full flex items-center p-8 border mb-4'>
            <div className='w-3/12 bg-violet-100 py-20 flex justify-center items-center h-[200px]'>
                <img src={logo} alt="" />
            </div>
            <div className='flex justify-between w-7/12 items-center'>
                <div className='flex flex-col justify-center p-6 space-y-2 rounded-md'>
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
                </div>
                <div>
                    <button onClick={() => handleJobDetails(id)} className='btn bg-violet-700 text-white hover:bg-violet-500'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;