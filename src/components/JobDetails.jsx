import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import jobDetials1 from '../assets/images/bg1.png'
import jobDetials2 from '../assets/images/bg2.png'

const JobDetails = () => {
    const params = useParams();
    const jobs = useLoaderData();

    const job = jobs.find(item => item.id === parseInt(params.id))
    const { job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;
    const { phone, email, address } = contact_information;
    // console.log(params, jobs, job)

    return (
        <div>
            <div className='flex justify-around '>
                <img className='' src={jobDetials1} alt="pic" />
                <img className='' src={jobDetials2} alt="pic" />
            </div>
            <h2 className='relative bottom-32 font-bold text-2xl'>Job Detials</h2>
            <div className='flex justify-between m-8'>
                <div className='text-left w-2/3 px-8 py-2'>
                    <div className='text-justify'>
                        <p><span className='font-bold'>Job Description</span> : {job_description} </p><br />
                        <p><span className='font-bold'>Job Responsibility</span> : {job_responsibility} </p><br />
                        <p><span className='font-bold'>Educational Requirements</span> : <br /> {job_responsibility} </p><br />
                        <p><span className='font-bold'>Experiences</span> : <br /> {experiences} </p>
                    </div>
                </div>
                <div className='w-1/3 bg-violet-200 space-y-3 text-left px-6 py-4 rounded-lg'>
                    <h2 className='text-xl font-bold my-4'>Job Details</h2>
                    <hr />
                    <p className='font-medium'>Salary : <span className='text-zinc-500 font-normal'>{salary}</span></p>
                    <p className='font-medium'>Job Title : <span className='text-zinc-500 font-normal'>{job_title}</span></p>
                    <h3 className='font-bold text-xl py-2'>Contact Information</h3>
                    <hr />
                    <p className='font-medium'>Phone : <span className='text-zinc-500 font-normal'>{phone}</span></p>
                    <p className='font-medium'>Email : <span className='text-zinc-500 font-normal'>{email}</span></p>
                    <p className='font-medium'>Address : <span className='text-zinc-500 font-normal'>{address}</span></p>
                    <button className='btn btn-wide w-full bg-violet-700 text-white hover:bg-violet-500'>Apply Now</button>
                </div>
            </div>
        </div >
    );
};

export default JobDetails;