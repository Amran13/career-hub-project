import React from 'react'

function CreateApplication() {
    const handleCreateApplication = (e) => {
        e.preventDefault();
        const form = e.target;
        const jobTitle = form.jobtitle.value;
        const companyName = form.companyname.value;
        const remoreOrOnsite = form.remoteoronsite.value;
        const jobType = form.jobtype.value;
        const salary = form.salary.value;
        const jobDescription = form.jobdescription.value;
        const jobRequirement = form.jobrequirement.value;
        const educationalRequirement = form.educationalrequirement.value;
        const experience = form.experience.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const address = form.address.value;
        const logoUrl = form.logourl.value;

        const newApplication = {jobTitle, companyName, remoreOrOnsite, jobType, salary, jobDescription, jobRequirement, educationalRequirement, experience, phone, email, address, logoUrl}
         
        fetch('http://localhost:5000/applications', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newApplication)
        })
        .then(result => {
            console.log(result)
        })
        .catch(err => console.error(err))

        console.log(jobTitle, companyName, remoreOrOnsite, jobType, salary, jobDescription, jobRequirement, educationalRequirement, experience, phone, email, address, logoUrl)


    }
  return (
    <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add an Application</h2>
            <form onSubmit={handleCreateApplication}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="jobtitle" placeholder="Job title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Company Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="companyname" placeholder="Company Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Remote Or Onsite</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="remoteoronsite" placeholder="Remote Or Onsite" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Job type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="jobtype" placeholder="Job type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Salary</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="salary" placeholder="Salary" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="mb-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Description</span>
                        </label>
                        <label className="input-group">
                        <textarea className="textarea w-full h-32 textarea-bordered" name='jobdescription' placeholder="Job Description"></textarea>
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Requirement</span>
                        </label>
                        <label className="input-group">
                        <textarea className="textarea w-full h-32 textarea-bordered" name='jobrequirement' placeholder="Job Requirements"></textarea>
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Educational Requirement</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="educationalrequirement" placeholder="Educational Requirements" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Experience</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="experience" placeholder="Experience" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="phone" placeholder="Phone" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="address" placeholder="Address" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Logo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="logourl" placeholder="Logo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Application" className="btn btn-block" />

            </form>
        </div>
  )
}

export default CreateApplication