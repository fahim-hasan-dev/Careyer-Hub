

const getStoredData = ()=>{
    if (localStorage.getItem('applidJobs')){
        return (JSON.parse(localStorage.getItem('applidJobs')))
    }else{
        return []
    }
}


const saveApplidJobs = (id)=>{
    const existData = getStoredData()
    if (existData.find(item => item === id)){
        alert('This Jobs Allrayd Applyed ')
    }else{
        existData.push(id)
        localStorage.setItem('applidJobs',JSON.stringify(existData))
    }
}

export {getStoredData,saveApplidJobs}