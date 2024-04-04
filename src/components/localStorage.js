const getStoredCart = () => {
    const storedJobApplication = localStorage.getItem('job-application'); //null, [1, 2, 3]
    if(storedJobApplication){
        return JSON.parse(storedJobApplication) //[1, 2, 3, 4]
    }else{
        return [];  // []
    }
}

const saveJobApplication = id => {
    const storedJobApplication = getStoredCart();
    const exist = storedJobApplication.find(item => item === id)
    if(!exist){
        storedJobApplication.push(id)
        localStorage.setItem('job-application', JSON.stringify(storedJobApplication))
    }
}

export {getStoredCart, saveJobApplication}