const getStoredEmail =()=>{
    const storedEmailSrt = localStorage.getItem('email')
    if(storedEmailSrt){
        return JSON.parse(storedEmailSrt)
    }
    return ''
}


const setEmailInLs = (userEmail) => {
    localStorage.setItem('email', JSON.stringify(userEmail));
};

export {getStoredEmail,setEmailInLs}