import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppliedJob = ({ job,handleDelete }) => {
    const navigate = useNavigate()
    const { _id, logoUrl, jobtitle, companyname, remoreOrOnsite, location, jobType, salary } = job;
    const handleJobDetails = id => {
        navigate(`/job/${id}`)
    }
    
    return (
        <div className='w-full flex items-center p-8 border mb-4'>
            <div className='w-3/12 bg-violet-100 py-20 flex justify-center items-center h-[200px]'>
                <img src={logoUrl} alt="" />
            </div>
            <div className='flex justify-between w-7/12 items-center'>
                <div className='flex flex-col justify-center p-6 space-y-2 rounded-md'>
                    <h3> {jobtitle} </h3>
                    <p> {companyname} </p>
                    <div className='space-x-2'>
                        <button className='btn btn-outline text-violet-500'> {remoreOrOnsite} </button>
                        <button className='btn btn-outline text-violet-500'> {jobType} </button>
                    </div>
                    <div>
                        <span> {location} </span>
                        <span> {salary} </span>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleJobDetails(_id)} className='btn bg-violet-700 text-white hover:bg-violet-500'>View Details</button>
                    <button onClick={() => handleDelete(_id)} className='btn bg-violet-700 text-white hover:bg-violet-500'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;