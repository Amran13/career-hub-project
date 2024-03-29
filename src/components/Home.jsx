import React, { useEffect, useState } from 'react';
import user from '../assets/images/user.png'
import Category from './Category';
import Job from './Job';

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [featuredJobs, setFeaturedJobs] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
    }, [])
    // console.log(categories, featuredJobs)
    return (
        <div>
            <div className="hero min-h-[550px] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={user} className="w-1/2 rounded-lg shadow-2xl" />
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /><span className='text-violet-500'>Dream Job</span></h1>
                        {/* <p className="py-6 text-4xl font-bold"></p> */}
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            {/* Category Section */}
            <div>
                <h2 className='font-bold text-4xl mt-16 mb-6'>Job Category List</h2>
                <p className='text-zinc-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='flex justify-center my-6'>
                    {
                        categories.map(item => <Category key={item.id} category={item}></Category>)
                    }
                </div>
            </div>

            {/* Feteared Job Section */}
            <div>
                <h2 className='font-bold text-4xl mt-16 mb-6'>Featured Jobs</h2>
                <p className='text-zinc-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-2 gap-12'>
                    {
                        featuredJobs.map(item => <Job key={item.id} job={item} ></Job>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;